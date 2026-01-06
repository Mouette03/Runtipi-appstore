# Sync-in

## 🇬🇧 English

**Sync-in** is a secure, open-source platform for file storage, sharing, collaboration, and syncing — designed to run on your own infrastructure.  
It gives you full control over your data while offering a modern, intuitive interface for both internal and external users.  
Sync-in is a self-hosted solution: no third-party constraints, maximum privacy and data sovereignty.  
With features like collaborative spaces, secure file sharing, and granular permission management, Sync-in fits seamlessly into any environment — from small teams to large enterprises, public institutions, or privacy-conscious individuals.

### Highlights
- 🖥️ Modern, fast, and high-performance interface  
- 🔒 Full control over data security and compliance (MFA support)  
- 🔑 Advanced access control with spaces, shares, and role-based permissions  
- 🤝 Collaboration features with OnlyOffice integration and activity tracking  
- 🔎 Powerful full-text search across files and documents  
- 🔗 WebDAV access and desktop client for cross-device synchronization  
- Self-hosting: your data stays under your control  

### Configuration Requirements

**Important:** Sync-in requires email configuration to start. If mail variables are not set, the application will not start.

**Default mail configuration (for testing purposes):**
- `MAIL_HOST=smtp.example.com`
- `MAIL_PORT=587`
- `MAIL_USER=noreply@example.com`
- `MAIL_PASSWORD=yourpassword`
- `MAIL_FROM=noreply@example.com`

**Generate authentication tokens:**  
Run this command to generate the 3 required tokens:
```bash
for i in 1 2 3; do openssl rand -base64 48; done
```

---

## 🇫🇷 Français

**Sync-in** est une plateforme open-source sécurisée pour le stockage, le partage, la collaboration et la synchronisation de fichiers — conçue pour fonctionner sur votre propre infrastructure.  
Elle vous donne un contrôle total sur vos données tout en offrant une interface moderne et intuitive pour les utilisateurs internes et externes.  
Sync-in est une solution auto-hébergée : pas de limites imposées par des services tiers, confidentialité et souveraineté maximales sur vos données.  
Avec des fonctionnalités comme les espaces collaboratifs, le partage sécurisé de fichiers et la gestion granulaire des permissions, Sync-in s'intègre parfaitement dans tout environnement — des petites équipes aux grandes entreprises, institutions publiques ou particuliers soucieux de leur vie privée.

### Points clés
- 🖥️ Interface moderne, rapide et hautement performante  
- 🔒 Contrôle total sur la sécurité et la conformité des données (support MFA)  
- 🔑 Contrôle d'accès avancé avec espaces, partages et permissions par rôles  
- 🤝 Fonctionnalités collaboratives avec intégration OnlyOffice et suivi d'activité  
- 🔎 Recherche full-text puissante dans les fichiers et documents  
- 🔗 Accès WebDAV et client desktop pour synchronisation multi-appareils  
- Hébergement autonome : vos données restent sous votre garde  

### Prérequis de configuration

**Important :** Sync-in nécessite une configuration email pour démarrer. Si les variables mail ne sont pas définies, l'application ne démarrera pas.

**Configuration mail par défaut (pour tests) :**
- `MAIL_HOST=smtp.example.com`
- `MAIL_PORT=587`
- `MAIL_USER=noreply@example.com`
- `MAIL_PASSWORD=yourpassword`
- `MAIL_FROM=noreply@example.com`

**Générer les tokens d'authentification :**  
Exécutez cette commande pour générer les 3 tokens requis :
```bash
for i in 1 2 3; do openssl rand -base64 48; done
```
