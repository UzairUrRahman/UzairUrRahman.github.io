# 5 Automation Scripts Every Linux User Should Know


## Smart Folder Organizer

Smart folder organizer script cleans up messy folders for you. If you've ever opened your Downloads folder and seen dozens of PDFs, images, installers, and random files all mixed together, this script solves that problem automatically. Instead of manually dragging files into folders, the script looks at each file, figures out what type it is, and moves it into the right place.

So, create a new file called "smart_organizer.sh" using the nano terminal text editor.

```
nano smart_organizer.sh
```

Then, add the following code:

```
#!/bin/bash

DIR="$HOME/Downloads"

move() {
    mkdir -p "$2"
    mv "$1" "$2/"
}

for file in "$DIR"/*; do
    [ -f "$file" ] || continue

    case "${file##*.}" in
        jpg|png|gif)
            move "$file" "$DIR/Images"
            ;;
        pdf|docx|txt)
            move "$file" "$DIR/Documents"
            ;;
        zip|tar|gz)
            move "$file" "$DIR/Archives"
            ;;
        deb|rpm)
            move "$file" "$DIR/Installers"
            ;;
    esac
done
```

When the script runs, it checks every file inside your Downloads folder. If the item isn't a regular file (for example, if it's already a folder), the script skips it. This prevents anything important from being moved by mistake. For each file, the script looks at the file extension—things like .jpg, .pdf, or .zip. Based on that extension, it decides where the file belongs. Images go into an Images folder, documents go into Documents, compressed files go into Archives, and software installers go into Installers. If one of these folders doesn't exist yet, the script creates it automatically before moving the file. Nothing is deleted; files are simply moved into more organized folders.

## Run the Script

Make sure you are inside your Downloads folder before running the script. So, open a terminal and go to your Downloads folder:

```
cd /Downloads
```

Before running it, take a quick look at your Downloads folder and make sure you're okay with the files being moved into subfolders. Now run the script using the following command:

```
./smart_organizer.sh
```

As soon as it finishes, check your Downloads folder. You'll see new folders like Images, Documents, Archives, and Installers with your files sorted inside.

## Automating Daily Maintenance

Almost every Linux system relies on cron jobs to schedule automatic actions such as backups, updates, and cleanup tasks. On its own, cron is just a scheduler, but this script adds structure and logic on top of it, turning simple scheduled jobs into powerful automation workflows. The following script example updates the system, cleans junk, checks disk space, and logs everything.

```
#!/bin/bash
# Daily system update + cleanup

LOGFILE="/var/log/daily_maintenance.log"

echo "=== Daily maintenance started at $(date) ===" >> "$LOGFILE"

# System update
echo "Updating packages…" >> "$LOGFILE"
sudo apt update && sudo apt upgrade -y >> "$LOGFILE"

# Clean old packages
echo "Cleaning up old packages…" >> "$LOGFILE"
sudo apt autoremove -y >> "$LOGFILE"
sudo apt autoclean >> "$LOGFILE"

# Disk usage report
echo "Disk usage report:" >> "$LOGFILE"
df -h >> "$LOGFILE"

echo "=== Daily maintenance completed at $(date) ===" >> "$LOGFILE"
```

This script automatically takes care of basic daily maintenance on a Linux system. It updates installed software, removes packages and cached files that are no longer needed, and records a snapshot of disk usage. Everything it does is written to a log file, so you can easily check later what happened and when.

## How to Use

Save as /usr/local/bin/daily-maintenance.sh, make it executable (chmod +x), and schedule with cron:

```
crontab -e
```

Then add:

```
0 3 * * * /usr/local/bin/daily-maintenance.sh
```

Now the script runs automatically every day at 3 AM.

## Auto-Installer Script

After installing a new Linux distro, you may need to install different packages. So, instead of installing tools one by one every time you set up a new system, you write a script once and let it install everything for you automatically. Normally, setting up a system looks like this:

```
apt install git
apt install curl
apt install vim
apt install htop
apt install tmux
```

This wastes time, so a simple script turns all of that into one command.

### Simple Auto-Installer

```
#!/bin/bash

sudo apt update
sudo apt install -y git curl vim htop tmux
```

When you run this script, Linux updates its package list and installs all the listed tools automatically without stopping to ask questions. Instead of five manual installs, you get everything in one go.

## Automatic SSH Brute-Force Blocker

If your Linux system is reachable over the internet and has SSH enabled, it may be vulnerable. Bots from all over the world try random usernames and passwords every minute, hoping to get lucky. You usually don't notice this because the attacks fail. An automatic SSH brute-force blocker watches for repeated failed login attempts and blocks the source IP addresses.

### Example Script

```
#!/bin/bash

LOG="/var/log/auth.log"
THRESHOLD=5

grep "Failed password" "$LOG" \
    | awk '{print $(NF-3)}' \
    | sort \
    | uniq -c \
    | while read count ip; do

        if [ "$count" -ge "$THRESHOLD" ]; then
            iptables -A INPUT -s "$ip" -j DROP
            echo "$(date): Blocked $ip after $count failed attempts" \
                >> /var/log/ssh_blocker.log
        fi

    done
```

This script is basically saying: "If someone keeps getting the SSH login wrong too many times (5 attempts), stop them from trying again." So, an SSH brute-force blocker protects your system by watching for repeated failed SSH logins and automatically blocking the attackers.

## System Cleanup Utility

Over time, Linux systems collect things they no longer need like old packages, cached files, temporary data, and logs. None of this is dangerous on its own, but if it's never cleaned up, it slowly wastes disk space and can affect performance.

### Cleanup Script

```
#!/bin/bash

LOG="/var/log/cleanup.log"

echo "$(date) - Starting system cleanup" >> "$LOG"

sudo apt autoremove -y >> "$LOG" 2>&1
sudo apt autoclean -y >> "$LOG" 2>&1

echo "$(date) - Cleanup finished" >> "$LOG"
```

This script cleans your system and keeps a record of when it happened and what was done. It removes unnecessary files, helping your Linux system stay clean, efficient, and free of disk space problems.