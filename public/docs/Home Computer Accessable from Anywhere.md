# Make Your Home Computer Reachable From Anywhere (No Public IP, No Router Touching)
## What We Need

Tailscale: makes your laptop + home machine behave like they're on the same private LAN (even across the internet, across CGNAT with periodically changing IP addresses, across your devices, as long as each of them has Tailscale installed and running).

NoMachine: gives you a stable remote desktop session (typing feels normal, clipboard works, OAuth/browser stuff behaves, copy/pasting works out of the box without the need of configuring it).

## Step 0 — Decide Who is "Home" and Who is "Travel"

Home machine: the computer you want to reach (Windows / Linux / Mac).

Travel machine: your laptop (MacBook in my case).

You'll install Tailscale on both. You'll install NoMachine on both, too! On the home machine (server) and on your laptop (client).

## Step 1 — Install Tailscale on macOS (Your Travel Laptop)

If you like Homebrew:

```
brew install --cask tailscale
open -a Tailscale

```

Log in once in the Tailscale app. Done. (If your travel machine is a Linux or Windows, just follow the instructions on Step 2).

## Step 2 — Install Tailscale on the Home Machine

### Linux (Home)

```
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up

```

### Windows 10 (Home) — The Clean Scoop Route

```
Open PowerShell and run:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
iwr -useb get.scoop.sh | iex
scoop bucket add extras
scoop install tailscale

```

Then open Tailscale and log in.

## Step 3 — Get the Home Machine's Tailscale IP Address

On the home machine (or anywhere you have the Tailscale CLI):

```
tailscale ip -4

```

You'll get something like this: 100.xxx.xx.xxx. That's your "private LAN across the internet" address. Optional you can get it by:

```
tailscale status

```

You should see both machines listed. Test from your client machine (laptop) whether the IP address of the home is reachable:

```
ping 100.xxx.xx.xxx

```

There should be a positive result.

<br>
<br>

## THIS SHIT IS FUCKING OPTIONAL. 

<br>
<br>

## Step 4 — Install NoMachine

### Linux (Home Machine)

[[LINK:3:https%3A%2F%2Fwww.nomachine.com%2Feverybody%2Fnomachine-for-your-os:Go here]] and download the Linux package:

```
https://www.nomachine.com/everybody/nomachine-for-your-os

```

Install the .deb (Ubuntu/Debian example):

```
sudo dpkg -i nomachine_*_amd64.deb
sudo apt -f install

```

### Windows 10 (Home Machine)

Same download page, pick Windows installer, install normally.

### macOS (Travel Laptop)

```
brew install --cask nomachine

```

First launch on macOS: give it the permissions it asks for (Screen Recording etc.). Remote desktop apps need them.

## Step 5 — Quick "Is the Path Open?" Test (Optional, but Satisfying)

From your MacBook, test NoMachine's default port on the home machine's Tailscale IP:

```
nc -vz 100.xxx.xx.xxx 4000

```

If that connects, you're golden. (Port 4000 is the default NoMachine NX port.)

## Step 6 — Connect with NoMachine Over Tailscale

On your MacBook:

1.  Open NoMachine
2.  Create a new connection
3.  Host: the home machine's Tailscale IP (100.xxx.xx.xxx)
4.  Port: 4000

Connect and log in with your normal OS user. Now you're on your home desktop… from anywhere… without your router ever noticing.

## That's the Whole Trick

You didn't "expose" your home machine to the public internet. You didn't buy a static IP. You didn't fight router UI archaeology. You just gave your two devices a private network path (Tailscale) and used that path for a proper desktop session (NoMachine).

## Mini Checklist

### On Both Machines

On home machine:

```
tailscale ip -4 # or tailscale status to get the tailscale IP address (100.xx.xxx.xxx)

```

On your laptop, also here and set up a new connection in NoMachine to your home machine. You need for this — your username and password of your home machine and the Tailscale IP address of your home machine.

## Sanity Test

```
nc -vz <tailscale-ip> 4000

```