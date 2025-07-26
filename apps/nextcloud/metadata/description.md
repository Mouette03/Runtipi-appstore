## A safe home for all your data.

* 📁 **Access your Data** You can store your files, contacts, calendars and more on a server of your choosing.
* 🔄 **Sync your Data** You keep your files, contacts, calendars and more synchronized amongst your devices.
* 🙌 **Share your Data** …by giving others access to the stuff you want them to see or to collaborate with.
* 🚀 **Expandable with hundreds of Apps** ...like [Calendar](https://github.com/nextcloud/calendar), [Contacts](https://github.com/nextcloud/contacts), [Mail](https://github.com/nextcloud/mail), [Video Chat](https://github.com/nextcloud/spreed) and all those you can discover in our [App Store](https://apps.nextcloud.com)
* 🔒 **Security** with our encryption mechanisms, [HackerOne bounty program](https://hackerone.com/nextcloud) and two-factor authentication.

You want to learn more about how you can use Nextcloud to access, share and protect your files, calendars, contacts, communication & more at home and at your organization? [**Learn about all our Features**](https://nextcloud.com/athome/).

## Get your Nextcloud 🚚

- ☑️ [**Simply sign up**](https://nextcloud.com/signup/) at one of our providers either through our website or through the apps directly.
- 🖥 [**Install** a server by yourself](https://nextcloud.com/install/#instructions-server) on your own hardware or by using one of our ready to use **appliances**
- 📦 Buy one of the [awesome **devices** coming with a preinstalled Nextcloud](https://nextcloud.com/devices/)
- 🏢 Find a [service **provider**](https://nextcloud.com/providers/) who hosts Nextcloud for you or your company

You can also [get support for Nextcloud](https://nextcloud.com/support)!


## To configure the file storage folder on an external drive
⚠️WARNING: if you choose to change the original DATA storage directory, the backup via Runtipi of your Nextcloud application will not save the files contained in the new location.

1) Create a file named  .ncdata at the root of your external drive or in the folder of your external drive, the owner of the location must be ( www-data [33] ) and permissions 770 that will receive the files next, insert this text into the file:

```bash
# Nextcloud data directory
# Do not change this file
```

2) In the /home/runtipi/user-config/ folder, create a folder with the name of the store, and create a folder in it called nextcloud. In this folder, create a docker-compose.yml file and put the following data into it by modifying (mounting point of your external drive) by the mounting point of your external drive. Then start the installation of the application.
 
```bash
services:
  nextcloud:
    volumes:
      - /mounting point of your external drive/nextcloud:/var/www/html/data

  cron:
    volumes:
      - /mounting point of your external drive/nextcloud:/var/www/html/data
    entrypoint: /cron.sh
```


## Reset password
Nextcloud does not support password resets from environment variables. If you want to change your password run the following commands in your terminal:
    
```bash
sudo docker exec -u www-data -it nextcloud /bin/bash
php occ user:resetpassword username
```
