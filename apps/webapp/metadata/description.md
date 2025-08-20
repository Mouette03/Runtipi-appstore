RC version test application

\# WebApp – Lightweight PHP \& Apache Web Hosting with Extended Capabilities



\## 🇬🇧 English Version

Host database = mariadb

\*\*WebApp\*\* is a containerized PHP/Apache application designed to host and expose your website effortlessly. It combines a clean structure with an extended set of PHP extensions and system libraries, making it suitable not just for simple sites but also for more complex applications requiring features like LDAP, SOAP, or image manipulation.



\### 🔹 Main Features



\- 🚀 \*\*Out-of-the-box PHP \& Apache stack\*\* for quick deployment  

\- 📂 \*\*Website files go in\*\*: `data/www` – mapped to `/var/www/html`  

\- ⚙️ \*\*Configuration files go in\*\*: `data/config.d` – for Apache, PHP, and custom settings  

\- 🧩 \*\*Broad extension support\*\* for advanced use cases  

\- 🔒 Runs in a \*\*containerized Linux environment\*\* for portability and easy management  



\### 🔹 Included PHP Extensions



\- ✅ Core: `ctype`, `json`, `session`, `tokenizer`, `opcache`, `fileinfo`  

\- ✅ Database: `pdo`, `pdo\_mysql`, `mysqli`  

\- ✅ Web \& Data: `curl`, `mbstring`, `xml`, `dom`, `simplexml`, `soap`, `gettext`  

\- ✅ Compression: `zip`, `zlib`, `phar`  

\- ✅ Imaging: `gd` (with JPEG, PNG, FreeType), `exif`, `imagick`  

\- ✅ Utilities: `intl`, `bcmath`, `xsl`, `sockets`, `ldap`  



\### 🔹 System Dependencies Installed



Includes development libraries for:



\- JPEG, PNG, FreeType  

\- ICU (for `intl`)  

\- XML, XSLT, SOAP  

\- LDAP and OpenSSL  

\- ImageMagick (`libmagickwand-dev`)  

\- zlib, gettext, curl, and others  



\### 🔹 Tech Stack Requirements



\- Apache 2 with mod\_php  

\- PHP 8.x  

\- Debian-based Linux OS  



👉 Drop your HTML/PHP files into `www/`, tweak configs in `config.d/`, and you're ready to go!



---



\## 🇫🇷 Version Française

Host base de données = mariadb

\*\*WebApp\*\* est une application conteneurisée basée sur PHP et Apache, conçue pour héberger votre site facilement. Grâce à une structure simple et à un large éventail d’extensions PHP et de bibliothèques système, elle est adaptée aussi bien aux petits sites qu’aux applications web plus complexes (LDAP, SOAP, traitement d’images…).



\### 🔹 Fonctionnalités principales



\- 🚀 \*\*Pile PHP \& Apache prête à l’emploi\*\* pour un déploiement rapide  

\- 📂 \*\*Fichiers du site\*\* à placer dans : `data/www` – racine web `/var/www/html`  

\- ⚙️ \*\*Configurations personnalisables\*\* via `data/config.d`  

\- 🧩 \*\*Support complet des extensions PHP populaires et avancées\*\*  

\- 🔒 Fonctionne dans un \*\*environnement Linux conteneurisé\*\*, portable et facile à gérer  



\### 🔹 Extensions PHP incluses



\- ✅ Noyau : `ctype`, `json`, `session`, `tokenizer`, `opcache`, `fileinfo`  

\- ✅ Bases de données : `pdo`, `pdo\_mysql`, `mysqli`  

\- ✅ Web \& données : `curl`, `mbstring`, `xml`, `dom`, `simplexml`, `soap`, `gettext`  

\- ✅ Compression : `zip`, `zlib`, `phar`  

\- ✅ Images : `gd` (JPEG, PNG, FreeType), `exif`, `imagick`  

\- ✅ Utilitaires : `intl`, `bcmath`, `xsl`, `sockets`, `ldap`  



\### 🔹 Dépendances système installées



Inclut des bibliothèques de développement pour :



\- JPEG, PNG, FreeType  

\- ICU (pour `intl`)  

\- XML, XSLT, SOAP  

\- LDAP et OpenSSL  

\- ImageMagick (`libmagickwand-dev`)  

\- zlib, gettext, curl, etc.  



\### 🔹 Environnement technique



\- Apache 2 avec mod\_php  

\- PHP 8.x  

\- Système Debian ou Ubuntu  



👉 Placez vos fichiers HTML ou PHP dans `www/`, ajustez les configurations dans `config.d/`, et votre site est prêt à être mis en ligne !



