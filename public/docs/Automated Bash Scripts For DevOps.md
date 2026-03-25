# 10 Bash Scripts Every Linux SysAdmin Should Have Ready

## Script 1: System Health Monitor

This script checks CPU, memory, disk space, and running processes in one command.

```
#!/bin/bash
echo "System Health Report"
echo "===================="
echo "Hostname: $(hostname)"
echo "Time: $(date)"
echo ""
echo "CPU Usage:"
top -bn1 | grep "Cpu(s)" | awk '{print "User: " $2 " System: " $4 " Idle: " $8}'
echo ""
echo "Memory Usage:"
free -h | awk '/^Mem:/ {print "Total: " $2 " Used: " $3 " Free: " $4}'
echo ""
echo "Disk Usage:"
df -h / | awk 'NR==2 {print "Used: " $3 " Available: " $4 " Usage: " $5}'
echo ""
echo "Load Average:"
uptime | awk -F'load average:' '{print $2}'

```

Save as  `health_check.sh`. Run it daily in cron to catch problems before they escalate.

## Script 2: Automated Backup with Rotation

Backups fail when nobody manages them. This script backs up a directory and keeps only the last 7 days of backups.

```
#!/bin/bash
BACKUP_DIR="/backups"
SOURCE_DIR="/var/www"
DAYS_TO_KEEP=7
DATE=$(date +%Y%m%d)
mkdir -p $BACKUP_DIR
tar czf $BACKUP_DIR/backup_$DATE.tar.gz $SOURCE_DIR
find $BACKUP_DIR -name "backup_*.tar.gz" -mtime +$DAYS_TO_KEEP -delete
echo "Backup completed: $DATE"

```

Run this daily. It automatically removes old backups so you don't run out of disk space.

## Script 3: Log Rotation and Cleanup

Logs consume disk space quickly. This script cleans old logs and keeps your disk healthy.

```
#!/bin/bash
LOG_DIR="/var/log"
DAYS_OLD=30
find $LOG_DIR -name "*.log" -type f -mtime +$DAYS_OLD -exec rm {} \;
find $LOG_DIR -name "*.gz" -type f -mtime +$DAYS_OLD -exec rm {} \;
echo "Old logs removed from $LOG_DIR"

```

Pair this with logrotate for maximum efficiency.

## Script 4: Service Health Checker

This script checks if critical services are running and restarts them if they fail.

```
#!/bin/bash
SERVICES=("nginx" "mysql" "redis-server")
for service in "${SERVICES[@]}"
do
  if systemctl is-active --quiet $service; then
    echo "$service is running"
  else
    echo "$service is down. Attempting restart..."
    systemctl restart $service
    sleep 2
    if systemctl is-active --quiet $service; then
      echo "$service restarted successfully"
    else
      echo "Failed to restart $service"
    fi
  fi
done

```

Run every 5 minutes in cron. Catches outages instantly.

## Script 5: User Activity Monitor

Track who logged in, when they logged in, and what they did.

```
#!/bin/bash
echo "Last 10 User Logins:"
lastlog -t 1 | head -11
echo ""
echo "Currently Logged In Users:"
w -h
echo ""
echo "Failed Login Attempts (last 24 hours):"
grep "Failed password" /var/log/auth.log | tail -20 | wc -l

```

Use this for security audits and compliance reporting.

## Script 6: Disk Space Alert

Get notified before your disk fills up completely.

```
#!/bin/bash
THRESHOLD=80
EMAIL="admin@example.com"
USAGE=$(df / | awk 'NR==2 {print $5}' | cut -d'%' -f1)
if [ "$USAGE" -gt "$THRESHOLD" ]; then
  df -h | mail -s "Disk Space Alert: $USAGE%" $EMAIL
fi

```

Run every hour. Prevention beats firefighting.

## Script 7: Port and Service Scanner

Quickly identify which ports are listening on your server.

```
#!/bin/bash
echo "Open Ports and Services:"
netstat -tulpn | grep LISTEN | awk '{print $4, $7}' | while read port service
do
  echo "Port: $port Service: $service"
done

```

Useful for security reviews and troubleshooting.

## Script 8: Database Backup with Timestamp

Backs up MySQL or MariaDB with automatic naming and compression.

```
#!/bin/bash
DB_USER="root"
DB_PASSWORD="your_password"
BACKUP_DIR="/backups/mysql"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
mysqldump -u $DB_USER -p$DB_PASSWORD --all-databases | gzip > $BACKUP_DIR/db_backup_$DATE.sql.gz
echo "Database backup created: $DATE"

```

Store your password in a secure  `.my.cnf`  file instead of hardcoding it.

## Script 9: File Permission Auditor

Check for files with risky permissions that could cause security issues.

```
#!/bin/bash
echo "Files with world-writable permissions:"
find / -type f -perm -002 2>/dev/null | head -20
echo ""
echo "Files with SUID bit set:"
find / -type f -perm /4000 2>/dev/null | head -20
echo ""
echo "Recent modified files (last 24 hours):"
find / -type f -mtime -1 2>/dev/null | head -20

```

Run this monthly for security compliance.

## Script 10: Process Resource Monitor

Find processes consuming the most CPU and memory.

```
#!/bin/bash
echo "Top 5 CPU Consuming Processes:"
ps aux --sort=-%cpu | head -6
echo ""
echo "Top 5 Memory Consuming Processes:"
ps aux --sort=-%mem | head -6
echo ""
echo "Total Process Count:"
ps aux | wc -l

```

Run this when you notice performance problems to identify the culprit.

## How to Use These Scripts

Create a scripts directory in your home folder:

```
mkdir -p ~/bin
chmod +x ~/bin/*.sh

```

Add this directory to your PATH in your  `.bashrc`:

```
export PATH="$HOME/bin:$PATH"

```

Then run any script from anywhere on your system.

## Scheduling Scripts with Cron

Run a health check every day:

```
0 2 * * * /home/user/bin/health_check.sh

```

Run backup rotation every 6 hours:

```
0 */6 * * * /home/user/bin/backup.sh

```

Run the service checker every 5 minutes:

```
*/5 * * * * /home/user/bin/service_check.sh

```