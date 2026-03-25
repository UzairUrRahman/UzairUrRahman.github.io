# 5 Bash Scripts That Will Transform Your DevOps Workflow


## 1. The Intelligent Health Check Script

Most health checks are binary: up or down. But what about performance degradation, memory leaks, or disk space issues that don't trigger alerts until it's too late?

```
#!/bin/bash
# Smart health monitoring with graduated alerts
check_service_health() {
    local service=$1
    local warning_threshold=80
    local critical_threshold=95
    
    cpu_usage=$(ps -C $service -o %cpu --no-headers | awk '{sum+=$1} END {print sum}')
    memory_usage=$(ps -C $service -o %mem --no-headers | awk '{sum+=$1} END {print sum}')
    
    if (( $(echo "$cpu_usage > $critical_threshold" | bc -l) )); then
        echo "CRITICAL: $service CPU at ${cpu_usage}%" | logger -t health-check
        # Trigger immediate alert
    elif (( $(echo "$cpu_usage > $warning_threshold" | bc -l) )); then
        echo "WARNING: $service CPU at ${cpu_usage}%" | logger -t health-check
        # Log for trending analysis
    fi
}
```

This script doesn't just check if a service is running — it predicts problems before they become outages. The magic is in the graduated alerting and historical logging.

## 2. The Zero-Downtime Deployment Script

Blue-green deployments are great in theory, but most teams struggle with the orchestration. This script handles the complexity:

```
#!/bin/bash
# Zero-downtime deployment with automatic rollback
deploy_with_rollback() {
    local app_name=$1
    local new_version=$2
    
    # Health check function
    health_check() {
        curl -sf http://localhost:8080/health > /dev/null
        return $?
    }
    
    echo "Starting deployment of $app_name:$new_version"
    
    # Deploy to staging slot
    docker run -d --name ${app_name}_staging $app_name:$new_version
    
    # Wait for startup
    sleep 30
    
    # Verify health
    if health_check; then
        # Switch traffic
        docker stop ${app_name}_prod
        docker rename ${app_name}_staging ${app_name}_prod
        echo "Deployment successful"
    else
        # Automatic rollback
        docker stop ${app_name}_staging
        echo "Deployment failed - rolled back automatically"
        exit 1
    fi
}
```

The key insight here is automated verification and rollback. Most deployment failures happen because someone forgot to check if the new version actually works.

## 3. The Log Analysis Powerhouse

Searching through gigabytes of logs manually is a career-killer. This script turns log analysis into actionable intelligence:

```
#!/bin/bash
# Intelligent log analysis with pattern detection
analyze_logs() {
    local log_file=$1
    local time_window=${2:-"1 hour ago"}
    
    echo "=== Error Summary (Last Hour) ==="
    grep -i "error\|exception\|failed" $log_file | 
    awk -v since="$(date -d "$time_window" +%s)" '
    {
        # Extract timestamp and convert to epoch
        if (match($0, /[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}/)) {
            ts = mktime(gensub(/[-:]/, " ", "g", substr($0, RSTART, RLENGTH)))
            if (ts > since) {
                errors[gensub(/.*([Ee]rror[^:]*):.*/, "\\1", "g")]++
            }
        }
    }
    END {
        for (error in errors) {
            printf "%-50s: %d occurrences\n", error, errors[error]
        }
    }'
    
    echo -e "\n=== Performance Trends ==="
    grep "response_time" $log_file | tail -100 | 
    awk '{print $NF}' | sort -n | 
    awk '{
        sum+=$1; 
        arr[NR]=$1
    } 
    END {
        printf "Average: %.2fms\n", sum/NR
        printf "Median: %.2fms\n", arr[int(NR/2)]
        printf "95th percentile: %.2fms\n", arr[int(NR*0.95)]
    }'
}
```

This transforms raw logs into executive-ready summaries. Instead of saying "there were some errors," you can say "we had 47 database timeout errors affecting the payment system."

## 4. The Infrastructure Provisioning Script

Infrastructure as Code doesn't mean you can't use Bash effectively. This script bridges the gap between cloud APIs and your deployment pipeline:

```
#!/bin/bash
# Cloud-agnostic server provisioning
provision_server() {
    local environment=$1
    local server_type=$2
    
    # Configuration based on environment
    case $environment in
        "prod")
            instance_type="m5.large"
            backup_required=true
            ;;
        "staging")
            instance_type="t3.medium"
            backup_required=false
            ;;
    esac
    
    # Create server (AWS example)
    instance_id=$(aws ec2 run-instances \
        --image-id ami-0abcdef1234567890 \
        --instance-type $instance_type \
        --security-group-ids sg-12345678 \
        --subnet-id subnet-12345678 \
        --tag-specifications "ResourceType=instance,Tags=[{Key=Environment,Value=$environment},{Key=Type,Value=$server_type}]" \
        --query 'Instances[0].InstanceId' \
        --output text)
    
    # Wait for server to be ready
    aws ec2 wait instance-running --instance-ids $instance_id
    
    # Get IP address
    ip_address=$(aws ec2 describe-instances \
        --instance-ids $instance_id \
        --query 'Reservations[0].Instances[0].PublicIpAddress' \
        --output text)
    
    echo "Server provisioned: $ip_address (ID: $instance_id)"
    
    # Configure server
    configure_server $ip_address $environment
}
```

The power here is in environment-aware provisioning and automatic configuration. One script that works across development, staging, and production.

## 5. The Backup and Disaster Recovery Script

Backups that don't work are worse than no backups at all. This script ensures your backups are actually recoverable:

```
#!/bin/bash
# Backup with automatic verification
backup_and_verify() {
    local database=$1
    local backup_location=$2
    
    timestamp=$(date +%Y%m%d_%H%M%S)
    backup_file="${backup_location}/${database}_${timestamp}.sql.gz"
    
    echo "Starting backup of $database"
    
    # Create backup
    mysqldump --single-transaction --routines --triggers $database | 
    gzip > $backup_file
    
    # Verify backup integrity
    if gunzip -t $backup_file; then
        echo "Backup integrity verified"
        
        # Test restore to temporary database
        temp_db="${database}_restore_test"
        mysql -e "CREATE DATABASE $temp_db"
        
        gunzip -c $backup_file | mysql $temp_db
        
        # Verify row counts match
        original_rows=$(mysql -sN -e "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='$database'")
        restored_rows=$(mysql -sN -e "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='$temp_db'")
        
        if [ "$original_rows" -eq "$restored_rows" ]; then
            echo "Backup verification successful"
            # Upload to cloud storage
            aws s3 cp $backup_file s3://backups/$database/
        else
            echo "ALERT: Backup verification failed!"
            exit 1
        fi
        
        # Cleanup
        mysql -e "DROP DATABASE $temp_db"
    else
        echo "ALERT: Backup file corrupted!"
        exit 1
    fi
}
```

This script doesn't just create backups — it proves they work by testing restoration.