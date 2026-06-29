
![Post cover image](https://freedium-mirror.cfd/img/700/1*TOB4EEdDKBEqI5Y0NwJ-2Q.png)

# End-to-End DevOps AWS ECS Production-Ready Project

### What We'll Build

In this guide, we will deploy a three-tier application on AWS using a production-style setup.

The final architecture includes:

• Frontend and backend services running on Amazon ECS 
• Container images stored in Amazon ECR 
• A MySQL database hosted on Amazon RDS in private subnets 
• Secure database credential retrieval using Parameter Store 
• GitHub Actions for automated build and push workflows 
• Application Load Balancer routes traffic to services 
• A VPC layout with public and private subnets

By the end, you'll have a working deployment and a clear understanding of how ECS-based applications are structured in real environments.

### Prerequisites

Before starting, you should have:

• Basic understanding of AWS services like ECS, VPC, and RDS 
• An AWS account with permissions to create networking and compute resources 
• Docker installed locally for building images 
• GitHub account for CI/CD setup 
• Familiarity with basic CLI usage and environment configuration

You don't need deep expertise in ECS; this guide explains the important parts along the way.

### HandsOn

#### Create Networking services

![None](https://freedium-mirror.cfd/img/700/1*IUpNyJ2yTV6kO9OTljGFng.png)![None](https://freedium-mirror.cfd/img/700/1*BH_Ww1QiYKJrvPSHNu6TXA.png)

Verify Networking services

![None](https://freedium-mirror.cfd/img/700/1*g_FXnwyxmTEHsqHzMvrtyg.png)

### Create a NAT Gateway and configure

![None](https://freedium-mirror.cfd/img/700/1*Uy_qXRUbaXQXMRFudecdZg.png)![None](https://freedium-mirror.cfd/img/700/1*uDHK-SowUJXdiKuRptShyg.png)![None](https://freedium-mirror.cfd/img/700/1*Ae7L9BtnplEzz2T-2DV_pw.png)![None](https://freedium-mirror.cfd/img/700/1*pYeWC8KiFi1JJNUa97nXmw.png)

Add Routes in the Private Route table, including adding Private Subnets in the Private Route table

![None](https://freedium-mirror.cfd/img/700/1*Hm_Z-aISwT90kZrcQ6WA_A.png)![None](https://freedium-mirror.cfd/img/700/1*4fxarlL_SqrCiiGVMKDPQw.png)![None](https://freedium-mirror.cfd/img/700/1*l9NbFCG_P8EViO6ehmWQJw.png)

### Setup Database

Create DB Subnet Group for RDS with Private Subnets

![None](https://freedium-mirror.cfd/img/700/1*ru6xA0Wd8wvQz3R-2CvArg.png)![None](https://freedium-mirror.cfd/img/700/1*LVHI3-TiMWqnLPqgp8LOog.png)![None](https://freedium-mirror.cfd/img/700/1*EAgVvlTVdHgNhlZMqZPPVA.png)

Now, we have to create an RDS Cluster with a free tier

![None](https://freedium-mirror.cfd/img/700/1*7w62OvZnjDX1lO1E8STC3g.png)![None](https://freedium-mirror.cfd/img/700/1*JothVyDLv3HdcyYGWB5B9Q.png)![None](https://freedium-mirror.cfd/img/700/1*_dcwNxRYZPLmbdW5IsXdpg.png)![None](https://freedium-mirror.cfd/img/700/1*EDBUyX-NhVUmMsCnmbn2xA.png)![None](https://freedium-mirror.cfd/img/700/1*EDBUyX-NhVUmMsCnmbn2xA.png)![None](https://freedium-mirror.cfd/img/700/1*O57MfTEsHsq5dP-gfv6klA.png)

Create a security group for RDS by clicking on Create New if not created.

We will make the changes for ports and other Inbound/Outbound rules later.

![None](https://freedium-mirror.cfd/img/700/1*-GW0_w7DWVlwgBCFkK9z1Q.png)![None](https://freedium-mirror.cfd/img/700/1*yUXNfCp4ZO69BZPDwlBKmQ.png)

RDS is ready

![None](https://freedium-mirror.cfd/img/700/1*RARLruAYLVGlhQIUqYoUQg.png)

### Create Parameter Stores for the DB Credentials

Add the DB Host of your RDS

Keep the root path the same /myapp/db/

![None](https://freedium-mirror.cfd/img/700/1*N6ZDWR_Ae6iEY95xoO9vpA.png)

Add the DB name

![None](https://freedium-mirror.cfd/img/700/1*FPwioPK6nmuiTJq8D5uN2Q.png)

Add the DB Password

![None](https://freedium-mirror.cfd/img/700/1*o_ga95n1IFzN8BILGowSxw.png)

Add the DB username

![None](https://freedium-mirror.cfd/img/700/1*ZWjWFG9hwP_PtK_cIE7uyg.png)

### Create the Backend and Frontend ECR Repo

Backend Repo

![None](https://freedium-mirror.cfd/img/700/1*HLNhw9gLCSgRQmfJJi3E_Q.png)

Frontend Repo

![None](https://freedium-mirror.cfd/img/700/1*UtZC8SKr8DGRKCeL_6W-jQ.png)

Both repos have been created

![None](https://freedium-mirror.cfd/img/700/1*BLk9IiY7YxU4Bjp3zbiEaA.png)

### Configuring ECS Cluster

Provide the name to the ECS Cluster

![None](https://freedium-mirror.cfd/img/700/1*JsRvsQi9fsFQ0VOSrpUtVA.png)![None](https://freedium-mirror.cfd/img/700/1*dkgg_TuQ_u5dJa5qt3aB9A.png)

Currently, we can't create any task definitions because there is no image present in our ECR repo.

To do that, we have to push our image, so let's build our first backend source code and push the Docker image to the ECR repo

Here is the repo link:  [https://github.com/AmanPathak-DevOps/Student-Teacher-Portal-Three-Tier-Application/tree/ecs-deployment](https://github.com/AmanPathak-DevOps/Student-Teacher-Portal-Three-Tier-Application/tree/ecs-deployment)

Make sure you select the ecs-deployment branch; other branches will get you into trouble.

![None](https://freedium-mirror.cfd/img/700/1*3c1QDZJqMI5zkfqeix2y6Q.png)

Now, here is the workflow for the backend

```
name: Backend Build & Pushon:  workflow_dispatch:jobs:  build-push:    runs-on: ubuntu-latest    permissions:      contents: read    defaults:      run:        shell: bash        working-directory: backend    steps:      - name: Checkout Code        uses: actions/checkout@v6      - name: Configure AWS        uses: aws-actions/configure-aws-credentials@v5        with:          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}          aws-region: us-east-1      - name: Login to ECR        uses: aws-actions/amazon-ecr-login@v2      - name: Build and Push        uses: docker/build-push-action@v3        with:          context: backend          path: backend/Dockerfile          push: true          tags: 615299766984.dkr.ecr.us-east-1.amazonaws.com/dev/backend:${{ github.run_number }}
```

As you can see in the repo, two secrets will help us to authenticate with AWS ECR to push our image

![None](https://freedium-mirror.cfd/img/700/1*kWOLqhAUFovzrDR6qGv6NA.png)

Now, we will run our backend workflow and make sure to select the correct branch, i.e., ecs-deployment

![None](https://freedium-mirror.cfd/img/700/1*Xo5Aq6OMaZ7-Q94o5sImvw.png)

Our workflow runs successfully

![None](https://freedium-mirror.cfd/img/700/1*ofy2r1cPrHgER0jn8eqcqw.png)

Here is the image pushed to the ECR repo

![None](https://freedium-mirror.cfd/img/700/1*R4ZOvERTG08SSawRhMrIIw.png)

Now, we have to create the Task Definitions for both our backend and frontend applications. It will be like a blueprint for the containers, like specifications of the containers

![None](https://freedium-mirror.cfd/img/700/1*ATdZAS8ycKOALVjbIY1irQ.png)

Specs of Task Definition

![None](https://freedium-mirror.cfd/img/700/1*pFxpb3uAHnxFf-KMsnHi8g.png)![None](https://freedium-mirror.cfd/img/700/1*VUpVTJ60eqhUfUwTx50EMQ.png)

Task Definition has been created

![None](https://freedium-mirror.cfd/img/700/1*3F6mRfXShoKngHZSN1GT2w.png)

Create a Service in the ECS cluster for the frontend

![None](https://freedium-mirror.cfd/img/700/1*q_jozb3xdl1R_zfQMbp9bg.png)

Specs for Backend service

![None](https://freedium-mirror.cfd/img/700/1*KrZqOkWXAtWg8DB4J7d3HQ.png)![None](https://freedium-mirror.cfd/img/700/1*CgqBsC3_CzgrUJiNXDxhEw.png)![None](https://freedium-mirror.cfd/img/700/1*yzi5BrDi5uY9jDEiKh6FxA.png)![None](https://freedium-mirror.cfd/img/700/1*ieyAwjniu0Q3gpSChHNU-g.png)![None](https://freedium-mirror.cfd/img/700/1*BVTvh2lWKf9D2otVP0GptQ.png)![None](https://freedium-mirror.cfd/img/700/1*OR8rFejC9j2pOGeM0idqsw.png)![None](https://freedium-mirror.cfd/img/700/1*xUy--13b7NcTLoX2-q8hZw.png)

Our both containers are in a running state

![None](https://freedium-mirror.cfd/img/700/1*c84MQ1GSBakUj6UBTp5zFQ.png)

Check the logs for our containers

![None](https://freedium-mirror.cfd/img/700/1*VRw5LF34BaJ0t8x6Wcr_4Q.png)

Both services are running perfectly

![None](https://freedium-mirror.cfd/img/700/1*qy4r5hUWZAtzD8efMejd9w.png)

Here is the LoadBalancer for the backend

![None](https://freedium-mirror.cfd/img/700/1*dVGx3V39jw7MfunV5j8Wrw.png)

Now copy the Backend ALB DNS and follow ahead

### Frontend Deployment

Add the Backend Endpoint in your GitHub Secrets, as we are providing that while building our Dockerfile

API_BASE_URL

![None](https://freedium-mirror.cfd/img/700/1*9dKODnxeo9i7son8E1v52g.png)![None](https://freedium-mirror.cfd/img/700/1*9dKODnxeo9i7son8E1v52g.png)

**Fronted Workflow**

```
name: Frontend Build & Pushon:  workflow_dispatch:jobs:  build-push:    runs-on: ubuntu-latest    permissions:      contents: read    defaults:      run:        shell: bash        working-directory: frontend    steps:      - name: Checkout Code        uses: actions/checkout@v6      - name: Configure AWS        uses: aws-actions/configure-aws-credentials@v5        with:          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}          aws-region: us-east-1      - name: Login to ECR        uses: aws-actions/amazon-ecr-login@v2      - name: Build and Push        uses: docker/build-push-action@v3        with:          context: frontend          path: frontend/Dockerfile          push: true          tags: 615299766984.dkr.ecr.us-east-1.amazonaws.com/dev/frontend:${{ github.run_number }}          build-args: |            REACT_APP_API_BASE_URL=${{ secrets.API_BASE_URL }}
```

Now, we have to run the workflow for the frontend

![None](https://freedium-mirror.cfd/img/700/1*GKw2FWftiD-QIIqbYGTPfQ.png)

The workflow successfully ran

![None](https://freedium-mirror.cfd/img/700/1*dbAQBkiik0c7cEl_zTPI_A.png)

Here is the ECR Image for Frontend Docker

![None](https://freedium-mirror.cfd/img/700/1*CMxSzIOG0TgnC7OTN7RYHg.png)

Now, we have to create the Task Definition for Frontend

![None](https://freedium-mirror.cfd/img/700/1*Y3NNHV3bJxpMy0s0TFY2CQ.png)

Before creating a service for any tier. AWS will prompt you to have an execution Role so your service can have the privilege to talk or access other AWS services. In our case, our Service needs to get a few services, especially fetch values from Parameter Store. For that, we provided SSMFullAccess.

![None](https://freedium-mirror.cfd/img/700/1*AS938YSvyNmKngAtmPb_Dw.png)![None](https://freedium-mirror.cfd/img/700/1*X7aIlmu6RuF-kykxBvQh0Q.png)![None](https://freedium-mirror.cfd/img/700/1*stgIVkhW-6fiMCuEa2gI_Q.png)![None](https://freedium-mirror.cfd/img/700/1*H4QYDBsC-89g86D8OK0ebw.png)![None](https://freedium-mirror.cfd/img/700/1*pd-yCwK3t8GMYG0XZlrfrQ.png)

Task Definition has been created

![None](https://freedium-mirror.cfd/img/700/1*IA1cuCXcmLNjDuVXVQBgqg.png)

Now we have to create a frontend service

![None](https://freedium-mirror.cfd/img/700/1*yPonO81mx7LhsnDnnNKNfQ.png)![None](https://freedium-mirror.cfd/img/700/1*rl2co9H8RK8nF5JaQaZUxA.png)![None](https://freedium-mirror.cfd/img/700/1*rl2co9H8RK8nF5JaQaZUxA.png)![None](https://freedium-mirror.cfd/img/700/1*K_TQ06eWKCv9_i0Q-XGvKQ.png)

Our both task running for the Frontend service

![None](https://freedium-mirror.cfd/img/700/1*8G8uzZo_1N4mG-69hKHIzg.png)

Here is the Target Group, and we can see the targets are healthy for the TG.

![None](https://freedium-mirror.cfd/img/700/1*b4kP910RhWPd3vrkrm_WYA.png)

Here is the Load Balancer for the frontend

![None](https://freedium-mirror.cfd/img/700/1*1t-iu2KrfEaundwciOZUkA.png)

Now, we will add domain mapping to our Frontend Load Balancer. If you want, you can integrate ALB with CDN + WAF. Currently, I will be adding one domain with SSL So we can access the application legitimately.

So, now click on Add listener and provide details as shown in the snippet below.

![None](https://freedium-mirror.cfd/img/700/1*CShO0bl7iAu0xiT7w18fTA.png)![None](https://freedium-mirror.cfd/img/700/1*ZdHSzgnfBPrg8lRCFDk7-w.png)

Added to my DNS provider

![None](https://freedium-mirror.cfd/img/700/1*z4MzdGGQecgcIeN_-7hnVA.png)

Here we can see our application serving via my domain

![None](https://freedium-mirror.cfd/img/700/1*zed47dx8dtwzSfYTI3D69A.png)

The CRUD operation is working fine for the application for both the Teacher and the Student

![None](https://freedium-mirror.cfd/img/700/1*SOrW7eBPtrjW9ZacAisOVw.png)![None](https://freedium-mirror.cfd/img/700/1*osw7pQ2PbJ9QseA-Qtv9Gg.png)

### Now we have to do the cleanup part

Follow the sequence to delete things one by one to avoid any extra cost

1.  ECS Cluster
2.  Tasking Definition from ECS Section (Deregister both TD(frontend and backend) one by one)
3.  Load Balancers (frontend & backend)
4.  Target Groups (frontend & backend)
5.  RDS
6.  NAT Gateway
7.  Associated Security Group(RDS & Default SG)
8.  VPC (it will delete other associated services)
9.  Parameter Store
10.  ECR Repos

### Conclusion

This project helped me understand how ECS deployments actually work when you combine containers, networking, CI/CD, and database connectivity in one setup.