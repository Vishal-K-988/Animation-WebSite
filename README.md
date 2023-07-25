# Animation Web Site

Hola everyone! 

Here I created an animation website using HTML, CSS, Javascript and the use of GSAP and Locomotive cdn to make the website more smooth 

Afterwords I deployed my website on 2 platforms:

## 1. AWS (Instance + Application Load Balancer )

1. On aws I created a free tier EC2 instance, Created a Security Group, Selected the free tier processor, and in the USER Data : installed apache web server  and created a key pair. 
2. From putty.exe and with the help of puttygen.exe I converted my .pem file into .ppk format and SSH  into my EC2 Instance 
3.  Now by default apache targets: /var/www/html path and shows the working of the webpage but I want a particular folder in which I reside all my code files and target to that! 
4. To do this: I first created a directory and gave the permission to -wrx to this particular folder named: Locomotive 
    1. by executing the following command : 

```PowerShell
chown ec2-user .  
```

1. After this my local machine opened my command prompt and move to the file location where I stored all my Web Site files to transfer files from the local machine to EC2 Instance I used `SCP` protocol.
2. When all the files are uploaded I just thought to see whether it’s working or not! 
    1. and thankfully it worked! 
3. After this I thought let’s just add ALB(Application Load Balancer) to balance the load to the EC2 instance if more traffic comes (Which I knew it would never ! )
4. Created ALB + created a target group (provided health check to be done in every 10 sec ) 
5. after this process ALB provided public domain. 
6. From that public domain anyone from the internet can see my instance!
7. Link : [DuoLB-683807207.ap-south-1.elb.amazonaws.com](http://duolb-683807207.ap-south-1.elb.amazonaws.com/)

### Drawback:

I need to keep running the ec2 instance forever, which would cost money from my pocket! 

and to overcome this I also deployed my website on GitHub PAGES! 

## GITHUB PAGES

1. Here is a link to GitHub pages website:
    1. https://vishal-k-988.github.io/Animation-WebSite/
