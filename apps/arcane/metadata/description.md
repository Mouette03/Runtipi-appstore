# Arcane Docker


🔐 **Default Credentials / Identifiants par défaut**  
Username / Nom d'utilisateur: `arcane`  
Password / Mot de passe: `arcane-admin`

🐛 **Bug Reports / Rapports de bugs**  
Please report any bugs related to using this app with Runtipi, especially issues with domain exposure and reverse proxy configuration.  
N'hésitez pas à me remonter les bugs éventuels concernant l'utilisation de l'application avec Runtipi, notamment le fonctionnement avec exposition via nom de domaine.

🇬🇧 Description (English)

### What is Arcane?

Arcane is a modern, self-hosted platform that enables you to manage and deploy your Docker containers through an intuitive web interface. It simplifies container orchestration while maintaining enterprise-grade security and scalability.

### Prerequisites

Before deploying Arcane Docker, you must generate authentication keys and tokens to ensure secure communication:

1. **Generate Authentication Keys**: Create secure API keys for service authentication
2. **Generate Access Tokens**: Generate JWT tokens or similar authentication tokens for client access

**Generate keys with this command:**
```bash
openssl rand -hex 32 && openssl rand -hex 32
```

### Key Features

- Containerized architecture for easy deployment
- Secure authentication system
- Scalable microservices infrastructure
- Docker Compose ready

🇫🇷 Description (Français)

### Qu'est-ce qu'Arcane ?

Arcane est une plateforme moderne auto-hébergée qui vous permet de gérer et déployer vos conteneurs Docker via une interface web intuitive. Elle simplifie l'orchestration des conteneurs tout en maintenant une sécurité et une évolutivité de niveau entreprise.

### Prérequis

Avant de déployer Arcane Docker, vous devez générer des clés d'authentification et des tokens pour garantir une communication sécurisée :

1. **Générer les clés d'authentification** : Créez des clés API sécurisées pour l'authentification des services
2. **Générer les tokens d'accès** : Générez des tokens JWT ou des tokens d'authentification similaires pour l'accès client

**Générez les clés avec cette commande :**
```bash
openssl rand -hex 32 && openssl rand -hex 32
```

### Fonctionnalités principales

- Architecture conteneurisée pour un déploiement facile
- Système d'authentification sécurisé
- Infrastructure de microservices évolutive
- Compatible Docker Compose
