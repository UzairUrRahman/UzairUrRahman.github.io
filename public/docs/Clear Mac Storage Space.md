# How I Reclaimed 120GB of Mac Storage in 5 Minutes (Without Deleting Personal Files)
### Phase 1: The Hidden macOS System Hogs

The massive "System Data" block usually consists of three things: local backups, cache files, and logs.

### 1. The Ghost Backups: Local Time Machine Snapshots

This is the single biggest culprit for mysterious "System" storage bloat.

If you use Time Machine, macOS creates local snapshots of your drive on your internal disk, even when your external backup drive isn't plugged in. It saves these "just in case," and they can easily consume 30GB to 60GB of space.

**The Fix:**  Open your terminal and list the local snapshots:

```
tmutil listlocalsnapshots /
```

You will see a list of dates. You can delete them one by one, or you can force macOS to thin them out automatically by running:

![None](https://freedium-mirror.cfd/img/700/1*9AxFu5T2mqk6VRLBXwvYcg.png)

```
tmutil thinlocalsnapshots / 10000000000 4
```

_(This command asks macOS to free up 10GB of snapshot space, at a high urgency level of 4)._

### 2. The Forgotten Archives: iOS Backups

If you have ever plugged an iPhone or iPad into your Mac to sync or update, macOS probably created a full backup of that device. A single iPhone backup can be 50GB+.

**The Fix:**  You can manage these via Finder (click your device, click "Manage Backups"), or you can nuke them directly from the terminal if you no longer need them:

```
rm -rf ~/Library/Application\ Support/MobileSync/Backup/*
```

### 3. The Clutter: System and App Caches

Every app you use generates cache files to load faster. Over time, apps you haven't opened in years are still holding onto gigabytes of cache.

**The Fix:**  It is generally safe to clear your user cache. The apps will simply rebuild what they need the next time you open them.

```
rm -rf ~/Library/Caches/*
```

_Note: Restart your Mac after running this so the system can cleanly rebuild active caches._

### Phase 2: The Developer Graveyard

If you write code, your disk isn't just full of system data; it's full of dangling Docker volumes, cached packages from old projects, and gigabytes of compiled binaries.

### 4. The Whale in the Room: Docker

Docker doesn't clean up after itself by default. Every time you build an image or spin up a database volume, Docker allocates space. When you stop that container, the space sits there, hoarding gigabytes.

**The Fix:**  Run the nuclear option for Docker cleanup:

```
docker system prune -a --volumes
```

_(This removes all unused images and anonymous volumes not currently attached to a running container. I routinely clear 40GB with this single command)._

### 5. The Black Hole:  `node_modules`

If you write JavaScript or TypeScript, your hard drive is riddled with  `node_modules`  folders. Each one is roughly the size of a black hole.

**The Fix:**  Use  `npkill`. It is a brilliant open-source utility that scans your system for  `node_modules`  directories, sorts them by size, and lets you delete them with the spacebar. Run it directly via  `npx`:

```
npx npkill
```

### 6. The Apple Tax: Xcode DerivedData

Xcode stores project indexes, build logs, and compiled intermediate files in a folder called  `DerivedData`. Over time, this folder grows to absurd proportions.

**The Fix:**  It is completely safe to delete. Xcode will just rebuild what it needs next time.

```
rm -rf ~/Library/Developer/Xcode/DerivedData/*
```

### 7. The Hoarder: Homebrew Cache

When you run  `brew upgrade`, Homebrew downloads the new version, installs it, and keeps the old archive forever.

**The Fix:**  Tell Homebrew to clean up its outdated downloads:

```
brew cleanup
```

![None](https://freedium-mirror.cfd/img/700/1*LaDStVV6XULJGlfS_GuwPQ.png)

### Phase 3: The Detective Work

If you've run the commands above and your disk is still dangerously full, it's time to play detective.

Navigate to your home directory (`cd ~`) and run this command:

```
du -sh * 2>/dev/null | sort -rh | head -20
```

**What this does:**  It calculates the disk usage of every folder, silences the permission errors, sorts them by biggest first, and shows you the top 20 offenders.

Once you spot a massive folder (say,  `~/Downloads`),  `cd`  into it and run the command again. Keep drilling down until you find the exact log file, virtual machine image, or abandoned video asset that is choking your machine.

### The Maintenance Routine

You don't need a paid "Mac Cleaner" app running in your menu bar, draining your battery. You just need to run this routine once a quarter.

1.  Thin your Time Machine snapshots.
2.  Clear old iOS backups.
3.  Prune Docker.
4.  Nuke old  `node_modules`  with  `npkill`.
5.  Clear the Homebrew cache.