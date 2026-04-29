
---

🇬🇧 **Post-installation step:**

After the first launch, you need to generate the configuration file.
1. Run `sudo docker ps` to find the exact name of the Netronome container (for example, `netronome_test-netronome-1`, but it may differ depending on your setup).
2. Then, execute the following command, replacing `<container_name>` with the actual name:

	docker exec -it <container_name> netronome generate-config

---

🇫🇷 **Étape après installation :**

Après le premier lancement, il est nécessaire de générer le fichier de configuration.
1. Exécutez `sudo docker ps` pour trouver le nom exact du conteneur Netronome (par exemple `netronome_test-netronome-1`, mais il peut varier selon votre installation).
2. Lancez ensuite la commande suivante en remplaçant `<nom_du_conteneur>` par le nom trouvé :

	docker exec -it <nom_du_conteneur> netronome generate-config

---

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