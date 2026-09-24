---
title: "Nginx Proxy Server"
url: "https://foundryvtt.com/article/nginx/"
category: "Nginx Proxy Server"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Nginx Proxy Server

## 

[Nginx](https://www.nginx.com/ "Nginx Web Server") is a popular web server which you may consider using as a proxy server in front of Foundry Virtual Tabletop.

This is a quick tutorial that will cover how to setup a virtual server that uses Apache to proxy. There are *many advanced options* which are not covered here.

---

### Step 1 - Create your Virtual Host

While setting up a virtual server to host Foundry is outside the scope of this tutorial, here are a few helpful pointers.

First, you will need to procure hosting. Fortunately, many inexpensive options are available:

[Racknerd](https://www.racknerd.com/BlackFriday/)
:   For several years now, Racknerd has offered a hidden ["permanent Black Friday" discount](https://www.racknerd.com/BlackFriday/) year-round. This option offers a particularly excellent value, and our users have reported positive experiences.

**Other options:**

* [Linode](https://www.linode.com/?r=31112a7b4a25b16d80c6267ffec4d7cf50695218)
* [Amazon LightSail](https://aws.amazon.com/lightsail/)
* [Digital Ocean](https://www.digitalocean.com)
* [Vultr](https://www.vultr.com)

Foundry doesn't require many resources on the server side as most of the
processing happens within the client's browser, so the typical $5/month (or lower) plan should be plenty. If you went with Linode, here is a
[tutorial](https://www.linode.com/docs/getting-started/)
you can follow to get your instance created and setup.

---

### Step 2 - Install Nginx

Start by installing Nginx for your Linux distribution. Some common examples are provided below, but consult the [Nginx documentation](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/ "Nginx documentation") for your Linux flavor.

This guide assumes a basic level of familiarity with the Linux operating system and how to interface with it. If you are brand new to Linux we recommend starting with a beginner's tutorial to the Linux command line before proceeding.

#### Ubuntu or Debian

```
sudo apt-get update
sudo apt-get install nginx
```

#### Red Hat or CentOS

```
sudo yum update -y
sudo yum install nginx
```

#### Amazon Linux 2

```
sudo yum update -y
sudo amazon-linux-extras install nginx1 -y
```

---

### Step 3 - Configure Nginx

Nginx requires a configuration file which defines how the server functions. A functional starting point to begin testing Nginx is the following configuration which does not use SSL certificates (we can enable those later). For the purposes of this example we assume that Foundry Virtual Tabletop is running from `/home/ec2-user/foundryvtt`, but your application installation path may be different, you should adjust the configuration file accordingly.

Make sure to update the references to `your.hostname.com` in the configuration.

```
# This goes in a file within /etc/nginx/sites-available/. By convention,
# the filename would be either "your.domain.com" or "foundryvtt", but it
# really does not matter as long as it's unique and descriptive for you.

# Define Server
server {

    # Enter your fully qualified domain name or leave blank
    server_name             your.hostname.com;

    # Listen on port 80 without SSL certificates
    listen                  80;

    # Sets the Max Upload size to 300 MB
    client_max_body_size 300M;

    # Proxy Requests to Foundry VTT
    location / {

        # Set proxy headers
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # These are important to support WebSockets
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";

        # Make sure to set your Foundry VTT port number
        proxy_pass http://localhost:30000;
    }
}
```

Once you have configured Nginx, there are some configurations for Foundry Virtual Tabletop in the [Application Configuration](/article/configuration/ "Application Configuration") article you will also want to apply. Set the following options in your Foundry VTT `{userData}/Config/options.json` file which will instruct Foundry that the server is running with a proxy server in front of it on port 80.

This is where you should update any port-forwarding or access control rules to allow connection to your server on the ports you are allowing through NGINX. For more information please see: [Port Forwarding](/article/port-forwarding/ "Port Forwarding")

Please be aware that if your Foundry VTT location is hosted at a subfolder location, such as `mysite.com/foundryvtt`, you will need to define a `routePrefix` as outlined in the [Application Configuration](/article/configuration/ "Application Configuration") article.

```
"hostname": "your.hostname.com",
"routePrefix": null,
"sslCert": null,
"sslKey": null,
"port": 30000,
"proxyPort": 80
```

Once you have configured your reverse proxy, you will want to restart the proxy instance as well as your Foundry VTT instance to ensure that the new settings are active.

---

### Step 4 - Start, Stop, and Restart Nginx

You can use the `service` utility to easily manage your Nginx server.

```
# Enable new site
sudo ln -s /etc/nginx/sites-available/your.hostname.com /etc/nginx/sites-enabled/

# Test your configuration file, please note that on some OS versions this may be "sudo service nginx configtest" instead
sudo service nginx conftest

# Start Nginx
sudo service nginx start

# Stop Nginx
sudo service nginx stop

# Restart Nginx
sudo service nginx restart
```

---

### Step 5 - Add SSL Certificates (Optional)

For more advanced usage you can add SSL Certificates for added security. Start by creating SSL Certificates, we recommend [using Certbot](https://certbot.eff.org/instructions "Certbot SSL Certificates Instructions"). Once your certificates are created, your Nginx configuration file will be updated to use port 443 and the SSL certificates you have created.

Make sure to update the references to `your.hostname.com` in the configuration.

```
# This goes in a file within /etc/nginx/sites-available/. By convention,
# the filename would be either "your.domain.com" or "foundryvtt", but it
# really does not matter as long as it's unique and descriptive for you.

# Define Server
server {

    # Enter your fully qualified domain name or leave blank
    server_name             your.hostname.com;

    # Listen on port 443 using SSL certificates
    listen                  443 ssl;
    ssl_certificate         "/etc/letsencrypt/live/your.hostname.com/fullchain.pem";
    ssl_certificate_key     "/etc/letsencrypt/live/your.hostname.com/privkey.pem";

    # Sets the Max Upload size to 300 MB
    client_max_body_size 300M;

    # Proxy Requests to Foundry VTT
    location / {

        # Set proxy headers
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # These are important to support WebSockets
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";

        # Make sure to set your Foundry VTT port number
        proxy_pass http://localhost:30000;
    }
}

# Optional, but recommend. Redirects all HTTP requests to HTTPS for you
server {
    if ($host = your.hostname.com) {
        return 301 https://$host$request_uri;
    }

    listen 80;
	listen [::]:80;

    server_name your.hostname.com;
    return 404;
}
```

Once you have edited the Nginx configuration to include your SSL certificates, be sure to do a configuration test before restarting your server. Lastly, there are some additional configuration options for Foundry Virtual Tabletop you will also want to apply. Set the following options in your Foundry VTT `{userData}/Config/options.json` file which will instruct Foundry that the server is running with a proxy server in front of it on port 443.

```
"hostname": "your.hostname.com",
"routePrefix": null,
"sslCert": null,
"sslKey": null,
"port": 30000,
"proxyPort": 443,
"proxySSL": true
```

---

### Serving Static Files via Proxy (Not Recommended)

Now that you have a proxy server available, it could be tempting to use it to serve static files instead of letting the Foundry VTT web server (express) handle this task like normal.

However, this is not a recommended approach. The performance benefits are extremely minimal, the complexity to set it up properly is significant, and the potential for problems outweighs any potential benefit.

Specifically, there is a high likelihood of configuring the proxy server in a way that serves Foundry's static files extremely incorrectly. Furthermore, Foundry VTT's internal logic that determines which static files to serve and where to serve them from may change from version to version without notice.