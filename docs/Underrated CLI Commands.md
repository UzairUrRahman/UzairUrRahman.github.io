# 10 Underrated CLI Commands You've (Probably) Never Heard Of



1.  ## cbonsai - The Zen of ASCII Trees
    
    Let's start with something soothing.  `cbonsai`  generates beautiful ASCII bonsai trees right in your terminal.
    
    Run it with:
    
    ```
    cbonsai
    ```
    
    and you'll get a randomly generated tree. But the real magic happens with:
    
    ```
    cbonsai -l
    ```
    
    which lets you watch the tree grow. Add the  `-i`  flag to make it loop forever - a perfect minimalist terminal screensaver.
    
    You can also tweak colors, sizes, base types, and even random seeds. It's the most peaceful use of your CPU you'll ever find.
    
    Other terminal art favorites:
    
    -   `cmatrix`  - that Matrix rain effect.
    -   `pipes.sh`  - mesmerizing terminal pipelines.
    -   `asciiquarium`  - ASCII fish swimming across your screen.
2.  ## asciinema - Record Your Terminal Like a Pro
    
    `asciinema`  is a fantastic tool for recording terminal sessions - but unlike traditional screen recorders, it saves everything as plain text.
    
    To record:
    
    ```
    asciinema rec demo.cast
    ```
    
    Type whatever you want, then press  `Ctrl+D`  to finish. You can replay it with:
    
    ```
    asciinema play demo.cast
    ```
    
    The best part? You can embed the recording in web pages using the  [Asciinema Player](https://asciinema.org/), where viewers can copy commands directly from your demo. Perfect for tutorials and documentation.
    
    You can even turn recordings into GIFs or live-stream your session. It's clean, lightweight, and great for technical blogging.
    
3.  ## croc - Simple, Secure File Sharing
    
    Need to send a file between devices without dealing with SSH keys or Google Drive? Meet  `croc`.
    
    Just run:
    
    ```
    croc send file.txt
    ```
    
    It generates a random code phrase (like "blue-tiger-5"). On the other device:
    
    ```
    croc blue-tiger-5
    ```
    
    That's it — the file transfers securely using end-to-end encryption. It supports resumes, custom relays, and directory sharing too.  `croc`  is like AirDrop for the command line.
    
4.  ## ttyd - Access Your Terminal from the Browser
    
    `ttyd`  lets you share a live terminal session over the web. Run:
    
    ```
    ttyd zsh
    ```
    
    Then open the displayed URL — you'll see your terminal running in the browser.
    
    Add the  `-w`  flag to enable interactive mode, and pair it with Tailscale on a VPS, and you've got a powerful remote development setup. I often use it to run agentic AI systems remotely - it's like carrying your workstation in your pocket.
    
5.  ## jrnl - Journaling from the Command Line
    
    `jrnl`  (pronounced "journal") is a simple, open-source journaling tool for the terminal.
    
    Add an entry:
    
    ```
    jrnl Had a great day debugging.
    ```
    
    List your last 10 entries:
    
    ```
    jrnl -n 10
    ```
    
    It supports tags, encryption, timestamps, and multiple journals (for work, personal, or anything else). Minimal, elegant, and surprisingly effective for daily reflections — right from your terminal.
    
6.  ## curl wttr.in - Weather in Your Terminal
    
    Not a standalone app, but a clever trick. Run:
    
    ```
    curl wttr.in
    ```
    
    and you'll get a text-based weather report for your location.
    
    Want a specific city?
    
    ```
    curl wttr.in/Chicago
    ```
    
    It's a fun example of how APIs and ASCII art can blend beautifully inside a terminal.
    
7.  ## newsboat - RSS Reader for the Command Line
    
    `newsboat`  is a TUI-based RSS reader for the terminal. Add your favorite feeds to its config file, then run:
    
    ```
    newsboat
    ```
    
    You can browse articles, open links (with  `links`  or  `lynx`), and keep up with blogs - all without leaving the CLI. Great for distraction-free reading.
    
8.  ## lolcat - Rainbow Cat Output
    
    `lolcat`  is essentially  `cat`, but fabulous. It prints input text in rainbow gradients:
    
    ```
    echo "Hello, world!" | lolcat
    ```
    
    Add  `-a`  to animate the output line by line. Combine it with tools like  `figlet`  to create flashy welcome banners or Easter eggs in your setup.
    
9.  ## faker - Generate Fake Data Instantly
    
    `faker`  creates random but realistic data: names, emails, addresses, credit cards, passwords, hashes - you name it.
    
    Example:
    
    ```
    faker name
    ```
    
    It's perfect for testing or simulating users. You can use it both as a CLI or a Python library, which makes it versatile for automation scripts.
    
10.  ## grex - Generate Regex from Examples
    
    Writing regular expressions can be painful.  `grex`  fixes that by generating regex patterns from example strings.
    
    Example:
    
    ```
    grex file1.txt file2.txt
    ```
    
    It outputs a working regex that matches both. Add flags like  `--digits`  or  `--repetitions`  for more generalized patterns. It's a lifesaver when you know what you want to match but can't remember how.