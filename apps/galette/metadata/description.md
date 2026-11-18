Galette

🚨New information in the description useful from version 1.2.0
After updating to version 1.2.0, it is necessary to go back to the site address and add /installer.php after it to update the database.

🚨Nouvelles informations dans la description utiles à partir de la version 1.2.0
Après mise à jour vers version 1.2.0, il est nécessaire de repasser par adresse du site et ajouter /installer.php à la suite de celle-ci pour mettre à jours la base de donnée.

🇬🇧 Description (English)

🚨 In case of updates from version 1.1...to version 1.2.0 it is necessary to add a plugins folder in the Galette data directory. If new installation it will be added automatically. This is necessary following the changes made to the new version that allows to avoid having rights in the plugins' data directory

👉Database connection information on first launch:

HOST: db-galette
DATABASE\_NAME: galettedb
DB\_USER: galetteuser
DB\_PASS: To be chosen at installation

👉To change the site's favicon, add this to your USER CONFIG

```yaml
services:
  galette:
    volumes:
      - /(path to favicon.png on host)/favicon.png:/var/www/galette/webroot/themes/default/images/favicon.png
```

👉Useful for version up to 1.1.6.1. From version 1.2.0 onwards, the persistence of the deactivation is managed via the plugin folder in data (see above).To persist disabled plugins across application restarts, you can specify a directory on the host where you store plugins (download here: Plugins) and add this to your USER CONFIG

```yaml
services:
  galette:
    volumes:
      - "/(path to plugin storage directory on host):/var/www/galette/plugins"
```

Galette is a membership management web application towards non profit organizations.

This is before all a free software (as in free speech), community and free (as in beer)!

* Members management
* Manage cotisations and transactions
* Manage groups and their managers
* Import and Export (open formats)
* Improved accessibility (use and follow web standards)
* Configure lists and forms
* Add dynamic fields to members, contributions and transactions forms
* Multilingual
* Simple and advanced search
* Calculate fees due dates
* Members mailings
* Edit labels (for postal mail)
* Member card with photo (facultative)
* Each member can edit his informations
* Multi criteria diplay filters
* Usage history

👉  More information : https://galette.eu		https://github.com/galette-community/docker

👉 If you like Galette, please consider starring the developer's repository: https://github.com/galette/galette

 

🇫🇷 Description (Français)

🚨 En cas de mise à jours depuis une version 1.1...vers version 1.2.0 il est nécessaire d'ajouter un dossier plugins dans le répertoire data de Galette. Si nouvelle installation il sera ajouté automatiquement. Celui-ci est nécessaire suite au modifications apporté à la nouvelle version et permet d’éviter d'avoir des droits dans le répertoire de donnée des plugins

👉Infos de connexion à la base de données au premier lancement:

HOST: db-galette
DATABASE\_NAME : galettedb
DB\_USER : galetteuser
DB\_PASS : A choisir à l'installation

👉Pour changer le favicon du site ajouter ceci à votre USER CONFIG

```yaml
services:
  galette:
    volumes:
      - /(chemin vers favicon.png sur hote):/var/www/galette/webroot/themes/default/images/favicon.png
```

👉Utile pour version jusque 1.1.6.1. A partir de version 1.2.0 la persistance de la désactivation est gérée via le dossier plugin dans data ( voir ci-dessus )
Pour avoir la persistance des plugins désactivés lors des redémmarages de l'application, vous pouver spécifier un répértoire sur l'hote ou vous stockez les plugins télécharger ici : https://doc.galette.eu/fr/master/plugins/index.html

et ajouter ceci à votre USER CONFIG

```yaml
services:
  galette:
    volumes:
      - /(chemin vers répértoire de stockage plugins sur hote):/var/www/galette/plugins
```

Galette est une application web de gestion d’adhérents, adaptée aux associations.

* Gestion des membres, cotisations, fiches PDF
* Connexion base MariaDB
* Interface claire et responsive
* Gestion des adhérents
* Gestion des cotisations et transactions
* Gestion de groupes et de responsables
* Imports et exports (formats ouverts)
* Accessibilité accrue (utilisation et respect des standards du web)
* Configuration des fiches et des listes
* Ajout de champs dynamiques aux fiches adhérents, contributions et transactions
* Multilingue
* Recherche simple et avancée
* Calcul de l'échéance des adhésions
* Mailings adhérents
* Edition d'étiquettes (pour envois postaux)
* Fiches adhérents avec photo (facultative)
* Chaque adhérent peut modifier sa fiche
* Filtres d'affichage multi-critères
* Historique d'utilisation

👉 Plus d’info : https://galette.eu			https://github.com/galette-community/docker

👉 Si vous aimez Galette, n'hésitez pas à mettre une étoile sur le dépôt du développeur : https://github.com/galette/galette


Thanks @sergi0g

