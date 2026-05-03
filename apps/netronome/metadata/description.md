🇬🇧 **Note:** To avoid permission errors (e.g., `Failed to set database directory permissions error=\"chmod /data/.config/netronome: operation not permitted\"`), make sure the data directory mounted in the container (e.g., `/data`) has the correct permissions. The directory should be owned by the user and group with IDs `101:102` (or equivalent). You can set this on your host with:

The default path to set permissions on is usually:

`/home/<user>/runtipi/app-data/<store>/netronome/data`

Replace `<user>` with your Linux username and `<store>` with the name you gave to your app store instance.

```sh
sudo chown -R 101:102 /home/<user>/runtipi/app-data/<store>/netronome/data
```

---

**How to generate the configuration file**

⚠️ The application will not be accessible until the configuration file is generated.

After setting the permissions, you must generate the Netronome configuration file inside the running container.

1. First, find the name of your Netronome container:

```sh
sudo docker ps
```

Look for the container name in the last column (for example: `netronome_test-netronome-1`).

2. Then, run the following command, replacing `<container_name>` with the name you found:

```sh
sudo docker exec -it <container_name> netronome generate-config
```

Once this is done, the application will now be accessible.

---


🇫🇷 **Note :** Pour éviter les erreurs de permissions (par exemple : `Failed to set database directory permissions error=\"chmod /data/.config/netronome: operation not permitted\"`), assurez-vous que le dossier de données monté dans le conteneur (par exemple `/data`) possède les bonnes permissions. Le dossier doit appartenir à l'utilisateur et au groupe avec les IDs `101:102` (ou équivalent). Vous pouvez appliquer cela sur votre hôte avec :

Le chemin par défaut à adapter est généralement :

`/home/<utilisateur>/runtipi/app-data/<store>/netronome/data`

Remplacez `<utilisateur>` par votre nom d'utilisateur Linux et `<store>` par le nom que vous avez donné à votre instance du store.

```sh
sudo chown -R 101:102 /home/<utilisateur>/runtipi/app-data/<store>/netronome/data
```

---

**Générer le fichier de configuration**

⚠️ L'application ne sera pas accessible tant que le fichier de configuration n'aura pas été généré.

Après avoir réglé les permissions, vous devez générer le fichier de configuration Netronome à l'intérieur du conteneur en cours d'exécution.

1. Commencez par trouver le nom de votre conteneur Netronome :

```sh
sudo docker ps
```

Repérez le nom du conteneur dans la dernière colonne (par exemple : `netronome_test-netronome-1`).

2. Exécutez ensuite la commande suivante, en remplaçant `<nom_du_conteneur>` par le nom trouvé :

```sh
sudo docker exec -it <nom_du_conteneur> netronome generate-config
```

Une fois cette étape terminée, l'application sera accessible.



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