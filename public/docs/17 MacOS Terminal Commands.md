# 17 macOS Terminal Commands I Actually Use Every Week

## Table of Contents

-   caffeinate — keep your Mac awake
-   Hide desktop icons before a Zoom call
-   Send anything to your clipboard — pbcopy
-   Flush the DNS cache
-   Check battery cycle count
-   What's keeping my Mac awake?
-   Disk space at a glance — df -h
-   Generate a strong password on demand
-   Change the screenshot save location
-   How long has my Mac been running?
-   Make your Mac talk — say
-   Magnify the Dock to mountain size
-   Modern Wi-Fi diagnostics — wdutil
-   Find your public IP
-   Search Spotlight from the command line
-   See every metadata attribute of a file — mdls
-   Expand Save & Print dialogs forever

## 1. caffeinate — keep your Mac awake

Say you're downloading a 40GB game. Or rendering an 8k video. And walked away for a coffee and the lid is still up, but your Mac decided it's time to sleep. Annoying, right?

Here's the fix:

`caffeinate`

Done. Mac stays awake till you come back and press Ctrl+C.

Want it for an exact duration? `caffeinate -d -t 3600` keeps it awake for one hour (3600 secs), then back to normal sleep behaviour.

The `-d` part also stops the display from dimming. (I keep this aliased as cf — saves the 8 keystrokes a few times a day.)

## 2. Hide desktop icons before a Zoom call

The command I paid for 😡. Two seconds before screen-sharing and your Desktop is a graveyard of Screenshot 2025–04–12 at 3.14am.png. Hide them all instantly:

`defaults write com.apple.finder CreateDesktop false; killall Finder`

To bring them back: same line, true instead of false. I have this saved as a one-click Automator app and I trigger it before every screen share.

## 3. Send anything to your clipboard — pbcopy

The Terminal's most underrated trick.

`pbcopy` sends whatever's on stdin to the macOS clipboard. `pbpaste` reads it back. Together they're absurdly useful:

-   `pwd | pbcopy` # current folder path on clipboard
-   `cat ~/.zshrc | pbcopy` # whole file on clipboard
-   `pbpaste | wc -w` # word count of what's on clipboard

Once you discover this, you'll start ending half your commands with `| pbcopy`. I'm not kidding — it becomes a reflex.

## 4. Flush the DNS cache

Useful when the site is up for everyone else but won't load on your Mac. The wifi's fine. So what's to blame?

Stale DNS cache, usually. But what's it?

DNS (Domain Name System) is what matches a website name to its actual IP address. Your Mac caches those lookups so Safari loads faster each time.

Over time the cache gets stale or corrupted, and suddenly a site that's perfectly up for the rest of the internet just won't load for you. So:

`sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`

If it's silent on success, it's a success. Reload the page; nine times out of ten you're back in business.

## 5. Check battery cycle count

Thinking about a trade-in? The cash you receive majorly depends on your battery stats. Apple buries this info behind two sub-menus.

One short command gives you what's enough — cycle count, max capacity, condition, and state of charge (no wading through ioreg noise):

`system_profiler SPPowerDataType | grep -E "Cycle Count|Maximum Capacity|Condition|State of Charge"`

If "Condition" says Service Recommended, time to plan a battery swap for a better price.

If your cycle count is past 1,000 and capacity is below 80%, the trade-in quote you're about to get won't be pretty. (Better to know now.)

## 6. What's keeping my Mac awake?

Plugged in, lid closed, fans still spinning.

Something's holding what macOS calls a "PreventSystemSleep" assertion — which is just a fancy way of saying some process told the OS "hey, don't sleep yet."

This shows you exactly who's the culprit:

`pmset -g assertions`

Scroll to the bottom for the list of named assertions. Usually, it's a backup tool, a download manager, caffeinate, or a streaming app you forgot you opened three hours ago. (For me, it's almost always Plex.)

## 7. Disk space at a glance — df -h

You know that moment when your Mac throws up the "your startup disk is almost full" notification, and you click into About This Mac → Storage and wait 14 seconds for that little bar to load and recalculate? Yeah. Skip that.

`df -h`

Shows every drive and every partition, total/used/free, percentage full, in human-readable units.

The `-h` is human-readable — without it you get bytes, and nobody wants to math their way through that. Instant. No spinner.

## 8. Generate a strong password on demand

No website, no signup, no Chrome extension that wants access to "all your browsing history." Twenty characters of cryptographic randomness, generated locally from /dev/urandom:

`LC_ALL=C tr -dc 'A-Za-z0-9!@#$%^&*'`

Add `| pbcopy` at the end to drop it straight onto your clipboard (remember #3?). Change 20 to whatever length you want — I usually go 24 for anything that matters.

The `LC_ALL=C` bit at the front is the small annoying thing nobody warns you about — without it, macOS's `tr` will throw a confusing "illegal byte sequence" error when it hits a non-ASCII byte from urandom.

Stick it in front, problem gone.

## 9. Change the screenshot save location

Tired of every screenshot dumping straight onto your Desktop and ruining your aesthetic? Pick a folder once. Mine all go into `~/Pictures/Screenshots/`:

`mkdir -p ~/Pictures/Screenshots`

`defaults write com.apple.screencapture location ~/Pictures/Screenshots`

`killall SystemUIServer`

To revert: same command with `~/Desktop` instead of `~/Pictures/Screenshots`.

(Yes, there's a UI for this in ⌘+Shift+5 → Options. But the Terminal way is faster if you're scripting a new Mac's setup — or if you just want it done in 3 seconds without clicking through anything.)

## 10. How long has my Mac been running?

Fun command. Tells you how long since the last reboot, plus the load averages. Mine sometimes hits 30 days. ([">I almost never shutdown](https://app.textformatter.ai/%3Ca%20href=)).

`uptime`

But I still advise — if it's over a week, you probably owe your Mac a restart. OS updates aside, just clearing out long-stuck memory does wonders.

## 11. Make your Mac talk — say

Built right into macOS. The `say` command speaks any text out loud, in any installed voice:

-   `say "Hello, I am your Mac."`
-   `say -v Zoe "Try a different voice."`
-   `say -v "?" | head` # list every voice installed

What good does this do anyway? End any long script with `say "Done!"` and your Mac literally announces when it finishes. No more checking back every 30 seconds to see if the export's done.

Aaaannnddd… pair this with a downloaded book and a voice you like, and you have a free audiobook narrator.

Not joking. I've done it. Before AI.

## 12. Magnify the Dock to mountain size

Here's when I'm talking about it in my old YouTube video:

System Settings caps Dock magnification at 128. Terminal doesn't care. Try 256. Try 512. Genuinely silly, genuinely fun:

`defaults write com.apple.dock largesize -int 256; killall Dock`

Make sure magnification is on in System Settings → Desktop & Dock first.

To revert: `defaults delete com.apple.dock largesize; killall Dock`. (This was my "wait, you can DO that?" moment with Terminal. Once you see Dock icons the size of your face, you understand the assignment.)

## 13. Modern Wi-Fi diagnostics — wdutil

Old Mac tutorials will still tell you to run `airport -I` for Wi-Fi info.

The thing is — Apple removed `airport` in Sonoma. (I lost an afternoon to that one, just confused why a command from every blog post wasn't working.)

The replacement is `wdutil`:

`sudo wdutil info`

SSID, channel, signal strength (RSSI), noise floor, MAC address, security type — everything in one screen.

The number that matters: RSSI is your signal strength, and closer to 0 is stronger. Anything below −70 dBm is weak and you'll feel it. Below −80 and you're basically on a prayer.

## 14. Find your public IP

IP is what the internet sees as "you". Three ways — so you have a fallback if one provider is down:

-   `curl ifconfig.me`
-   `curl icanhazip.com`
-   `dig +short myip.opendns.com @resolver1.opendns.com`

Useful for SSH-ing back into your machine from a coffee shop, confirming your VPN is actually doing its job, or just satisfying that "wait, am I exposed?" curiosity.

(The third one — using OpenDNS directly — bypasses any HTTP-level weirdness, so if the curl ones disagree, trust the dig.)

## 15. Search Spotlight from the command line

I genuinely didn't know this existed for years. You can run Spotlight queries straight from Terminal — and it's faster than find because it uses the same index Spotlight already built:

-   `mdfind "kind:pdf invoice"`
-   `mdfind -onlyin ~/Documents "tax"`
-   `mdfind -name "report.docx"`

The first finds every PDF on your Mac that mentions "invoice". The second searches inside `~/Documents` only. The third finds a file by name.

Once it clicked, I stopped opening Spotlight for file searches entirely. The Terminal results pipe straight into other commands — pair with `| head -5` or `| xargs open` and you're flying.

## 16. See every metadata attribute of a file — mdls

Get Info (Cmd + I) is fine for the basics.

`mdls` is Get Info on steroids — it dumps every single attribute Spotlight has indexed about a file.

And Spotlight indexes way more than you'd think. Image dimensions. EXIF camera model. Document author. Downloaded URL. Downloaded date. All of it:

`mdls /path/to/file`

The killer use-case: `mdls -name kMDItemWhereFroms ~/Downloads/some.pdf` shows the exact URL a file was downloaded from. (Yes, your Mac remembers. Forever. Mildly horrifying, mildly useful.)

## 17. Expand Save & Print dialogs forever

You know that Save dialog that opens collapsed — and you have to click the tiny chevron next to the filename every single time to see folders?

And the Print dialog that hides every useful option behind "Show Details"?

There's no UI toggle for either. But Terminal has the keys:

-   `defaults write -g NSNavPanelExpandedStateForSaveMode -bool true`
-   `defaults write -g NSNavPanelExpandedStateForSaveMode2 -bool true`
-   `defaults write -g PMPrintingExpandedStateForPrint -bool true`
-   `defaults write -g PMPrintingExpandedStateForPrint2 -bool true`

Run those four lines once, probably restart, and every Save and Print dialog opens fully expanded — forever. Across every app. The `-g` flag means global, which is the magic word here.