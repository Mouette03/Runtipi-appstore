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

---

## Un refuge sûr pour toutes vos données.

* 📁 **Accédez à vos données** Vous pouvez stocker vos fichiers, contacts, calendriers et plus encore sur un serveur de votre choix.
* 🔄 **Synchronisez vos données** Gardez vos fichiers, contacts, calendriers et plus encore synchronisés entre vos appareils.
* 🙌 **Partagez vos données** …en donnant aux autres accès aux contenus que vous souhaitez partager ou pour collaborer.
* 🚀 **Extensible avec des centaines d'applications** ...comme [Calendar](https://github.com/nextcloud/calendar), [Contacts](https://github.com/nextcloud/contacts), [Mail](https://github.com/nextcloud/mail), [Video Chat](https://github.com/nextcloud/spreed) et toutes celles que vous pouvez découvrir dans notre [App Store](https://apps.nextcloud.com)
* 🔒 **Sécurité** grâce à nos mécanismes de chiffrement, notre [programme de primes HackerOne](https://hackerone.com/nextcloud) et l'authentification à deux facteurs.

Vous souhaitez en savoir plus sur la façon dont vous pouvez utiliser Nextcloud pour accéder, partager et protéger vos fichiers, calendriers, contacts, communications et plus encore chez vous et dans votre organisation ? [**Découvrez toutes nos fonctionnalités**](https://nextcloud.com/athome/).

## Obtenez votre Nextcloud 🚚

- ☑️ [**Inscrivez-vous simplement**](https://nextcloud.com/signup/) chez l'un de nos fournisseurs, via notre site web ou directement depuis les applications.
- 🖥 [**Installez** un serveur vous-même](https://nextcloud.com/install/#instructions-server) sur votre propre matériel ou en utilisant l'une de nos **appliances** prêtes à l'emploi.
- 📦 Achetez l'un des [**appareils** livrés avec Nextcloud préinstallé](https://nextcloud.com/devices/)
- 🏢 Trouvez un [**fournisseur** de services](https://nextcloud.com/providers/) qui héberge Nextcloud pour vous ou votre entreprise

Vous pouvez également [obtenir de l'aide pour Nextcloud](https://nextcloud.com/support) !


## Configurer le dossier de stockage des fichiers sur un disque externe
⚠️AVERTISSEMENT : si vous choisissez de modifier le répertoire de stockage des données original, la sauvegarde via Runtipi de votre application Nextcloud ne sauvegardera pas les fichiers contenus dans le nouvel emplacement.

1) Créez un fichier nommé .ncdata à la racine de votre disque externe ou dans le dossier de votre disque externe. Le propriétaire de cet emplacement doit être ( www-data [33] ) avec les permissions 770. Ce dossier recevra ensuite les fichiers. Insérez ce texte dans le fichier :

```bash
# Nextcloud data directory
# Do not change this file
```

2) Dans le dossier /home/runtipi/user-config/, créez un dossier avec le nom du store, puis créez un dossier nextcloud à l'intérieur. Dans ce dossier, créez un fichier docker-compose.yml et insérez-y les données suivantes en remplaçant (point de montage de votre disque externe) par le point de montage de votre disque externe. Lancez ensuite l'installation de l'application.

```bash
services:
  nextcloud:
    volumes:
      - /point de montage de votre disque externe/nextcloud:/var/www/html/data

  cron:
    volumes:
      - /point de montage de votre disque externe/nextcloud:/var/www/html/data
    entrypoint: /cron.sh
```


## Réinitialiser le mot de passe
Nextcloud ne prend pas en charge la réinitialisation du mot de passe via des variables d'environnement. Si vous souhaitez changer votre mot de passe, exécutez les commandes suivantes dans votre terminal :

```bash
sudo docker exec -u www-data -it nextcloud /bin/bash
php occ user:resetpassword username
```
