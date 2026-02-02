# Passwordless SSH Login Using SSH Key Authentication (Step-by-Step Guide)

## What Is Passwordless SSH?

Passwordless SSH is a secure authentication mechanism provided by OpenSSH, where a user logs in to a remote Linux server without entering a password, using public-key cryptography instead.

Instead of passwords:

-   A private key stays on the client
-   A public key is stored on the server

## Why Use Passwordless SSH?

-   ❌ Password brute-force attacks
-   ❌ Repeated password entry
-   ❌ Credential sharing risks
-   ❌ Automation failures (scripts, cron, CI/CD)

What It Provides:

-   ✅ Strong cryptographic security
-   ✅ Faster server access
-   ✅ Automation-friendly access
-   ✅ Industry best practice

## Common Use Cases

-   ✔ Server-to-server communication
-   ✔ DevOps automation & CI/CD pipelines
-   ✔ Backup & monitoring scripts
-   ✔ Admin access across environments
-   ✔ Cloud & on-prem Linux servers

## Step 1: Generate SSH Key (Server / Client Side)

Run on the source server (example: 10.159.1.162):

```
ssh-keygen -t rsa -b 4096 -C "localhost"
```

What This Does:

-   Generates a 4096-bit RSA key
-   Creates:

-   ~/.ssh/id_rsa → Private key
-   ~/.ssh/id_rsa.pub → Public key

⚠️ Never share the private key

## Step 2: Prepare SSH Directory on Target Server

Log in to the destination server and run:

```
mkdir -p ~/.ssh
```

Create the authorized keys file:

```
vi ~/.ssh/authorized_keys
```

## Step 3: Add Public Key to authorized_keys

Copy the public key (id_rsa.pub) from the source server and paste it into:

```
~/.ssh/authorized_keys
```

Example (shortened for clarity):

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDUfGd2RolakRTzWAVB... localhost
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDB5L3UofTDDzmALNF9... prod-portal-1.novalocal
```

✔ Multiple keys can exist for multiple servers/users

## Step 4: Set Correct Permissions (Very Important)

```
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

Why Permissions Matter:

SSH will refuse login if permissions are too open.

Image created from ChatGPT

## Step 5: Test Passwordless Login

From the source server (10.159.1.162), run:

```
ssh username@target-server
```

🎉 You should log in without any password or key prompt

## Optional: Disable Password Authentication (Recommended)

For maximum security, disable password login.

Edit SSH config on target server:

```
vi /etc/ssh/sshd_config
```

Set:

```
PasswordAuthentication no
```

Reload SSH:

```
systemctl reload sshd
```

✔ Prevents brute-force attacks

✔ Enforces key-only access

## Security Best Practices

-   Use 4096-bit keys
-   Never share private keys
-   Rotate keys periodically
-   Disable root SSH login
-   Use Fail2Ban for extra protection
-   Restrict SSH access using firewall rules

## Troubleshooting

Permission Denied (publickey):

```
ls -ld ~/.ssh
ls -l ~/.ssh/authorized_keys
```

SSH Verbose Debug:

```
ssh -vvv user@server
```