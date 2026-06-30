# Zerobyte — Installation Note

## Post-installation step

After the first launch, it is necessary to finish the initial setup in Zerobyte’s web interface. The folder to mount must be configured in the app settings during installation in Runtipi.

In simplified installation mode, Zerobyte can only back up directories that are already mounted into the container. So if the host path `/opt/runtipi` is mounted as `/data`, you must select `/data` inside Zerobyte, not `/opt/runtipi`.

This mode improves security by removing remote-mount privileges, but it does not allow mounting NFS, SMB, WebDAV, or SFTP shares from inside the app.

## Étape après l’installation

Après le premier lancement, il est nécessaire de terminer la configuration initiale dans l’interface web de Zerobyte. Le dossier à monter doit être configuré dans les paramètres de l’application lors de son installation dans Runtipi.

En mode d’installation simplifié, Zerobyte ne peut sauvegarder que les dossiers déjà montés dans le conteneur. Ainsi, si le chemin hôte `/opt/runtipi` est monté comme `/data`, il faut sélectionner `/data` dans Zerobyte, et non `/opt/runtipi`.

Ce mode améliore la sécurité en supprimant les privilèges de montage distant, mais il ne permet pas de monter des partages NFS, SMB, WebDAV ou SFTP depuis l’application.

## English Description

Zerobyte is a backup automation platform built on Restic with a web interface that simplifies backup management for self-hosted environments.

In simplified installation mode, it supports directories already mounted into the container while still supporting repository targets such as local storage, S3, GCS, Azure, and rclone-compatible backends.

This reduced-privilege deployment improves security because it removes the extra permissions needed for remote share mounting from inside the container.

## Key Features

- Automated backups with encryption, compression, and retention policies.
- Flexible scheduling for recurring backup jobs.
- Support for locally mounted directories as backup sources in simplified mode.
- Repository support for local storage, S3, GCS, Azure, and rclone backends.
- Snapshot browsing and restore directly from the web interface.
- Clean web UI designed for practical self-hosted backup workflows.

## Description Française

Zerobyte est une plateforme d’automatisation des sauvegardes basée sur Restic, avec une interface web qui simplifie la gestion des sauvegardes dans un environnement auto-hébergé.

En mode d’installation simplifié, elle prend en charge les dossiers déjà montés dans le conteneur tout en conservant la compatibilité avec des dépôts de sauvegarde locaux, S3, GCS, Azure et les backends compatibles rclone.

Ce déploiement à privilèges réduits améliore la sécurité, car il supprime les permissions supplémentaires normalement requises pour monter des partages distants depuis le conteneur.

## Fonctionnalités principales

- Sauvegardes automatiques avec chiffrement, compression et politiques de rétention.
- Planification flexible des tâches de sauvegarde.
- Prise en charge des dossiers locaux déjà montés dans le conteneur en mode simplifié.
- Compatibilité des dépôts avec le stockage local, S3, GCS, Azure et les backends rclone.
- Navigation dans les snapshots et restauration directement depuis l’interface web.
- Interface web claire pensée pour des sauvegardes auto-hébergées concrètes et simples à gérer.