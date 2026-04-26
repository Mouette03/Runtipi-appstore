App Beta 

Filyo with MariaDB

[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/wvqkdM9jM)

🇬🇧 **English**

# Filyo — Private & Local File Transfer

Filyo is a modern, privacy-first self-hosted file transfer application. All data stays on your server (SQLite + local filesystem) — no S3, no external cloud, no tracking.

**📤 Upload & Share**
- Multi-file upload with drag & drop and real-time progress bar.
- Resumable uploads via the TUS protocol — interrupted transfers pick up where they left off.
- Proxy-safe upload mode: splits files into configurable chunks to work around size limits from Cloudflare, Nginx, Vercel, etc.
- Optional password protection and configurable max-download limit per link.
- Expiration options: 1h / 24h / 7d / 30d / never.
- Share links directly by email.

**📥 Reverse Sharing**
- Create deposit links to receive files from others — no account required for the sender.
- Senders can attach their name, email, and a message to their deposit.
- Send deposit links by email to one or more recipients.

**👥 Multi-user & Admin**
- Admin and user roles with a full admin panel.
- Per-user storage quota: set limits in MB/GB, enforced at upload time.
- Optional open registration with a configurable default quota.
- SMTP configuration with AES-256-GCM encrypted password storage.
- Customizable app name, logo, and accent colors.

**🔒 Security**
- JWT stored in an HttpOnly cookie — never exposed to JavaScript.
- Brute-force protection with rate limiting on login, password reset, and file deposits.
- SMTP password encrypted in the database (AES-256-GCM, key derived from `JWT_SECRET`).

**🌐 Deployment**
- Dark glassmorphism UI with light/auto theme support and customizable accent colors.
- Fully translated in English and French.
- Multi-arch Docker image (amd64 + arm64).
- SQLite (recommended for personal use) or MariaDB (for multi-user/production setups).

---

🇫🇷 **Français**

# Filyo — Transfert de fichiers local & privé

Filyo est une application d'échange de fichiers auto-hébergée, moderne et soucieuse de la vie privée. Toutes les données restent sur votre serveur (SQLite + système de fichiers local) — pas de S3, pas de cloud externe, pas de traçage.

**📤 Envoi & Partage**
- Téléversement multi-fichiers avec glisser-déposer et barre de progression en temps réel.
- Uploads repris automatiquement grâce au protocole TUS — les transferts interrompus reprennent là où ils s'étaient arrêtés.
- Mode upload proxy-compatible : découpe les fichiers en morceaux configurables pour contourner les limites de Cloudflare, Nginx, Vercel, etc.
- Mot de passe optionnel et limite de téléchargements configurables par lien.
- Expiration au choix : 1h / 24h / 7j / 30j / jamais.
- Partage de liens directement par email.

**📥 Partage inversé**
- Créez des liens de dépôt pour recevoir des fichiers — aucun compte requis pour l'émetteur.
- L'émetteur peut joindre son nom, son email et un message à son dépôt.
- Envoi des liens de dépôt par email à un ou plusieurs destinataires.

**👥 Multi-utilisateurs & Administration**
- Rôles admin et utilisateur avec panneau d'administration complet.
- Quota de stockage par utilisateur : limites en MB/GB appliquées lors des uploads.
- Inscription libre optionnelle avec quota par défaut configurable.
- Configuration SMTP avec mot de passe stocké chiffré (AES-256-GCM).
- Nom, logo et couleurs d'accent de l'application personnalisables.

**🔒 Sécurité**
- JWT stocké dans un cookie HttpOnly — jamais exposé à JavaScript.
- Protection anti-force brute avec limitation de débit sur connexion, réinitialisation et dépôts.
- Mot de passe SMTP chiffré en base de données (AES-256-GCM, clé dérivée de `JWT_SECRET`).

**🌐 Déploiement**
- Interface glassmorphism sombre avec thème clair/auto et couleurs personnalisables.
- Entièrement traduit en français et en anglais.
- Image Docker multi-arch (amd64 + arm64).
- SQLite (recommandé pour usage personnel) ou MariaDB (pour la production / multi-utilisateurs).
