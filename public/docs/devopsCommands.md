# DevOps Commands Cheat Sheet (With Real-World Examples)

A compact, practical, end-to-end DevOps reference

## 1️⃣ Linux Essentials

👉 Click here to understand 100+ DevOps Commands

### Basic Commands

ls -la                  # List all files with permissions
cd /var/log             # Change directory
pwd                     # Show current path
mkdir app && cd app     # Create & enter directory
rm -rf tmp/             # Delete directory forcefully
cp file1 file2          # Copy file
mv old new              # Rename / move file
touch app.log           # Create empty file

### Permissions & Ownership

chmod 755 script.sh     # rwxr-xr-x
chown user:group file   # Change owner

### System Information

uname -a                # Kernel & OS
hostnamectl             # Host details
free -h                 # Memory usage
df -h                   # Disk usage
uptime                  # Load average

### Logs

ls /var/log/
journalctl -xe          # System errors
tail -f /var/log/syslog # Follow logs

### Services

systemctl status nginx
systemctl restart nginx
systemctl enable nginx
systemctl stop nginx

## 2️⃣ Git Cheat Sheet

👉 Click here to learn Git Essentials Commands with Real-World Examples

### Basics

git clone repo-url
git status
git add .
git commit -m "fix: bug"
git push origin main
git pull

### Branching

git checkout -b feature/login
git branch
git merge feature/login

### Fix Common Issues

git stash               # Save temp changes
git stash pop
git reset --hard HEAD~1
git rebase main
git log --oneline

## 3️⃣ Networking Cheat Sheet

👉 Click here to understand 🔥 IPTABLES Linux Firewall and Networking & Troubleshooting

### Diagnostics

ping google.com
traceroute 8.8.8.8
ip a
ip route

### Ports & Connections

ss -tulnp
netstat -tulnp
lsof -i :80

### DNS

dig example.com
nslookup example.com
curl -I [https://example.com](https://example.com/)

## 4️⃣ Bash Scripting Essentials

👉 Click here to understand Complete Bash shell scripting.

### Template

#!/bin/bash
set -e
for i in {1..5}; do
  echo "Count: $i"
done

### Variables & Conditions

env="dev"
if [ "$env" == "dev" ]; then
  echo "Development mode"
fi

### Useful

$?        # Exit code
$0        # Script name
$1        # First argument

## 🚀 Useful Ansible Commands (Cheatsheet)

👉 Click here to learn Ansible Made Simple—Beginner-Friendly Guide with Examples

# ✔ Ping all servers:
ansible all -m ping -i inventory.txt

# ✔ Run a command:
ansible webservers -a "uname -a" -i inventory.txt

# ✔ Install a package:
ansible webservers -m apt -a "name=nginx state=present" -b -i inventory.txt

# ✔ Run a playbook:
ansible-playbook -i inventory.txt site.yml

# ✔ Check configuration:
ansible-config dump --only-changed

# ✔ List inventory:
ansible-inventory -i inventory.txt --list

# run ad-hoc shell command
ansible web -a "uptime" -i inventory.txt

# run ad-hoc module
ansible db -m apt -a "name=mariadb-server state=present" -b -i inventory.txt

# run a playbook with vault prompt
ansible-playbook -i inventory.txt site.yml --ask-vault-pass

# run with specific vault password file (safer for CI)
ansible-playbook -i inventory.txt site.yml --vault-password-file ~/.vault_pass.txt

# dry run / preview
ansible-playbook -i inventory.txt site.yml --check --diff

# run with verbosity
ansible-playbook -i inventory.txt site.yml -vvv

## 5️⃣ Docker Cheat Sheet

👉 Click here to understand 50+ Docker Commands Every DevOps Engineer Should Know (With Examples)

### Common Commands

docker build -t app .
docker run -d -p 80:80 app
docker ps
docker logs container
docker exec -it container bash

### Troubleshooting

docker ps -a
docker inspect container
docker stats

### Cleanups

docker system prune -a
docker rm $(docker ps -aq)
docker rmi $(docker images -q)

## 6️⃣ Kubernetes (K8s) Cheat Sheet

👉 Click here to understand Kubernetes Cheatsheet with Simple Examples (For Everyday Use)

### Core Commands

kubectl get pods
kubectl get svc
kubectl get deploy
kubectl describe pod pod-name
kubectl logs pod-name
kubectl exec -it pod-name -- sh

### Apply / Delete

kubectl apply -f app.yaml
kubectl delete -f app.yaml

### Troubleshooting

kubectl get events
kubectl describe node
kubectl rollout status deploy app
kubectl rollout undo deploy app

## 🧰 BASIC HELM COMMANDS

👉 Click here to learn 50+ Essential Helm Commands

### helm help — Show help info

Displays help for Helm or any subcommand.

helm help
helm install --help

### helm version — Check client/server version

helm version

### helm repo add — Add a chart repository

helm repo add stable [https://charts.helm.sh/stable](https://charts.helm.sh/stable)

### helm repo update — Refresh repositories

helm repo update

### helm repo list — Show added repos

helm repo list

### helm search hub — Search charts on Helm Hub

helm search hub nginx

### helm search repo — Search local repos

helm search repo mongodb

## 🚀 MySQL Commands

👉 Click here to learn Essential MySQL Commands (Beginner-Friendly)

### 🔍 Check MySQL Version

SELECT VERSION();

### 🔑 List all users

SELECT user, host FROM mysql.user;

### 🔄 Show current database

SELECT DATABASE();

### 📦 Describe table structure

DESC wallet_demo;

### 🔍 Sample queries

SELECT MAX(balance) FROM accounts;
SELECT * FROM accounts LIMIT 5;

### 📚 Check constraints

SELECT * FROM information_schema.TABLE_CONSTRAINTS LIMIT 50;

## 7️⃣ YAML Quick Reference

👉 Click here to learn Master YAML for DevOps—End-to-End Guide

apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: nginx
    ports:
    - containerPort: 80

## 8️⃣ Terraform Cheat Sheet

👉 Click here to learn Terraform Practical—Build VMs with Code and Commands

### Core Commands

terraform init
terraform plan
terraform apply
terraform destroy

### State Management

terraform state list
terraform import aws_instance.web i-123
terraform refresh

### Structure

provider "aws" {}
resource "aws_instance" "web" {
  ami           = "ami-123"
  instance_type = "t2.micro"
}

## 9️⃣ CI/CD Cheat Sheet

👉 Click here to follow a Simple Step-by-Step Jenkins Installation Guide

### Pipeline Stages

Build → Test → Scan → Deploy → Notify

### Jenkinsfile Template

pipeline {
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}

## 🔟 AWS Cheat Sheet

👉 Click here to understand the complete AWS CLI Commands Cheat Sheet

### EC2

ssh -i key.pem ubuntu@ip
systemctl status app
df -h

### S3

aws s3 ls
aws s3 cp file s3://bucket
aws s3 sync ./data s3://bucket

### CloudWatch

aws logs describe-log-groups
aws logs tail /aws/lambda/app --follow

### IAM Best Practices

-   Least privilege
-   MFA enabled
-   No root usage
-   Rotate keys

## 1️⃣1️⃣ Monitoring & Logging

-   Prometheus
-   Exporters
-   Metrics scraping
-   Alert rules
-   Grafana
-   Dashboards
-   Data sources
-   Alerts

## 1️⃣2️⃣ DevSecOps

👉 Click here to understand DevSecOps — Building Secure Software at DevOps Speed

### Security Tools

trivy image app
snyk test


# 10 Hidden DevOps Automation Tricks I Wish I Knew Earlier


## 1. Automate Any Script with Systemd Timers (Not Cron!)

Everyone knows cron, but few realize how much better systemd timers are. They can restart failed jobs, ensure dependencies, and even integrate with journald logs.

Example:

```
# /etc/systemd/system/cleanup-temp.service
[Service]
ExecStart=/usr/local/bin/cleanup-temp.sh

# /etc/systemd/system/cleanup-temp.timer
[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target

```

Enable it:

```
systemctl enable --now cleanup-temp.timer
```

💡 Why it matters: Timers survive reboots, provide full logging, and let you manage jobs like real services—ideal for production systems.

## 2. Sync Servers with rsync + SSH Keys

Instead of manually copying files or using slow FTP uploads, use rsync for incremental syncs—it only transfers changes. Perfect for backups, logs, or configs.

Example:

```
rsync -avz --delete /var/www/ ubuntu@10.0.0.12:/backup/www/
```

💡 Why it matters: You can mirror servers in seconds, and with SSH keys, it runs password-free in CI/CD pipelines or cron jobs.

## 3. Parse JSON Like a Pro with jq

Whether it's a Terraform output, Docker inspect, or GCP CLI response—JSON is everywhere. Instead of manually reading it, use jq to extract exactly what you need.

Example:

```
gcloud run services describe my-app --format=json | jq -r '.status.url'
```

💡 Why it matters: One-liners like this make scripts smarter—no more brittle grep or awk parsing.

## 4. Keep Scripts Alive with tmux Sessions

Ever started a long-running job (like a backup or deployment) and lost it when your SSH session dropped? tmux lets you detach, reconnect, and resume—like magic.

Example:

```
tmux new -s deploy
# run your commands
tmux detach

```

Reconnect anytime:

```
tmux attach -t deploy
```

💡 Why it matters: tmux keeps critical automations alive even when your terminal doesn't.

## 5. Watch Commands in Real Time

The watch command re-runs any command periodically, making it perfect for monitoring changes.

Example:

```
watch -n 5 "kubectl get pods"
```

You can even highlight differences:

```
watch -d df -h
```

💡 Why it matters: Ideal for live debugging—no need to spam the up arrow or rerun commands manually.

## 6. Auto-Rotate Logs with logrotate

Massive log files can fill disks fast. logrotate automates rotation, compression, and cleanup.

Example config:

```
/var/log/nginx/*.log {
    daily
    rotate 7
    compress
    missingok
    notifempty
}

```

💡 Why it matters: Keeps systems clean and stable—no midnight disk space surprises.

## 7. Use Bash One-Liners for Power Moves

Bash can do wonders with a single line. Need to kill all stuck containers? Done.

Examples:

```
# Kill all stopped containers
docker rm $(docker ps -aq --filter status=exited)

# Find and delete large files
find /var/log -type f -size +500M -delete

```

💡 Why it matters: These one-liners turn repetitive chores into instant automation.

## 8. Use xargs to Supercharge Loops

Instead of writing for loops, use xargs to parallelize or batch commands.

Example:

```
cat servers.txt | xargs -n1 -P5 -I{} ssh ubuntu@{} uptime
```

💡 Why it matters: xargs lets you run tasks across multiple systems—fast and efficiently.

## 9. Automate Cleanups with Shell Scripts in CI/CD

Tiny cleanup scripts can save hours in your pipelines. For example, auto-remove old Docker images post-deployment:

Example:

```
#!/bin/bash
docker image prune -af
echo "Cleaned up unused Docker images!"

```

Add it as a post-deploy step in GitHub Actions, GitLab CI, or Cloud Build.

💡 Why it matters: Keeps CI/CD agents clean, reduces build times, and saves storage costs.

## 10. Automate Health Checks with Bash + Curl

Instead of waiting for alerts, run proactive checks.

Example:

```
#!/bin/bash
URL="https://myapp.com/health"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)
if [ "$STATUS" != "200" ]; then
  echo "⚠️ App health check failed at $(date)"
fi

```

Schedule this with a systemd timer or cron to get regular validation.

💡 Why it matters: You'll catch issues before your users do.

## Bonus: Automate Documentation (Yes, Really)

Use echo and tee to log your script outputs to Markdown—auto-generate operational docs!

Example:

```
bash deploy.sh | tee -a deploy-log.md
```

💡 Why it matters: Every automation leaves behind readable, shareable context—no more "tribal knowledge."




# 100+ DevOps Commands Every Engineer Must Know — Quick & Complete Guide

## Basic to Advanced Linux Commands

-   Networking commands
-   File Management commands
-   System Monitoring commands
-   Package Management commands
-   Disk and Filesystem commands
-   Scripting & Automation commands
-   Development and Debugging commands
-   Other Useful Commands

## 🔥 Basic Linux Commands

1.  `pwd`  – Print Working Directory
    
    Copy:  `pwd`  # Shows current directory location
    
    Output:  `/home/user/project`
    
2.  `ls`  – List Files and Directories
    
    Copy:  `ls`  # list items in current directory
    
    Copy:  `ls -l`  # list detailed file info (size, permissions)
    
    Copy:  `ls -a`  # list all including hidden files
    
3.  `cd`  – Change Directory
    
    Copy:  `cd /var/log`  # go to /var/log directory
    
    Copy:  `cd ..`  # move one step back
    
    Copy:  `cd ~`  # go to home directory
    
4.  `touch`  – Create an Empty File
    
    Copy:  `touch file.txt`  # Creates file.txt in the current directory.
    
5.  `mkdir`  – Create a Directory
    
    Copy:  `mkdir backups`  # Creates a folder named backups
    
    Copy:  `mkdir dir1 dir2 dir3`  # To create multiple directories
    
6.  `rm`  – Remove Files or Directories
    
    Copy:  `rm file.txt`  # delete a file
    
    Copy:  `rm -r folder/`  # delete a directory, ⚠ Use with caution, especially with -r
    
7.  `rmdir`  – Remove Empty Directory
    
    Copy:  `rmdir test_folder`  # Deletes a directory only if it is empty.
    
8.  `cp`  – Copy Files/Directories
    
    Copy:  `cp file.txt /tmp/`  # copy file to /tmp/
    
    Copy:  `cp -r dir1/ dir_backup/`  # copy directory (recursive)
    
9.  `mv`  – Move or Rename Files/Directories
    
    Copy:  `mv file.txt /tmp/`  # move file to /tmp
    
    Copy:  `mv oldname.txt newname.txt`  # rename file
    
10.  `cat`  – View File Content
    
    Copy:  `cat config.txt`  # Displays content of a file.
    
    Copy:  `cat file1.txt file2.txt > merged.txt`  # You can also combine files.
    
11.  `echo`  – Print Text to Terminal
    
    Copy:  `echo "Hello DevOps!"`  # Used to display text or write content into files.
    
    Copy:  `echo "Job Done!" > message.txt`  # creates file with text
    
    Copy:  `echo "More data" >> message.txt`  # append to file
    
12.  `clear`  – Clear Terminal Screen
    
    Copy:  `clear`  # Clears previously printed commands and output to keep the screen clean.
    
    Copy:  `Ctrl + L`  # Shortcut key
    

## 🔥 Intermediate Linux Commands

These commands are widely used in daily DevOps operations — from file permissions to process monitoring, network testing, data transfers, and file management.

13.  `chmod`  – Change File Permissions
    
    Copy:  `chmod 400 test.txt`  # Controls who can read, write, or execute a file.
    
    Copy:  `chmod 755 script.sh`  # read+write+execute for owner, read+execute for others
    
    Copy:  `chmod 644 file.txt`  # owner read/write, others read-only
    
14.  `chown`  – Change File Ownership
    
    Copy:  `chown user file.txt`  # change owner
    
    Copy:  `chown user:group file.txt`  # change owner and group
    
15.  `find`  – Search Files/Directories
    
    Copy:  `find /var -name "log*"`  # search files starting with log
    
    Copy:  `find . -type f -size +10M`  # find files larger than 10MB
    
16.  `grep`  – Search Text in Files
    
    Copy:  `grep "error" app.log`  # search word "error" - Find lines containing a specific pattern.
    
    Copy:  `grep -i "fail" app.log`  # case-insensitive search
    
    Copy:  `grep -r "password" /etc/`  # search recursively in directories
    
17.  `wc`  – Word/Line/Character Count
    
    Copy:  `wc -l file.txt`  # count lines
    
    Copy:  `wc -w file.txt`  # count words
    
    Copy:  `wc -c file.txt`  # count characters
    
18.  `head`  – View First Lines of a File
    
    Copy:  `head file.txt`  # By default shows first 10 lines.
    
    Copy:  `head -n 5 file.txt`  # first 5 lines
    
19.  `tail`  – View Last Lines of a File
    
    Copy:  `tail file.log`  # By default shows last 10 lines.
    
    Copy:  `tail -f file.log`  # live real-time log view - Useful for log monitoring.
    
20.  `sort`  – Sort File Content
    
    Copy:  `sort names.txt`  # Sorts alphabetically or numerically.
    
    Copy:  `sort -n numbers.txt`  # numeric sort
    
21.  `uniq`  – Remove Duplicate Lines
    
    Copy:  `sort data.txt | uniq`  # Used with sort to filter unique values.
    
22.  `diff`  – Compare Two Files
    
    Copy:  `diff old.conf new.conf`  # Shows line-by-line differences.
    
23.  `tar`  – Create or Extract Tar Archives
    
    Copy:  `tar -cvf archive.tar folder/`  # create tar - Used for backups files.
    
    Copy:  `tar -xvf archive.tar`  # extract tar
    
24.  `zip/unzip`  – Compress & Extract Zip Files
    
    Copy:  `zip logs.zip *.log`  # zip files
    
    Copy:  `unzip logs.zip`  # extract zip
    
25.  `df`  – Disk Space Usage
    
    Copy:  `df -h`  # Shows available disk and partition usage in human-readable format
    
26.  `du`  – Directory Size
    
    Copy:  `du -sh /var/log`  # total size
    
    Copy:  `du -h *`  # Shows space used by directories/files.
    
27.  `top`  – Live Process Monitoring
    
    Copy:  `top`  # Real-time CPU/memory usage display. (Exit with → q)
    
28.  `ps`  – Show Running Processes
    
    Copy:  `ps aux`  # all processes
    
    Copy:  `ps -ef | grep nginx`  # filter specific process
    
29.  `kill`  – Terminate Processes
    
    Copy:  `kill 1234`  # normal termination.
    
    Copy:  `kill -9 1234`  # force kill
    
30.  `ping`  – Test Network Reachability
    
    Copy:  `ping google.com`  # Checks server connectivity & latency (Stop → Ctrl + C)
    
31.  `wget`  – Download Files from Web
    
    Copy:  `wget https://example.com/file.zip`  # Simple file download via URL.
    
32.  `curl`  – Transfer Data to/from Server
    
    Copy:  `curl http://example.com`  # Supports HTTP, FTP, API calls, etc.
    
    Copy:  `curl -O https://site.com/file.tar.gz`  # download file
    
33.  `scp`  – Secure File Transfer Between Hosts
    
    Copy:  `scp file.txt user@server:/tmp/`  # SSH-based file copy.
    
    Copy:  `scp user@server:/home/logs.zip .`
    
34.  `rsync`  – Fast File Sync/Backup
    
    Copy:  `rsync -av /data/ /backup/`  # Efficient incremental copy.
    
    Copy:  `rsync -avz file user@server:/path/`
    

## 🔥 Advanced Linux Commands

Perfect for DevOps, SysAdmin, and interview preparation ✔️

35.  `awk`  — Text processing and pattern scanning
    
    Copy:  `awk '{print $1, $3}' file.txt`  # Prints column 1 and 3 from each line. - Extract columns, filter rows, perform operations
    
36.  `sed`  — Stream editor (search, replace, modify text)
    
    Copy:  `sed 's/error/ok/g' logfile.txt`  # Replaces all occurrences of error with ok.
    
37.  `cut`  — Remove/extract sections of text
    
    Copy:  `cut -d ":" -f 1 /etc/passwd`  # Shows only first field (username) using : as delimiter.
    
38.  `tr`  — Translate or delete characters
    
    Copy:  `echo "hello world" | tr 'a-z' 'A-Z'`  # Converts lowercase to uppercase.
    
39.  `xargs`  — Build and execute commands from input
    
    Copy:  `cat files.txt | xargs rm`  # Reads file names from files.txt and deletes them.
    
40.  `ln`  — Create hard or symbolic links
    
    Copy:  `ln -s /path/original file_link`  # Creates a symbolic link to a file or folder.
    
41.  `df -h`  — Disk usage in human-readable format
    
    Copy:  `df -h`  # Shows disk space in GB/MB
    
42.  `free`  — Display memory usage
    
    Copy:  `free -h`  # Shows RAM usage in human-readable form.
    
43.  `iostat`  — CPU and I/O statistics
    
    Copy:  `iostat -x 2`  # Shows extended I/O stats every 2 seconds.
    
44.  `netstat`  (deprecated) /  `ss`  (modern)
    
    Copy:  `ss -tulnp`  # Shows listening ports and services.
    
45.  `ifconfig`  /  `ip`  — Network configuration
    
    Copy:  `ip addr show`  # Shows IP addresses of interfaces.
    
46.  `iptables`  — Firewall rule configuration
    
    Copy:  `sudo iptables -L`  # Lists current firewall rules.
    
47.  `systemctl`  — Manage systemd services
    
    Copy:  `sudo systemctl restart nginx`  # Restarts the nginx service.
    
48.  `journalctl`  — View system logs
    
    Copy:  `journalctl -u nginx`  # Shows logs for the nginx service.