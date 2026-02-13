# 15 Linux One-Liners That Feel Like Cheating

Tiny commands. Massive impact. Once you learn these, Linux starts playing on easy mode.


1.  ## Find Large Files Eating Your Disk Space
    
    `du -ah . | sort -rh | head -20`
    
    This command instantly answers the question: "What's using all my disk space?"
    
    -   `du -ah`  shows sizes of all files and directories
    -   `sort -rh`  orders them by size
    -   `head`  limits the output
    
    It's fast, honest, and brutally effective. Once you use this, disk-cleanup GUIs feel unnecessary.
    
2.  ## Kill a Process by Name (Without Googling PIDs)
    
    `pkill -f process_name`
    
    No  `ps`, no  `grep`, no copy-pasting IDs. This one-liner kills matching processes by name. It's perfect when something is stuck, misbehaving, or eating CPU.
    
    Pro tip: Use it carefully. This command does exactly what you ask — nothing more, nothing less.
    
3.  ## Count How Many Times a Word Appears in Files
    
    `grep -R "error" . | wc -l`
    
    Need to know how bad a problem is before diving in? This quickly tells you how many times a word (like  `error`,  `TODO`, or  `FIXME`) appears across a project. It's a great way to measure chaos before fixing it.
    
4.  ## Monitor Logs in Real Time (Like a Pro)
    
    `tail -f app.log | grep --line-buffered ERROR`
    
    Instead of drowning in logs, this shows only what matters — live. You'll see new error lines appear instantly, making debugging feel less reactive and more controlled. Once you try this, scrolling through raw logs feels primitive.
    
5.  ## Replace Text in Multiple Files at Once
    
    `sed -i 's/old_text/new_text/g' *.txt`
    
    This is bulk editing without opening an editor.
    
    -   No search-and-replace dialogs
    -   No accidental misses
    -   No manual repetition
    
    It's fast, scriptable, and dangerously powerful — in the best way.
    
6.  ## Show the Most Used Commands in Your History
    
    `history | awk '{print $2}' | sort | uniq -c | sort -nr | head`
    
    This one feels almost too revealing. It tells you which commands you actually use the most — not the ones you think you use. It's a great way to identify what's worth aliasing or automating. Linux doesn't judge. It just shows receipts.
    
7.  ## Find Files Modified in the Last 24 Hours
    
    `find . -type f -mtime -1`
    
    When something broke "recently" and you're not sure what changed, this command becomes a lifesaver. It narrows your search space instantly and often points straight to the culprit.
    
8.  ## Download a File Without Leaving the Terminal
    
    `curl -O https://example.com/file.zip`
    
    Simple, fast, and script-friendly. This is how servers pull dependencies, configs, and binaries — no browser required. Once you're comfortable with  `curl`, the terminal becomes your primary interface to the web.
    
9.  ## Extract Any Archive Without Remembering Syntax
    
    `tar -xf archive.tar.gz`
    
    Yes, there are more flags. No, you don't need them most of the time. This one-liner works for the majority of tar-based archives and saves you from Googling extraction commands — again.
    
10.  ## See Which Ports Are in Use (and by What)
    
    `ss -tulpn`
    
   When your app refuses to start because "the port is already in use," this command gives you answers immediately. It shows:
    
    -   Active ports
    -   Listening services
    -   Associated process IDs
    
   This is one of those commands that instantly makes you feel in control of your system.
    
11.  ## Rename Files in Bulk (Without Scripts)
    
    `rename 's/ /_/g' *.jpg`
    
   Spaces in filenames are a problem waiting to happen. This one-liner cleans them up in seconds — no loops, no scripts, no regrets. It's especially useful when dealing with downloads or media files.
    
12.  ## Watch a Command Run Every Second
    
    `watch -n 1 df -h`
    
   Perfect for monitoring:
    
    -   Disk usage
    -   Memory consumption
    -   Background processes
    
   Instead of re-running commands manually, Linux does it for you — live.
    
13.  ## Quickly Create a File of Any Size
    
    `fallocate -l 1G testfile.img`
    
   Need a large file for testing uploads, storage, or performance? This creates it instantly — no waiting, no dummy data generation. It's shockingly fast the first time you see it.
    
14.  ## Find and Delete Files Older Than 30 Days
    
    `find . -type f -mtime +30 -delete`
    
   This is automated cleanup at its finest. Perfect for logs, temporary files, and directories that grow quietly until they become a problem. Just test with  `-print`  first if you're nervous — Linux will do exactly what you tell it.
    
15.  ## Pipe Output Directly Into Your Clipboard
    
    `cat file.txt | xclip -selection clipboard`
    
   This feels like magic the first time. You can copy command output directly into your clipboard — no mouse, no highlighting, no context switching. It's small, but once you adopt it, it's hard to go back.
   

   ## 3. Analyze Process Behavior

Once we've identified suspicious processes (high CPU, memory, or stuck in D state), the next question is: Why is the process consuming resources?

### Inspect Open Files / Network / Resources

```
lsof -p <PID>
```

### Monitor Its Activity

```
top -p <PID>
```

### Check for I/O Bottlenecks (If stat is D - blocked on I/O)

-   ```
    iotop -o
    ```
    
    # Per-process I/O usage
-   ```
    iostat -x 1 5
    ```
    
    # Disk device performance
-   ```
    vmstat 1 5
    ```
    
    # CPU and I/O wait

### Trace the Process (Optional, Advanced)

```
strace -p <PID>
```

### Investigate Threads (Multi-threaded app may have one hot thread consuming CPU)

```
ps -L -p <PID> -o pid,tid,psr,%cpu,stat,comm
```

## Zombies Process

The process has terminated, but its parent hasn't reaped it yet. It consumes no CPU or memory except the process table entry.

```
ps -eo pid,ppid,stat,wchan,cmd | awk '$3 ~ /Z/'
```

## Uninterruptible Sleep

High load does not always mean high CPU usage. Very often, it means processes are blocked waiting for disk, memory, or other I/O.

### Processes in D State (Uninterruptible Sleep)

```
ps -eo pid,ppid,stat,wchan,cmd | awk '$3 ~ /D/'
```

# Output

```

 PID   PPID  STAT  WCHAN        CMD
 3241  1     D     io_schedule  postgres: writer process
 3242  1     D     io_schedule  postgres: checkpointer

```

From this output, we can conclude that multiple processes are stuck in D state (uninterruptible sleep waiting for I/O), indicating that the system is experiencing a disk or storage bottleneck, not an application-level problem.

## 2. Inspect Processes

Once we know the system is under pressure, the next question is simple: which process is responsible?

### Top 10 Memory Consumers

```
ps -eo pid,ppid,%cpu,%mem,rss,stat,wchan,cmd --sort=-%mem | head -10
```

### Top 10 CPU Consumers

```
ps -eo pid,ppid,%cpu,%mem,rss,stat,wchan,cmd --sort=-%cpu | head -10
```

pid — process ID

ppid — parent process (helps trace where it came from)

%cpu — Percentage of CPU used

%mem — Percentage of RAM used

rss — Resident Set Size (actual memory used in KB)

stat — process state. Things to watch for:

-   **R**: Running (Application is actively using CPU)
-   **S**: Sleeping (Process is waiting on an event or lock)
-   **D**: Uninterruptible sleep (usually waiting on I/O)
-   **Z**: Zombie (terminated but not reaped by parent)

wchan — kernel function the process is waiting in

cmd — command that started the process

## 1. Start With the Kernel's Perspective

Before digging into logs or blaming applications, let's ask a simple question: is the kernel under pressure?

To answer that, we can check the system load using:

```
uptime
```

# Output

```
14:22:01 up 120 days,  3 users,  load average: 12.4, 10.8, 9.6
```

14:22:01 — The current system time.

up 120 days — This server has been running for about 4 months (120 days) without a reboot.

3 users — The number of users currently logged into the system (via SSH or local terminal).

load average: 12.4, 10.8, 9.6 — Represents the average system load over three different time intervals:

-   12.4: The last 1 minute
-   10.8: The last 5 minutes
-   9.6: The last 15 minutes

### Interpreting the Load

Load is the number of processes that are either using the CPU or waiting for the CPU (runnable state), plus processes waiting for I/O (like reading from a disk).

Is a load of 12.4 "High"? It depends entirely on how many CPU cores we have:

-   On a 4-core system — A load of 12 means the system is running at roughly 300% of capacity, which means the kernel has a long queue of tasks waiting to run.
-   On a 16-core system — The same load of 12 is only about 75% utilized, which might be completely fine.

### Reading the Trend

By looking at all three numbers together, we can tell if the problem is getting better or worse:

-   1m > 5m > 15m — load is increasing, things are getting worse
-   1m < 5m < 15m — load is dropping, system is recovering
-   1m ~ 5m ~ 15m — The load is consistent (stable).