# AliasVault

## English

AliasVault is a self-hosted password and identity manager with built-in email aliasing.[1][2]

### Features

- Self-hosted vault for passwords and identities.[1][2]
- Built-in email alias support in the same application.[1][2]
- Officially documented all-in-one Docker deployment for existing Docker environments.[3][1]

### Access

This Runtipi package exposes the web application on the container's internal port 80.[1]

### Configuration

This app follows the minimal Docker Compose example retained for the Runtipi package and exposes only the two environment variables used in that example.[1]

- `FORCE_HTTPS_REDIRECT`: redirects traffic to HTTPS when TLS is correctly handled upstream.[1]
- `PUBLIC_REGISTRATION_ENABLED`: allows or blocks new user registrations.[1]

### Storage

Persistent data is stored in the directories `/database`, `/logs`, `/secrets`, and `/certificates`, matching the official Docker Compose layout.[4]

### Notes

The Docker Compose installation is intended for setups where the existing infrastructure already provides reverse proxying and TLS handling.[3][2]

## Français

AliasVault est un gestionnaire de mots de passe et d'identité auto-hébergé avec prise en charge intégrée des alias email.[1][2]

### Fonctionnalités

- Coffre-fort auto-hébergé pour mots de passe et identités.[1][2]
- Gestion intégrée des alias email dans la même application.[1][2]
- Déploiement Docker tout-en-un documenté officiellement pour les environnements Docker existants.[3][1]

### Accès

Ce paquet Runtipi expose l'application web sur le port interne 80 du conteneur.[1]

### Configuration

Cette app suit l'exemple Docker Compose minimal retenu pour le paquet Runtipi et n'expose que les deux variables d'environnement utilisées dans cet exemple.[1]

- `FORCE_HTTPS_REDIRECT` : redirige le trafic vers HTTPS lorsque le TLS est correctement géré en amont.[1]
- `PUBLIC_REGISTRATION_ENABLED` : autorise ou bloque l'inscription de nouveaux utilisateurs.[1]

### Stockage

Les données persistantes sont stockées dans les répertoires `/database`, `/logs`, `/secrets` et `/certificates`, conformément à l'organisation officielle du déploiement Docker Compose.[4]

### Notes

L'installation Docker Compose est prévue pour les environnements où le reverse proxy et la gestion TLS sont déjà assurés par l'infrastructure existante.[3][2]