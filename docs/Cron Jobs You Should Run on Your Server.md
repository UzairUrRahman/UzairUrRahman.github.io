# 6 Cron Jobs You Should Run on Your Server

## #1. Automated Backups

Regularly backing up our data is non-negotiable. This is arguably one of the most critical uses of cron.

Failures can happen at any time, whether from disk failures, broken deployments, someone running the wrong command, or a silent bug that corrupts data over time.

Backups of critical configurations and databases are essential so that when failures occur, we can recover quickly.

**Why Cron?** Manual backups are prone to human error. We forget, skip steps, or run them too late. Automating the process removes that risk, ensuring backups happen consistently, quietly, and always leave us with a recent recovery point.

```
#!/bin/bash
BACKUP_DIR="/var/backups"
DATE=$(date +%F)

mkdir -p "$BACKUP_DIR"
# Backup application files
tar -czf "$BACKUP_DIR/app-$DATE.tar.gz" /var/www
# Backup configuration
tar -czf "$BACKUP_DIR/config-$DATE.tar.gz" /etc
# Backup PostgreSQL database
pg_dump -U postgres mydb > "$BACKUP_DIR/db-$DATE.sql"
# Backup list of installed packages (useful for recovery)
dpkg --get-selections > "$BACKUP_DIR/packages-$DATE.txt"
# Cleanup old backups (older than 7 days)
find "$BACKUP_DIR" -type f -mtime +7 -delete
# Cron job (daily at 2 AM)
0 2 * * * /usr/local/bin/backup.sh

```

Note: For large datasets, use rsync instead of tar since it only copies changed files, making backups faster. For more robust setups, use tools like restic, which offer incremental backups, encryption, deduplication, and retention policies.

## #2. Log Management

Every service writes logs: web servers, databases, system services, containers. What starts as a few megabytes can turn into gigabytes or even fill an entire disk if left unmanaged.

Managing logs by rotating, compressing, and removing old entries ensures we keep what matters without sacrificing system stability. It also gives us a structured history that is easier to manage and safer for the system.

**Why Cron?** Log rotation is a predictable, recurring task. That makes it a perfect candidate for automation. Instead of manually checking file sizes and cleaning up logs, we let the system handle it consistently, reducing effort and avoiding mistakes.

```
#!/bin/bash

LOG_DIR="/var/log/myapp"
DATE=$(date +%F)
# Rotate current log
mv "$LOG_DIR/app.log" "$LOG_DIR/app-$DATE.log"
# Create a new empty log file
touch "$LOG_DIR/app.log"
# Compress old logs
gzip "$LOG_DIR"/app-*.log
# Remove logs older than 14 days
find "$LOG_DIR" -type f -name "*.gz" -mtime +14 -delete
# Cron job (daily at midnight)
0 0 * * * /usr/local/bin/logrotate.sh

```

## #3. System Monitoring

System monitoring is basically keeping an eye on the health of our machines.

Most systems don't just fail out of nowhere; they usually start showing signs first. CPU usage climbs, memory runs low, disks slowly fill up, or a service quietly stops responding. Monitoring helps us catch these early warnings so we can fix small issues before they turn into bigger outages.

**Why Cron?** Monitoring doesn't always need a full observability stack. Often, simple checks running at regular intervals are enough. Even basic monitoring can give us visibility into how the system is behaving and help us stay in control.

```
#!/bin/bash

# Thresholds
LOAD_THRESHOLD=2.0 # adjust based on CPU cores
MEM_THRESHOLD=80 # % used (based on available memory)
SWAP_THRESHOLD=20 # % swap usage
DISK_THRESHOLD=90 # % disk usage
ALERT="you@example.com"
# Load average (1 minute)
LOAD=$(awk '{print $1}' /proc/loadavg)
# Memory usage (based on available memory)
MEM=$(free | awk '/Mem:/ {printf("%.0f"), ($2-$7)/$2 * 100}')
# Swap usage
SWAP=$(free | awk '/Swap:/ {if ($2==0) print 0; else printf("%.0f"), $3/$2 * 100}')
# Disk usage (root partition)
DISK=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
# Check load
if (( $(echo "$LOAD > $LOAD_THRESHOLD" | bc -l) )); then
echo "High load average: $LOAD (threshold: $LOAD_THRESHOLD)" | mail -s "Load Alert" $ALERT
fi
# Check memory
if [ "$MEM" -gt "$MEM_THRESHOLD" ]; then
echo "High memory usage: ${MEM}% (threshold: ${MEM_THRESHOLD}%)" | mail -s "Memory Alert" $ALERT
fi
# Check swap
if [ "$SWAP" -gt "$SWAP_THRESHOLD" ]; then
echo "High swap usage: ${SWAP}% (threshold: ${SWAP_THRESHOLD}%)" | mail -s "Swap Alert" $ALERT
fi
# Check disk
if [ "$DISK" -gt "$DISK_THRESHOLD" ]; then
echo "High disk usage: ${DISK}% (threshold: ${DISK_THRESHOLD}%)" | mail -s "Disk Alert" $ALERT
fi
# Cron job (every 5 minutes)
*/5 * * * * /usr/local/bin/monitor.sh

```

Note: Cron-based monitoring is great for simple setups. For larger systems, tools like Prometheus, Grafana, or Netdata provide deeper insights and real-time metrics.

## #4. System Maintenance

System maintenance is about keeping things stable and efficient instead of letting them slowly drift out of shape.

Systems don't stay "clean" on their own. Over time, packages get outdated, caches grow, and temporary files build up. Nothing usually breaks right away, but performance gradually drops and small issues start to accumulate.

**Why Cron?** Maintenance tasks are routine and don't need real-time execution. Running them on a schedule keeps the system healthy without manual effort and ensures nothing gets forgotten.

```
#!/bin/bash

# Trigger unattended-upgrades (safe, security updates only)
unattended-upgrade -d

# Clean unused packages and cache
apt autoremove -y
apt autoclean

# Clear temporary files
rm -rf /tmp/*

# Docker cleanup
docker system prune -af --volumes

# Database (Postgres example)
sudo -u postgres psql -d mydb -c "VACUUM ANALYZE;"
# Cron job (daily at 4 AM)
0 4 * * * /usr/local/bin/maintenance.sh

```

Note: unattended-upgrades does not require cron. It runs automatically via systemd timers. While it can be triggered from cron, it's generally not recommended because it may conflict with the system's built-in update timers and package manager locks.

## #5. SSL Certificate Renewal

SSL certificates expire. When they do, our site doesn't just become "less secure"; it becomes untrusted or completely inaccessible to users.

SSL renewal is about ensuring certificates are always valid before they expire, without relying on manual checks.

**Why Cron?** SSL certificates have long expiration periods, so updating them manually is often forgotten. Using cron ensures the renewal process runs automatically on schedule, reducing the risk of expired certificates and service downtime.

```
#!/bin/bash

# using certbot
# Renew certificates (only if needed)
certbot renew --quiet
# Reload web server if renewal happened
systemctl reload nginx
# Cron job (twice a day)
0 */12 * * * /usr/local/bin/ssl-renew.sh

```

We can also add expiration checks and alerts to make sure certificates are renewed on time and nothing slips through unnoticed.

```
#!/bin/bash

DOMAIN="example.com"
ALERT="you@example.com"
EXPIRY=$(echo | openssl s_client -servername $DOMAIN -connect $DOMAIN:443 2>/dev/null \
| openssl x509 -noout -enddate | cut -d= -f2)
EXPIRY_EPOCH=$(date -d "$EXPIRY" +%s)
NOW_EPOCH=$(date +%s)
DAYS_LEFT=$(( (EXPIRY_EPOCH - NOW_EPOCH) / 86400 ))
if [ "$DAYS_LEFT" -lt 15 ]; then
echo "SSL certificate for $DOMAIN expires in $DAYS_LEFT days" \
| mail -s "SSL Expiry Warning" $ALERT
fi
# Cron job (daily at 6 AM)
0 6 * * * /usr/local/bin/ssl-check.sh

```

## #6. Weekly Server Summary Report

A weekly summary gives us a high-level view of our server's health without digging through logs every day. It's a simple way to stay informed and catch slow-moving issues before they become real problems.

**Why Cron?** This is a perfect scheduled task. It doesn't need to run often, just consistently. Once a week is enough to provide visibility without noise.

```
#!/bin/bash

ALERT="you@example.com"
HOST=$(hostname)
REPORT="/tmp/server-report.txt"
echo "Weekly Server Report - $HOST" > "$REPORT"
echo "Generated on: $(date)" >> "$REPORT"
echo "----------------------------------" >> "$REPORT"
# Uptime + Load
echo -e "\nUptime & Load:" >> "$REPORT"
uptime >> "$REPORT"
# Disk usage
echo -e "\nDisk Usage:" >> "$REPORT"
df -h >> "$REPORT"
# Disk hotspots
echo -e "\nTop Disk Usage (/):" >> "$REPORT"
du -h / --max-depth=1 2>/dev/null | sort -hr | head -n 10 >> "$REPORT"
# Memory + Swap
echo -e "\nMemory & Swap:" >> "$REPORT"
free -h >> "$REPORT"
# Top 5 memory consumers
echo -e "\nTop 5 Memory Consumers:" >> "$REPORT"
ps -eo pid,cmd,%mem --sort=-%mem | head -n 6 >> "$REPORT"
# Service restarts (last 7 days)
echo -e "\nService Restarts (Last 7 Days):" >> "$REPORT"
journalctl --since "7 days ago" | grep -i "Started\|Restarted" | tail -n 20 >> "$REPORT"
# Failed SSH login count
echo -e "\nFailed SSH Logins (Last 7 Days):" >> "$REPORT"
grep "Failed password" /var/log/auth.log | wc -l >> "$REPORT"
# Last backup
echo -e "\nLast Backup:" >> "$REPORT"
ls -lh /var/backups | tail -n 1 >> "$REPORT"
# Last 5 cron errors
echo -e "\nLast 5 Cron Errors:" >> "$REPORT"
grep -i "cron" /var/log/syslog 2>/dev/null | grep -i "error" | tail -n 5 >> "$REPORT"
# Reboot required
echo -e "\nReboot Required:" >> "$REPORT"
if [ -f /var/run/reboot-required ]; then
echo "YES" >> "$REPORT"
else
echo "NO" >> "$REPORT"
fi
# Send report
mail -s "Weekly Server Report - $HOST" $ALERT < "$REPORT"
# Cleanup
rm -f "$REPORT"
# At 07:00 AM every Sunday
0 7 * * 0 /usr/local/bin/weekly-report.sh

```

## Best Practices for Cron Management

Cron is simple, but that simplicity can turn into chaos if jobs are scattered, silent, or poorly managed. To keep cron jobs as stable as the server itself, follow these rules:

-   **Use Absolute Paths** → Cron runs in a minimal environment and doesn't load our usual shell config. Commands like python3, node, or even tar might not be found. Absolute paths remove ambiguity and ensure the exact binary we expect is used.

```
/usr/bin/python3 /path/to/script.py
```

-   **Redirect Output** → By default, cron sends job output (both stdout and stderr) to system mail (e.g., /var/mail/root), which often goes unchecked. To make debugging easier and more reliable, we should explicitly redirect both stdout and stderr to a file or logging system.

```
> /var/log/myjob.log 2>&1
```

-   **Randomize Start Times** → If multiple cron jobs are scheduled to run at the same time, they can compete for CPU, disk, or network resources, causing slowdowns or even failures. Staggering job start times helps distribute system load more evenly and improves reliability.

```
# Bad: all run at the same time (00:00)
0 0 * * * /script1.sh
0 0 * * * /script2.sh
0 0 * * * /script3.sh

# Better: staggered execution
0 0 * * * /script1.sh
5 0 * * * /script2.sh
10 0 * * * /script3.sh
```

-   **Define the Environment** → Cron runs jobs in a minimal, non-interactive environment and doesn't load your usual shell config (like .bashrc or .profile). As a result, variables like PATH or HOME may be missing and cause failures. Define the environment our job needs explicitly (directly in crontab or inside the script).

```
PATH=/usr/local/bin:/usr/bin:/bin
APP_ENV=production

0 * * * * /path/to/script.sh
```

-   **Use && for Sequential Commands** → If you need to run multiple commands in sequence and only proceed if the previous one succeeded, use &&. This helps prevent later steps from running when earlier ones fail.

```
* * * * * /path/to/script1.sh && /path/to/script2.sh
```

-   **Keep scripts, not inline commands** → Keep logic in scripts instead of inline cron commands. This makes jobs easier to read, maintain, test, and debug.

```
# avoid long one-liners
0 2 * * * tar -czf backup.tar.gz /data

# use script
0 2 * * * /usr/local/bin/backup.sh
```

-   **Test Before Scheduling** → Test commands manually before adding them to cron to ensure they work as expected and avoid silent failures.
