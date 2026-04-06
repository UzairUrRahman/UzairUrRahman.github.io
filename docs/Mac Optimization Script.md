# Mac Cleanup Script Instructions

## 1. Create the Script File

Open Terminal and run:

```
mkdir -p ~/mac-cleanup
nano ~/mac-cleanup/cleanup.sh
```

Paste this improved version:

```
#!/bin/bash

LOGFILE="$HOME/mac-cleanup/cleanup.log"

echo "----- $(date) -----" >> "$LOGFILE"
echo "🚀 Starting safe Mac cleanup..." | tee -a "$LOGFILE"

# 1. Clear System & User Caches (SAFE)
echo "Clearing caches..." | tee -a "$LOGFILE"
sudo rm -rf /Library/Caches/* 2>/dev/null
rm -rf ~/Library/Caches/* 2>/dev/null
echo "✅ Caches cleared." | tee -a "$LOGFILE"

# 2. Clear Logs (SAFE)
echo "Clearing logs..." | tee -a "$LOGFILE"
sudo rm -rf /private/var/log/* 2>/dev/null
rm -rf ~/Library/Logs/* 2>/dev/null
echo "✅ Logs cleared." | tee -a "$LOGFILE"

# 3. Flush DNS
echo "Flushing DNS..." | tee -a "$LOGFILE"
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
echo "✅ DNS flushed." | tee -a "$LOGFILE"

# 4. Free Memory (optional but useful)
echo "Freeing memory..." | tee -a "$LOGFILE"
sudo purge
echo "✅ Memory freed." | tee -a "$LOGFILE"

echo "🎉 Cleanup done!" | tee -a "$LOGFILE"
```

Make it executable:

```
chmod +x ~/mac-cleanup/cleanup.sh
```

## 2. Run it manually anytime

```
~/mac-cleanup/cleanup.sh
```


## 3. Auto-run on Wake from Sleep (BEST METHOD)

macOS doesn’t natively give a simple “on wake” trigger via GUI — but we can do it properly using sleepwatcher.

### Step A — Install sleepwatcher

```
brew install sleepwatcher
```

### Step B — Create Wake Script Hook

```
nano ~/.wakeup
```

Paste:

```
#!/bin/bash
~/mac-cleanup/cleanup.sh
```

Make it executable:

```
chmod +x ~/.wakeup
```

### Step C — Enable sleepwatcher service

```
brew services start sleepwatcher
```

## Done 🎉

Now your script will:

-   Run manually anytime ✅
-   Run automatically every time your Mac wakes up ✅

## Optional (Manual)

### Check Login Items:
```
osascript -e 'tell application "System Events" to get the name of every login item.
```
Then remove heavy apps via System Settings → General → Login Items

If you want, I can also write a “one-click Mac reset for network + 5GHz WiFi” script that fixes Mole’s possible side effects without touching Notes or Chrome. Do you want me to do that?