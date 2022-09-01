---
title: "Setting Up Mid Server using Docker"
categories:
    - Development
date: 2022-09-01T16:29:35-05:00
draft: false
tags:
    - servicenow
    - docker
---

NOTE: Getting my notes out there first, need to re-write this better at a later date, with images and code samples.

Download the Docker config from the MID Server downloads page on the instance.

Included is the `Dockerfile` and other supporting documents to run the mid server.

I am running an Oracle Cloud Instance of ARM Ubuntu, the out-of-box configuration of this `Dockerfile` will not work for me.

I first updated the `Dockerfile` to use Amazon Corretto (openjdk) image rather than CentOS. I know Amazon Corretto has a build of java that will work with ARM, rather than using the packaged jvm from ServiceNow.

After updating the Dockerfile, I needed to update the `mid.env` file with all necessary parameters to connect to the instance.

One thing that wasn't listed in any documentation was the setup of `wrapper-override.conf` also reading the env file, and you need to create any variables you want to replace in the `wrapper-override.conf` file.

Since I am using a different jvm, I had to update the `wrapper-override.conf` section for the instance of java to use: `wrapper.java.command`

To let the automation update this for you, just need to add a line in the `mid.env` file: `MID_WRAPPER_wrapper.java.command=/usr/bin/java`

I noticed that every time you start and stop the container, the instance detects that the keystore you generate when hitting Validate MID Server gets blown away. Using the corretto instance, I found the keystore being set in `/usr/lib/jvm/java-1.8.0-amazon-corretto/jre/lib/security` directory. Knowing this, I had to copy the files out of here first to a local directory, and then when running the container, mount my local directory to the container.

This allows my Docker instance to not have to revalidate every time you start/stop the container.
