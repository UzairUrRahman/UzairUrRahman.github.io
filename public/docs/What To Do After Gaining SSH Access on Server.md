
# 🔓 What I Do After Gaining Initial Access (SSH → Real Impact)


### 🧠 Why This Matters

Getting SSH access is  **not the goal**.

It's just the beginning.

> _🔥 Real bug bounty impact comes from what you do_ _**after access**_

This guide shows a  **clean, professional post-access workflow**  used in real engagements — focused on  **evidence, impact, and reporting**.

### ⚠️ Ethical Use Disclaimer

Only perform these actions on systems you  **own or are authorized to test**  (e.g., in-scope bug bounty targets or lab environments).

### 🎯 Objective

Once you have SSH access, your goal is:

-   Understand the environment
-   Identify privilege boundaries
-   Find misconfigurations
-   Demonstrate  **real impact safely**

### 🧭 Step 1 — Confirm Your Access

### 🖥️ Basic Context

![None](https://miro.medium.com/v2/resize:fit:700/0*12LbEalRoziNdIoD.jpg)


![None](https://miro.medium.com/v2/resize:fit:700/0*nOJqUvSn5tDNA4cr.png)

Run basic checks:

Copy`whoami
id
hostname
pwd`

👉 This tells you:

-   Your current user
-   Your permissions
-   Where you are

### 🧠 What You're Looking For

-   Are you a low-privileged user?
-   Is this a shared environment?
-   Is this production or staging?

### 🔍 Step 2 — Quick System Enumeration

Understand the system before touching anything.

### 🖥️ System Info

`uname -a
cat /etc/os-release`

### 🖥️ Running Processes

`ps aux`

### 🖥️ Network

`ip a
netstat -tulnp`

### 🧠 Why This Matters

-   Identify exposed services
-   Spot internal-only services
-   Find pivot opportunities

### 📂 Step 3 — Look for Sensitive Files

### 🖥️ High-Value Locations

![None](https://miro.medium.com/v2/resize:fit:700/0*ZOLlOzsweYQbVVfw.png)

![None](https://miro.medium.com/v2/resize:fit:700/0*mlwVv_QgtJLmU617.png)

![None](https://miro.medium.com/v2/resize:fit:700/0*UbGLx6AVlH7KL1lb.png)

Check:

`/home/
/var/www/
/etc/`

### 🔎 Look for:

-   `.env`  files
-   Backup files
-   Config files
-   API keys
-   Database credentials

### Example

Copy`DB_PASSWORD=SuperSecret123`

👉 That's potential escalation or lateral movement

### 🔐 Step 4 — Check Sudo Permissions

### 🖥️ Command

`sudo -l`

### 🖥️ Screenshot — Sudo Misconfig

![None](https://miro.medium.com/v2/resize:fit:700/0*rPCcz7EBQt2nLfLd.jpg)

![None](https://miro.medium.com/v2/resize:fit:700/0*aHNUFJt5Ysevt3Ai)

### 🧠 What You Want

-   `NOPASSWD`  entries
-   Ability to run commands as root

👉 This is one of the  **most common privilege escalation paths**

### 🚀 Step 5 — Privilege Escalation Basics

You are looking for ways to go:

> _user → root_

### Common Paths

-   Sudo misconfig
-   SUID binaries
-   Weak permissions
-   Cron jobs

### 🖥️ Find SUID Files

`find / -perm -4000 -type f 2>/dev/null`

### 🖥️ Screenshot — Priv Esc Discovery

![None](https://miro.medium.com/v2/resize:fit:700/0*fy9v6CobhGZFHF_a)

![None](https://miro.medium.com/v2/resize:fit:700/0*xEtdpyu2At1nOEKk.png)


### 🧠 Goal

👉 Find a  **safe, demonstrable path to higher privileges**

### 🔑 Step 6 — Credential Harvesting

Once inside, credentials are everywhere.

### 🖥️ Where to Look

-   Config files
-   Browser data
-   SSH keys
-   Environment variables

### Example

`cat ~/.ssh/id_rsa`

👉 May allow:

-   Access to other systems
-   Lateral movement

### 🌐 Step 7 — Internal Recon (Hidden Attack Surface)

### 🖥️ Check Internal Services

`netstat -tulnp`

### 🖥️ Screenshot — Internal Services

![None](https://miro.medium.com/v2/resize:fit:700/0*NtE31KNmn8BhJbcv.png)

![None](https://miro.medium.com/v2/resize:fit:700/0*JJRYkCGZSFLuvI69.png)

### 🧠 Why This Is Powerful

You may find:

-   Internal dashboards
-   Admin panels
-   APIs not exposed publicly

👉 These often lead to  **critical bugs**

### 🔄 Step 8 — Lateral Movement (Concept)

If credentials are found:

-   Try other users
-   Try other systems
-   Test access reuse

👉 This turns a low bug into:

> _💥_ _**Full infrastructure compromise**_

### 💣 Real Impact Scenarios

Here's what turns this into a  **high/critical report**:

### 🔥 Example 1 — Privilege Escalation

-   SSH access → low user
-   Misconfigured sudo → root

👉 Full server control

### 🔥 Example 2 — Credential Reuse

-   Found DB creds
-   Access database
-   Dump sensitive data

### 🔥 Example 3 — Internal Admin Panel

-   Internal service exposed
-   No auth required

👉 Account takeover / data access

### 📝 How to Report This Properly

### Title

> _SSH Access Leads to Privilege Escalation and Internal Service Exposure_

### Include

-   Initial access method
-   Step-by-step escalation
-   Evidence (safe screenshots)
-   Impact explanation

### Avoid

❌ Dumping sensitive data ❌ Over-exploiting ❌ Causing damage

### ⚡ Pro Tips (Operator Mindset)

-   Move slowly and observe
-   Take screenshots at every step
-   Think: "What would an attacker do next?"
-   Always aim for  **impact, not noise**

### 🧠 Mental Model

> _"Access is just the door. Impact is what's inside."_
