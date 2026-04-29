🇬🇧 **Note:** To avoid permission errors (e.g., `Failed to set database directory permissions error=\"chmod /data/.config/netronome: operation not permitted\"`), make sure the data directory mounted in the container (e.g., `/data`) has the correct permissions. The directory should be owned by the user and group with IDs `101:102` (or equivalent). You can set this on your host with:

The default path to set permissions on is usually:

`/home/<user>/runtipi/app-data/<store>/netronome/data`

Replace `<user>` with your Linux username and `<store>` with the name you gave to your app store instance.

```sh
sudo chown -R 101:102 /home/<user>/runtipi/app-data/<store>/netronome/data
```
🇫🇷 **Note :** Pour éviter les erreurs de permissions (par exemple : `Failed to set database directory permissions error=\"chmod /data/.config/netronome: operation not permitted\"`), assurez-vous que le dossier de données monté dans le conteneur (par exemple `/data`) possède les bonnes permissions. Le dossier doit appartenir à l'utilisateur et au groupe avec les IDs `101:102` (ou équivalent). Vous pouvez appliquer cela sur votre hôte avec :

Le chemin par défaut à adapter est généralement :

`/home/<utilisateur>/runtipi/app-data/<store>/netronome/data`

Remplacez `<utilisateur>` par votre nom d'utilisateur Linux et `<store>` par le nom que vous avez donné à votre instance du store.

```sh
sudo chown -R 101:102 /home/<utilisateur>/runtipi/app-data/<store>/netronome/data
```


🇬🇧 English Description

🌐 Netronome is a lightweight and modern network monitoring tool that gives you clear insight into your network activity.

📊 Monitor network traffic in real time, keep track of connected devices, and analyze performance through a clean and intuitive dashboard.

⚡ Designed to be efficient and easy to use, Netronome runs with low resource usage, making it ideal for home servers, self-hosted setups, and small infrastructures.

✨ Key features:

📡 Real-time network traffic monitoring

🖥️ Visibility into connected devices and active connections

🧭 Clean and intuitive dashboard

🪶 Lightweight and self-hosted

🔧 Easy to deploy and maintain

Netronome is perfect for users who want a simple, efficient, and reliable way to monitor their network.

🇫🇷 Description Française

🌐 Netronome est un outil de surveillance réseau léger et moderne qui offre une vision claire de l’activité de votre réseau.

📊 Suivez le trafic réseau en temps réel, surveillez les appareils connectés et analysez les performances grâce à un tableau de bord clair et intuitif.

⚡ Conçu pour être simple et efficace, Netronome consomme peu de ressources et convient parfaitement aux serveurs personnels, aux environnements auto-hébergés et aux petites infrastructures.

✨ Fonctionnalités principales :

📡 Surveillance du trafic réseau en temps réel

🖥️ Visibilité des appareils connectés et des connexions actives

🧭 Tableau de bord clair et intuitif

🪶 Application légère et auto-hébergée

🔧 Déploiement et maintenance simplifiés

Netronome est idéal pour ceux qui souhaitent surveiller leur réseau de manière simple, efficace et fiable.