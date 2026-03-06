# 4 Bash Commands that Should Never Be Run on Any Machine!

## Fork Bomb

Following mysteriously looking command is known as the Fork Bomb.

```
Copy:(){ :|:& };:
```

Never ever make the mistake of running this command to see what it does. (Nor does any other in this post!)

At first glance, this command looks odd. Some might even doubt its validity. It is only after a closer inspection that you will see it invokes a function that recurses without end, and each recursive call spawns a new process. Once executed, processes multiply rapidly, exhausting memory and ultimately crashing the system.

Here is a modified version of the same Bash command.

```
Copy
func() {
  func | func &
};
func
```

See it now? Scary, right?

But there is a way to prevent yourself from fork bombs. There is a mechanism to limit the number of processes a user can spawn. This can be done by editing the /etc/security/limits.conf.

Disclaimer — I've experienced the havoc of a fork bomb firsthand, and it's certainly humbling (and a bit embarrassing) for any developer.

## rm -rf /

Using rm is always a bit dangerous, so developers need to handle it carefully. Picture this: you mean to delete the current folder and its contents with  `rm -rf ./`, but you accidentally type  `rm -rf /`. Notice the missing dot? That tiny mistake tells your computer to start deleting everything — and just like that, your entire system is gone.

You should never run this command — unless you're getting a new machine and completely despise everything on your old one 😉.

A good safeguard to add in your .bashrc is the following.

```
Copy
alias rm='rm -i --preserve-root'
```

The above alias ensures that the rm command asks for confirmation before deleting anything and ensures that you never delete root by mistake.

If you are interested in many more bashrc tricks, check out the following article. 👇

[[LINK:4:https%3A%2F%2Flevelup.gitconnected.com%2Fstack-overflow-classics-i-stole-for-my-bashrc-you-should-too-db7de46b083e:Stack%20Overflow%20Classics%20I%20Stole%20for%20My%20.bashrc%20(You%20Should%20Too)My%20favorite%20shell%20hacks%E2%80%A6%20Ready%20to%20paste!gitconnected.com]]

## Data Eraser

Linux systems offer a command called  `dd`  that enables copying data at raw byte level. Operations performed through  `dd`  are not reversible and should thus be operated very carefully.

Now look at this command before we start its dissection.

```
Copy
dd if=/dev/zero of=/dev/sda
```

The  `if=`  specifies the source from which bytes should be copied to  `of=`. In Linux,  `/dev/zero`  is an infinite source of bytes and  `/dev/sda`  is your disk. Thus essentially, this command overwrites your disk with zeros. 💀

There are no railguards available in the  `dd`  command to prevent this from happening accidentally. The best we can do is to disable the  `dd`  command if we don't need it.

```
Copy
alias dd='echo "dd command is not available"'
```

## Kill All Processes

The famous  `kill`  command is used to stop a running process. While being a handy tool, it should also be used carefully.

Take a look at the following command -

```
Copy
kill -9 -1
```

The command above sends a SIGKILL to all the processes accessible to the current user. This results in all processes getting killed.

It is thus very important that we never run the  `kill`  command with sudo privileges.

## chmod -R 777 /

The famous  `chmod`  command is used to change the permissions of a file. When used along with its  `-R`  flag, the command modifies the permission of files recursively.

Setting permission of a file to  `777`  essentially means "Permit Everything"!

Similar to the  `rm -rf /`  command, a typo in your  `chmod`  command can get you to execute  `chmod -R 777 /`  on your machine. Running this command will mess up the permissions on all files present on your machine.

To prevent such unwanted permission modification, you can create an alias in your bashrc that acts as a railguard.

```
Copy
alias chmod='chmod --preserve-root'
```