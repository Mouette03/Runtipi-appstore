# 🇬🇧 phpMyAdmin - RunTiPi App Description

Multi-database graphical interface: external connections + Docker networks + automatic configuration!

---

## Features

- ✅ External databases: MySQL / MariaDB / PostgreSQL
- ✅ Docker networks: access to RunTiPi container databases
- ✅ Configurable fixed port
- ✅ Backup / export: SQL / CSV / JSON
- ✅ Pre-configured connections: `config.user.inc.php` (0 login entry)

---

## 🚀 Advanced Configuration

### 1. Connecting to Docker Networks (Container Databases)

**Retrieve network names:**

```
sudo docker network ls 
```

Example output:
```
app1_network
app2_network
app3_network
```

RunTiPi user configuration → docker-compose.yml:

```
services:
  phpmyadmin:
    networks:
      - runtipi_tipi_main_network
      - APP1_test_network
      - APP2_test_network

networks:
  runtipi_tipi_main_network:
    external: true
  APP1_network:
    external: true
  APP2_network:
    external: true
    
  ```

### 2. Pre-configured Connections (config.user.inc.php) ###

Edit the file: ${APP_DATA_DIR}/data/config.user.inc.php

Generic template (adapt your credentials):

**⚠️ Parts to modify in the file:**
- `blowfish_secret`: replace with 32 random characters
- `host`: database hostname or IP (e.g., `localhost`, `mariadb`, `192.168.1.100`)
- `user`: your database username
- `password`: your database password
- `port`: database port (3306 for MySQL/MariaDB, 5432 for PostgreSQL)
- `verbose`: display name for this connection

```
<?php
$cfg['blowfish_secret'] = 'string32caracteresUniqeiciPourLaSecurite';

$i = 1;
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['host'] = 'HOST DATABASE 1';
$cfg['Servers'][$i]['user'] = 'USER1';
$cfg['Servers'][$i]['password'] = 'PASSWORD1';
$cfg['Servers'][$i]['port'] = 3306;
$cfg['Servers'][$i]['verbose'] = 'NAME BASE 1';

$i = 2;
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['host'] = 'HOST DATABASE 2';
$cfg['Servers'][$i]['user'] = 'USER 2';
$cfg['Servers'][$i]['password'] = 'PASSWORD 2';
$cfg['Servers'][$i]['port'] = 3306;
$cfg['Servers'][$i]['verbose'] = 'NAME BASE 2';

$cfg['ServerDefault'] = 1;
$cfg['ShowServerChoice'] = true;
?>

```

Benefits:

    ✅ Automatic login (0 entry)

    ✅ Dropdown switch between servers

    ✅ Unified multi-databases

User configuration + config.user.inc.php = automatic login! 🎉

---

---

# 🇫🇷 phpMyAdmin - RunTiPi App Description

Interface graphique multi-bases : connexions externes + Docker networks + configuration automatique !

---

## Fonctionnalités

- ✅ Bases externes : MySQL / MariaDB / PostgreSQL
- ✅ Docker networks : accès aux bases des conteneurs RunTiPi
- ✅ Port fixe configurable
- ✅ Sauvegarde / export : SQL / CSV / JSON
- ✅ Connexions pré-configurées : `config.user.inc.php` (0 saisie de login)

---

## 🚀 Configuration avancée

### 1. Connexion aux réseaux Docker (bases conteneurs)

**Récupérer les noms des réseaux :**

```
sudo docker network ls 
```

Exemple de sortie :
```
app1_network
app2_network
app3_network
```

Configuration utilisateur RunTiPi → docker-compose.yml :

```
services:
  phpmyadmin:
    networks:
      - runtipi_tipi_main_network
      - APP1_test_network
      - APP2_test_network

networks:
  runtipi_tipi_main_network:
    external: true
  APP1_network:
    external: true
  APP2_network:
    external: true
  ```

### 2. Connexions pré-configurées (config.user.inc.php) ###

Modifier le fichier : ${APP_DATA_DIR}/data/config.user.inc.php

Template générique (adaptez vos identifiants) :

**⚠️ Parties à modifier dans le fichier :**
- `blowfish_secret` : remplacer par 32 caractères aléatoires
- `host` : nom d'hôte ou IP de la base (ex: `localhost`, `mariadb`, `192.168.1.100`)
- `user` : votre nom d'utilisateur de la base
- `password` : votre mot de passe de la base
- `port` : port de la base (3306 pour MySQL/MariaDB, 5432 pour PostgreSQL)
- `verbose` : nom d'affichage pour cette connexion

```
<?php
$cfg['blowfish_secret'] = 'string32caracteresUniqeiciPourLaSecurite';

$i = 1;
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['host'] = 'HOST DATABASE 1';
$cfg['Servers'][$i]['user'] = 'USER1';
$cfg['Servers'][$i]['password'] = 'MOT_DE_PASSE1';
$cfg['Servers'][$i]['port'] = 3306;
$cfg['Servers'][$i]['verbose'] = 'NAME BASE 1';

$i = 2;
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['host'] = 'HOST DATABASE 2';
$cfg['Servers'][$i]['user'] = 'USER 2';
$cfg['Servers'][$i]['password'] = 'PASSWORD 2';
$cfg['Servers'][$i]['port'] = 3306;
$cfg['Servers'][$i]['verbose'] = 'NAME BASE 2';

$cfg['ServerDefault'] = 1;
$cfg['ShowServerChoice'] = true;
?>

```

Avantages :

    ✅ Login automatique (0 saisie)

    ✅ Switch dropdown entre serveurs

    ✅ Multi-bases unifiées

Configuration utilisateur + config.user.inc.php = login automatique ! 🎉
