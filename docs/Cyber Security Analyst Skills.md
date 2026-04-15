# SOC Analyst Roadmap 2026

## SOC Analyst Roadmap (Beginner → SOC Tier-1)

1.  ### 1. Computer Fundamentals (Foundation Layer) - What You Must Know
    
    -   How computers work
    -   CPU, RAM, Storage
    -   BIOS vs UEFI
    -   Operating Systems
    -   Windows architecture
    -   Linux architecture
    -   Processes & Threads
    -   File Systems
    -   NTFS, FAT32, ext4 (Linux)
    
    #### Practical Skills
    
    -   Task Manager (Windows)
    -   Services & startup programs
    -   File permissions (read/write/execute)
    
    #### SOC Relevance
    
    Helps you understand malware behavior, system compromise, and abnormal activity.
    
2.  ### 2. Linux Fundamentals (SOC Core Skill)
    
    #### Must Learn
    
    -   Linux directory structure (/etc, /var, /home, /log)
    -   Basic commands: Copy ls, cd, pwd, cat, less, grep, awk, sed, ps, top, netstat, ss, chmod, chown
    -   Package management: Copy apt, yum
    -   User & group management
    -   Services: systemctl
    -   Log locations: /var/log/auth.log, /var/log/syslog
    
    #### Hands-On Practice
    
    -   Create users
    -   Analyze failed login attempts
    -   Monitor running processes
    
    #### SOC Relevance
    
    Most servers, SIEM tools, and security platforms run on Linux.
    
3.  ### 3. Networking Fundamentals (CRITICAL for SOC)
    
    #### Core Concepts
    
    -   OSI & TCP/IP models
    -   IP addressing (IPv4, IPv6)
    -   Ports & Protocols: HTTP / HTTPS, FTP / SFTP, SSH, SMTP / POP3 / IMAP, DNS, TCP vs UDP
    -   Firewalls (stateful, stateless)
    
    #### Must Understand
    
    What is normal network traffic and what looks suspicious.
    
    #### Practice
    
    Identify traffic by port number and trace packets from source to destination.
    
    #### SOC Relevance
    
    SOC analysts investigate network attacks, malware communication, and data exfiltration.
    
4.  ### 4. SOC Structure & Operations
    
    #### SOC Levels
    
    -   Tier 1 => Alert Monitoring, triage
    -   Tier 2 => Deep investigation
    -   Tier 3 => Threat hunting, IR
    
    #### SOC Tools:
    
    -   SIEM (Splunk, ELK, Sentinel)
    -   EDR (CrowdStrike, Defender)
    -   SOAR
    -   Ticketing (JIRA, ServiceNow)
5.  ### 5. SOC Workflow
    
    -   Alert generated
    -   Validate alert
    -   Investigate logs
    -   Identify attack
    -   Escalate or close
    -   Document incident
6.  ### 6. Cybersecurity Fundamentals
    
    #### Core Security Concepts
    
    -   CIA Triad (Confidentiality, Integrity, Availability)
    -   Authentication vs Authorization
    -   Least privilege
    -   Defense in depth
    -   Common Security Controls
    -   Firewalls
    -   IDS / IPS
    -   Antivirus / EDR
    -   MFA
    -   Attack Surface Awareness
    -   Endpoints
    -   Network
    -   Cloud
    -   Users (phishing)
    
    #### SOC Relevance
    
    Helps you understand why alerts exist and how attacks succeed.
    
7.  ### 7. Log Reading & Analysis (MOST IMPORTANT)
    
    #### Windows Logs
    
    -   Event Viewer
    -   Important Event IDs:
    
    -   4624 — Successful login
    -   4625 — Failed login
    -   4688 — Process creation
    -   4720 — User created
    
    #### Linux / Ubuntu Logs
    
    -   /var/log/auth.log
    -   /var/log/syslog
    -   SSH login failures
    -   sudo activity
    
    #### Firewall Logs
    
    -   Allowed vs denied traffic
    -   Source IP / Destination IP
    -   Port and protocol
    -   Connection attempts
    
    #### SOC Relevance
    
    SOC analysts spend 70% of their time reading logs.
    
8.  ### 8. Wireshark (Traffic Analysis)
    
    #### What to Learn
    
    -   Packet structure
    -   TCP handshake
    -   DNS queries
    -   HTTP requests & responses
    
    #### Filters to Know
    
    -   ip.addr == 192.168.1.1
    -   tcp.port == 443
    -   http
    -   dns
    
    #### Detect Suspicious Traffic
    
    -   Beaconing behavior
    -   Unusual DNS requests
    -   Large data transfers
    
    #### SOC Relevance
    
    Used to confirm malware activity and data exfiltration.
    
9.  ### 9. Identify Common Attacks (SOC Detection Skills)
    
    -   Phishing
    -   Suspicious email headers
    -   Malicious links
    -   Fake login pages
    -   Brute Force Attacks
    -   Multiple failed logins
    -   Same IP attacking many users
    -   Time-based patterns
    -   Malware
    -   Suspicious processes
    -   Unknown outbound traffic
    -   Persistence mechanisms
    -   Other Attacks
    -   Credential stuffing
    -   Port scanning
    -   Ransomware indicators
    
    #### SOC Relevance
    
    This is what SOC analysts detect and respond to daily.
    
10.  ### 10. Hands-On SOC Practice (VERY IMPORTANT)
    
    #### Labs & Practice
    
    -   Analyze sample logs
    -   Investigate mock alerts
    -   Use Splunk free / ELK
    -   Wireshark PCAP analysis
    -   Simulated Scenarios
    -   Brute force detection
    -   Phishing incident response
    -   Malware beacon detection
    
    #### Job-Ready Skills Checklist
    
    -   Understand logs
    -   Identify attacks
    -   Use Linux confidently
    -   Read network traffic
    -   Understand SOC workflow
    -   Write incident reports
