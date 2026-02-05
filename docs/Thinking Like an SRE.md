# What SRE Interviewers Really Look For

Before we go technical, let's align on reality.

SRE interviews do not test:

-   How many tools do you know
-   How many certifications do you have
-   How fancy your resume looks

They test:

-   How do you think during failure
-   Whether you understand systems end-to-end
-   If you can debug under pressure
-   Whether you can design reliable systems

Everything in this roadmap supports that goal.

## Step 1: Networking Fundamentals (Non-Negotiable)

Every production issue eventually touches networking. If you skip this, you will struggle later.

You must be comfortable with:

-   OSI Model (all 7 layers, not just names)
-   TCP vs UDP
-   IP addressing (At least IPv4)
-   Subnetting and CIDR
-   Routing concepts
-   Switch vs Router
-   NAT and PAT
-   How DNS works and relevant terms (A, AAAA, CNAME, MX, TTL, Alias A, etc)
-   ARP
-   ICMP and ping
-   Load balancing basics (L4 vs L7)
-   Firewalls
-   Latency and packet loss

Interview reality: Many "application issues" are actually DNS, routing, or firewall problems.

## Step 2: Compute, Storage, and Databases (System Thinking)

Before touching cloud or containers, understand how systems work underneath.

### Compute

-   Bare metal vs virtual machines
-   Hypervisors
-   Cores vs Threads
-   Clock speed
-   CPU saturation

### Storage

-   Block storage (example: AWS EBS) vs file storage (example: AWS EFS) vs object storage (example: AWS S3)
-   IOPS vs throughput
-   Latency trade-offs
-   Local vs network-attached storage
-   Logical Volume Management (LVM)

### Databases

-   Relational vs NoSQL
-   Indexes and why they matter
-   Connection pooling
-   Read replicas
-   Backups and restores
-   Slow queries and locks (high level)

This knowledge helps you debug performance issues instead of guessing.

## Step 3: Linux Fundamentals (Your Core Weapon)

Linux is where SREs live. This is not optional.

You should be strong in:

### Core Concepts

-   Operating system basics
-   Kernel vs user space
-   Shell and terminal usage
-   Bash basics

### Daily Commands

-   ls, cd, cp, mv, rm, mkdir, touch, etc.
-   grep, awk, sed
-   find, xargs
-   ps, top, htop
-   df, du, free
-   netstat, ss, lsof
-   vim, nano, etc.

And, there is more as it's never ending.

### File System and Permissions

-   Linux directory structure
-   File permissions
-   chmod, chown, umask
-   SUID, SGID, Sticky Bit
-   User and group management

### Services and Packages

-   systemd basics
-   service lifecycle
-   yum and dnf
-   Installing and managing packages
-   processes

### Networking and Access

-   SSH and key-based auth
-   authorized_keys
-   known_hosts
-   SCP and rsync
-   HTTP vs HTTPS

### Practical Services

-   Basic Apache web server setup
-   MySQL installation and basic operations
-   Cron jobs
-   Log rotation basics

### Scripting:

Bash or Python (At least bash and, if possible, Python as well).

## Step 4: Performance and Troubleshooting Basics

This is where you start thinking like an SRE.

You should know how to investigate:

-   High CPU usage
-   Memory leaks
-   Disk full issues
-   Slow IO
-   Network latency
-   Zombie processes

Understand:

-   Load average
-   Swap usage
-   Kernel tuning basics
-   sysctl parameters (high level)

Interviewers love scenarios like this.

## Step 5: Cloud Fundamentals (AWS Focus)

Cloud is where modern SREs operate.

You must be strong with core AWS services:

### Compute

-   EC2 Instances — AMI, EBS Volumes, Security Groups, ENIs, Elastic IPs, Pricing models, Instance types, etc.
-   Auto Scaling Groups
-   Launch Templates
-   Lambda Functions — State machines (Step Functions)

### Networking & Content Delivery

-   VPC
-   Subnets
-   Route Tables
-   Internet Gateway
-   NAT Gateway
-   Transient Gateways
-   VPC Endpoints
-   Security Groups — implicit deny, explicit allow
-   NACLs
-   Stateless vs Stateful firewalls
-   Load Balancers (ALB, NLB)
-   API Gateways
-   CloudFront
-   Route53

### Storage

-   EBS
-   EFS
-   S3
-   Storage Gateways

### Databases

-   Aurora and RDS
-   DynamoDB (basic understanding)
-   ElastiCache

### Security, Identity & Compliance

-   IAM users, roles, policies, and permissions boundaries
-   STS
-   Least privilege
-   Secrets Manager
-   KMS
-   WAF

### Analytics:

-   Kinesis

### Application Integration:

-   Eventbridge
-   SNS
-   SQS
-   Step Functions

### Containers:

Note: Cover these only after you have learned the container and its orchestration (Kubernetes) fundamentals.

-   ECR
-   ECS
-   EKS

### Observability

-   CloudWatch Logs
-   CloudWatch Metrics and Alarms

You should know how traffic flows inside AWS. This is critical.

## Step 6: Containers and Docker

Containers simplify deployment but add new failure modes.

You must understand:

-   What containers actually are
-   Images vs containers
-   Dockerfile best practices
-   Image layers
-   Volumes
-   Networking modes
-   Resource limits

Be comfortable debugging:

-   Container crashes
-   Image build failures
-   Port issues
-   Permission issues

## Step 7: Kubernetes (Where SRE Interviews Get Serious)

This is a core SRE skill today.

You must understand:

-   Kubernetes architecture overview
-   API server, scheduler, controller manager, kube proxy, kubelet
-   etcd basics
-   Nodes and pods

### Core Objects and Concepts

-   Pods
-   Deployments
-   StatefulSets
-   Services
-   ConfigMaps
-   Secrets
-   Ingress
-   Secrets

And, there is more like PDBs, Admission Controllers, Kyverno, CRDs, Service Istio Mesh, Network policies, Priority Classes, DNS in K8s, Static Pods, Helm Charts, PV, PVCs, Storage Classes, Probes, RBAC, Taints & Tolerations, InitContainers, NodeSelector, NodeAffinity, Resource Quotas, Requests, and Limits, HPAs, Cluster Autoscaler, Cluster Upgrades.

I wish I could list all the topics (practically not possible as it's an endless technology), but these are some of them that you would need to learn.

### Troubleshooting

-   Pod not starting
-   CrashLoopBackOff
-   ImagePullBackOff
-   Pending pods
-   Node issues
-   Resource exhaustion
-   OOM Killed

Know how to:

-   Read logs
-   Describe resources
-   Trace failures across layers

## Step 8: CI/CD Pipelines (Real Production Flow)

SREs don't just deploy. They fix broken pipelines.

You should understand:

-   Git workflows
-   CI vs CD
-   Pipeline stages
-   Artifacts
-   Environment promotion

Hands-on with:

-   GitLab CI pipelines
-   Build failures
-   Test failures
-   Image push failures
-   Deployment rollbacks

## Step 9: Automation and Infrastructure as Code

Manual work does not scale.

Learn:

-   Bash scripting and/or Python for automation
-   Ansible for configuration management
-   Terraform for infrastructure provisioning

You must be able to:

-   Read Terraform plans
-   Debug failed applies
-   Handle state issues
-   Design reusable modules

## Step 10: GitOps and Continuous Delivery

You should understand:

-   GitOps principles
-   Declarative deployments
-   ArgoCD workflows
-   Drift detection
-   Rollbacks

This is frequently discussed in senior-level interviews.

## Step 11: Observability (Logs, Metrics, Alerts)

Observability separates juniors from real SREs.

You should know:

-   What to log and what not to log
-   Linux logging basics
-   CloudWatch logs and metrics
-   Prometheus metrics
-   Long-term metrics storage
-   Log aggregation
-   Dashboards and alerts

Understand alert fatigue and why alerts should wake people only when needed.

## Step 12: Reliability Engineering Concepts

This is pure SRE territory.

You must understand deeply:

-   SLA
-   SLI
-   SLO
-   Error budgets
-   Burn rate alerts

Know how to:

-   Define SLOs
-   Monitor them
-   Act when they are breached

Interviewers love real examples here.

## Step 13: Advanced Troubleshooting (End-to-End)

At this stage, you should be comfortable troubleshooting:

-   Kubernetes deployments
-   CI/CD pipelines
-   Terraform failures
-   Production outages
-   Partial service degradation

Always think:

-   Where is the failure?
-   What changed?
-   How do I confirm the hypothesis?

## Step 14: AI Tools and Prompt Engineering

This is no longer optional.

Learn how to:

-   Use AI tools for debugging
-   Write effective prompts
-   Validate AI output
-   Speed up investigations without blindly trusting

Used correctly, this boosts productivity massively.