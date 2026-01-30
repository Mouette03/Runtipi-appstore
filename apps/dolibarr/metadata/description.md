# Dolibarr ERP/CRM beta

## ⚠️ Important - Data Migration (v22.0.4 → v22.0.5)

### 🇬🇧 English

**Breaking change in the data folder structure!**

If you are updating from version 22.0.4 to 22.0.5, you must manually migrate your data:

1. **Stop** the Dolibarr application
2. **Access** the storage folder: `/home/username/runtipi/app-data/store-name/dolibarr/data`
3. **Delete** the newly created folders in `data/` (created after update)
4. **Move** these 2 folders from the root: `/home/nom-d'utilisateur/runtipi/app-data/nom-du-store/dolibarr`
   - `db_data` → move to `data/db_data`
   - `dolibarr` → move to `data/dolibarr`
5. **Start** the Dolibarr application

### 🇫🇷 Français

**Changement majeur dans la structure du dossier data !**

Si vous passez de la version 22.0.4 à 22.0.5, vous devez migrer manuellement vos données :

1. **Arrêtez** l'application Dolibarr
2. **Accédez** au dossier de stockage : `/home/nom-d'utilisateur/runtipi/app-data/nom-du-store/dolibarr/data`
3. **Supprimez** les nouveaux dossiers créés dans `data/` (créés après la mise à jour)
4. **Déplacez** ces 2 dossiers depuis la racine : `/home/nom-d'utilisateur/runtipi/app-data/nom-du-store/dolibarr`
   - `db_data` → déplacer vers `data/db_data`
   - `dolibarr` → déplacer vers `data/dolibarr`
5. **Démarrez** l'application Dolibarr

---



##### 🇬🇧 Description (English)

🧩 Dolibarr is an all-in-one open-source ERP/CRM solution, perfect for businesses, freelancers, and associations.

📦 With Runtipi, you can host it locally, without cloud dependency or subscriptions.

🛠️ Manage clients, quotes, invoices, products, inventory, projects, HR, accounting... all from a clean, modular web interface.

💼 Easy to install, lightweight yet powerful, Dolibarr adapts to your needs and scales with your growth.

🚀 Run your business management from home — with full freedom and control.



To update DOLIBARR, stop the application, then update and before restarting the application, you must remove the "install.lock" file via SFTP located in "/home/name/runtipi/app-data/name-of-store/dolibarr/dolibarr/documents". This file prevents anyone from restarting the installation of Dolibarr by accessing the address .../dolibarr/install. It will be automatically added again by Dolibarr.



🔗 Official Docker source: https://hub.docker.com/r/dolibarr/dolibarr



##### 🇫🇷 Description (Français)

🧩 Dolibarr est une solution ERP/CRM open-source tout-en-un, idéale pour les entreprises, indépendants et associations.

📦 Grâce à Runtipi, vous pouvez l’héberger en local, sans dépendre du cloud ni d’un abonnement.

🛠️ Gérez vos clients, devis, factures, produits, stocks, projets, RH, comptabilité... tout cela depuis une interface web claire et modulable.

💼 Simple à installer, léger et puissant, Dolibarr s’adapte à vos besoins et évolue avec vous.

🚀 Lancez votre gestion d’entreprise à domicile, avec liberté et contrôle total.



Pour faire une mise à jour de DOLIBARR, arretez l'application, mettez ensuite à jour et avant de la redémarrer l'application, il faut enlever le fichier "install.lock" via SFTP situé dans "/home/name/runtipi/app-data/nom-du-store/dolibarr/dolibarr/documents". Ce fichier permet d’éviter que n’importe qui puisse relancer l’installation de Dolibarr en accédant à l’adresse …/dolibarr/install. Il sera automatiquement ajouté de nouveau par Dolibarr.



🔗 Source Docker officielle : https://hub.docker.com/r/dolibarr/dolibarr

