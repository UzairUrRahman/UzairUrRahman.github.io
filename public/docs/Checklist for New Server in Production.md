# My Real‑World Checklist for Bringing a New Server Into Production

### 1. Create a New User Immediately

The first rule of server management is simple. Never use the root user for daily tasks. The root user has too much power. If a hacker gets access to root, they own everything.

I always start by creating a new user with limited permissions.

Log in to your new server as root. Then add a new user. I will use the name "admin" here, but you should pick something unique.

```
adduser admin
```

Next, give this new user the ability to run administrative commands with  `sudo`.

```
usermod -aG sudo admin
```

Now you have a safe user to work with.

### 2. Lock Down SSH Access

SSH is the door to your server. By default, this door is wide open. We need to lock it.

Password logins are weak. Computers can guess passwords very quickly. SSH keys are much stronger. They are like a physical key file that only you have.

First, make sure you have generated an SSH key on your local computer. Then copy it to your new server.

```
ssh-copy-id admin@your_server_ip
```

Once your key is on the server, we need to disable password logins completely. This forces everyone to use a key.

Open the SSH configuration file.

```
sudo nano /etc/ssh/sshd_config
```

Find these lines and change them to "no".

```
PasswordAuthentication noPermitRootLogin no
```

Save the file and restart the SSH service.

```
sudo systemctl restart ssh
```

Now, even if someone knows your password, they cannot get in.

### 3. Set Up a Basic Firewall

A firewall is like a security guard. It checks every connection trying to enter your server.

Most Linux servers come with a tool called UFW. It stands for Uncomplicated Firewall. It is very easy to use.

First, we need to set the default rules. We want to block all incoming traffic by default. We will allow all outgoing traffic so your server can download updates.

```
sudo ufw default deny incomingsudo ufw default allow outgoing
```

Next, we must allow SSH connections. If you forget this step, you will lock yourself out.

```
sudo ufw allow ssh
```

If your server hosts a website, you also need to allow web traffic.

```
sudo ufw allow httpsudo ufw allow https
```

Finally, turn the firewall on.

```
sudo ufw enable
```

Check the status to make sure it is working.

```
sudo ufw status
```

### 4. Ban the Bots with Fail2Ban

Even with a firewall, bots will still try to connect to your server. They will try thousands of times per hour. This fills up your logs and wastes system resources.

I use a tool called Fail2Ban to stop this. It watches your logs for failed login attempts. If an IP address fails too many times, Fail2Ban updates the firewall to block that IP address automatically.

Install the tool.

```
sudo apt install fail2ban -y
```

The default settings are usually fine for a basic server. Start the service and let it run in the background.

```
sudo systemctl start fail2bansudo systemctl enable fail2ban
```

You can check how many bad guys have been banned with this command.

```
sudo fail2ban-client status sshd
```

### 5. Automate Security Updates

We are all human. We forget things. You will forget to update your server manually.

Linux has a feature called "unattended upgrades." It installs security patches automatically. This is crucial. It ensures your server is protected against new threats even if you are on vacation.

Install the package.

```
sudo apt install unattended-upgrades -yThen turn it on.sudo dpkg-reconfigure --priority=low unattended-upgrades
```

Select "Yes" when it asks if you want to automatically download and install stable updates.

[Image Description: A diagram showing the flow of automatic updates from the repository to the server]

### 6. Set the Correct Time

This step is often ignored. Servers usually default to UTC time. This is fine until you have to read the logs.

If your application crashes at 5:00 PM your time, but the logs say 10:00 PM, it gets confusing. I always set the server time to match my local time or the time of the business headquarters.

Check the current time settings.

```
timedatectl
```

List the available timezones to find yours.

```
timedatectl list-timezones | grep New_York
```

Set your timezone.

```
sudo timedatectl set-timezone America/New_York
```

Now your logs will make sense.