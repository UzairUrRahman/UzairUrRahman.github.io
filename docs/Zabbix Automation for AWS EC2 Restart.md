# Zabbix Automation For AWS Server Reboot

Restart EC2 Automatically When Server Goes Down Using Zabbixcost.

## What Problem Are We Solving?

Sometimes servers hang:

-   CPU stuck
-   Memory leak
-   Agent stops responding
-   SSH not reachable

Instead of waiting for a human:

-   Zabbix detects the issue
-   Automatically restarts the EC2
-   Notifies us when the server is back

Simple. Effective.

## Final Flow (High Level)

-   Zabbix checks agent status
-   Agent down for 10 minutes
-   Server uptime more than 1 hour
-   Zabbix runs a restart script
-   EC2 restarts
-   Agent comes back
-   Zabbix sends recovery notification

## Prerequisites

Before starting, make sure you have:

-   Zabbix 7.0 or higher
-   Zabbix agent installed on EC2
-   AWS CLI installed on Zabbix server
-   IAM permissions:
    -   ec2:DescribeInstances
    -   ec2:StopInstances
    -   ec2:StartInstances
-   Zabbix server can access AWS API
-   EC2 private IP is used in Zabbix host interface
-   Hostname {HOST.HOST} must contain the IP address of the server.

## Step 1: Create Restart Script on Zabbix Server

Script location (mandatory):

```
Copy /usr/lib/zabbix/externalscripts/ec2_restart.sh
```

Production-ready script - Restart EC2 Machine:

```
#!/bin/bash
set -euo pipefail

# ---------------- CONFIG ----------------
AWS_CLI="aws"
TIMEOUT=500        # max wait time in seconds
POLL_INTERVAL=10   # seconds
# ----------------------------------------

usage() {
    echo "Usage: $0 <PRIVATE_IP>"
    exit 1
}

log() {
    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $*"
}

error() {
    echo "[ERROR] $(date '+%Y-%m-%d %H:%M:%S') - $*" >&2
    exit 1
}

# ----------- INPUT VALIDATION -----------
IP="${1:-}"
[ -z "$IP" ] && usage
# ----------------------------------------

log "Searching EC2 instance for IP: $IP"

INSTANCE_ID=$(  $AWS_CLI ec2 describe-instances \
    --filters "Name=private-ip-address,Values=$IP" \
    --query "Reservations[].Instances[].InstanceId" \
    --output text)

[ -z "$INSTANCE_ID" ] && error "No instance found for IP $IP"

log "Found Instance ID: $INSTANCE_ID"

# ----------- STOP INSTANCE --------------
log "Stopping instance $INSTANCE_ID"
  $AWS_CLI ec2 stop-instances --instance-ids "$INSTANCE_ID" >/dev/null

log "Waiting for instance to stop..."
START_TIME=$(date +%s)
while true; do
    STATE=$(  $AWS_CLI ec2 describe-instances \
        --instance-ids "$INSTANCE_ID" \
        --query "Reservations[].Instances[].State.Name" \
        --output text)

    [ "$STATE" = "stopped" ] && break

    NOW=$(date +%s)
    [ $((NOW - START_TIME)) -ge $TIMEOUT ] && error "Timeout waiting for stop"

    sleep $POLL_INTERVAL
done

log "Instance stopped successfully"

# ----------- START INSTANCE -------------
log "Starting instance $INSTANCE_ID"
  $AWS_CLI ec2 start-instances --instance-ids "$INSTANCE_ID" >/dev/null

log "Waiting for instance to run..."
START_TIME=$(date +%s)
while true; do
    STATE=$(  $AWS_CLI ec2 describe-instances \
        --instance-ids "$INSTANCE_ID" \
        --query "Reservations[].Instances[].State.Name" \
        --output text)

    [ "$STATE" = "running" ] && break

    NOW=$(date +%s)
    [ $((NOW - START_TIME)) -ge $TIMEOUT ] && error "Timeout waiting for start"

    sleep $POLL_INTERVAL
done

log "Restart completed successfully"
log "IP: $IP | Instance ID: $INSTANCE_ID | State: $STATE"
```

Note: We can also use this script for EC2 instance restart from CLI.

## Permissions

```
Copy chown zabbix:zabbix /usr/lib/zabbix/externalscripts/ec2_restart.sh
chmod 750 /usr/lib/zabbix/externalscripts/ec2_restart.sh
```

Test manually:

```
Copy sudo -u zabbix /usr/lib/zabbix/externalscripts/ec2_restart.sh 10.0.1.25
```

If this fails, Zabbix will fail.

## Step 2: Enable Remote Commands in Zabbix

Edit Zabbix server config:

```
Copy vi /etc/zabbix/zabbix_server.conf
```

Set:

```
Copy EnableGlobalScripts=1
```

Restart Zabbix server:

```
Copy systemctl restart zabbix-server
```

## Step 3: Create Script Object in Zabbix UI

Go to:

```
Copy Alerts → Scripts → Create script
```

Script details:

-   Name: Restart EC2 instance
-   Scope: Action operation
-   Type: Script
-   Execute on: Zabbix server
-   Commands:
    
    ```
    Copy /usr/lib/zabbix/externalscripts/ec2_restart.sh {HOST.IP}
    ```
    

Save.

## Step 4: Configure Triggers

Item 1: Agent availability (already exists)

-   Key: agent.ping
-   Value: 1 = agent up, 0 = agent down

Item 2: Server uptime (to ignore new servers)

Create item:

-   Name: Zabbix agent uptime
-   Type: Zabbix agent
-   Key: system.uptime
-   Update interval: 1m

Note: If you require more health checks before restart, you can add the SSH checks or Telnet checks.

## Step 5: Create Trigger Action (Automation)

Go to:

```
Copy Alerts → Actions → Trigger actions → Create action
```

Action name: Auto restart EC2 when agent is down

Conditions:

1.  Trigger equals: Choose the trigger.
2.  Select the Host groups (optional)

Problem Operations:

-   Add operation:
-   Operation: Restart EC2 instance
-   Target: Current host
-   Conditions: Event is not acknowledged

This executes the restart.

Recovery Operations (Success Notification):

-   Add recovery operation:
-   Operation type: Send message
-   Subject:
    
    ```
    Copy RECOVERED: {HOST.NAME} restarted successfully
    ```
    
-   Message:
    
    ```
    Copy Server has recovered after auto restart.
    Host: {HOST.NAME}
    IP: {HOST.IP}
    Recovery time: {EVENT.RECOVERY.TIME}
    ```
    
-   This message is sent only when the agent comes back.


## Step 6: Verify the Execution:

Go to:

```
Copy Reports → Action log
```

Verify the logs here.
