# Forgejo - Self-hosted Git Service

**Beyond coding. We forge.**

Forgejo is a lightweight, self-hosted Git service for ARM64/AMD64 platforms. This deployment includes MariaDB for database management and optional Forgejo Actions for CI/CD workflows.

## Features

- 🔧 **Full Git Platform**: Complete version control with repository management, pull requests, issues, and wiki
- 🚀 **CI/CD Integration**: Optional Forgejo Actions runner compatible with GitHub Actions workflows
- 🗄️ **MariaDB Backend**: Reliable and performant database for your Git data
- 🔐 **SSH Support**: Git operations via SSH on port 222
- ⚡ **High Performance**: Optimized configuration for reliable operation
- 📦 **100% FOSS**: Completely free and open-source software

## Technical Details

- **Database**: MariaDB with automatic initialization
- **SSH Port**: 222 (Git operations)
- **Architectures**: ARM64, AMD64
- **Actions**: Optional CI/CD runner

## Configuration

Upon installation, you'll configure:
- MariaDB root password (auto-generated)
- Forgejo database password (user-provided)
- Database username (default: forgejo)
- SSH service (enable/disable)

## Use Cases

- Personal or team Git hosting
- Private repository management
- CI/CD pipelines for automated testing and deployment
- Issue tracking and project management
- Code review workflows

---

# Forgejo - Service Git auto-hébergé

**Au-delà du code. Nous forgeons.**

Forgejo est un service Git léger et auto-hébergé pour plateformes ARM64/AMD64. Ce déploiement inclut MariaDB pour la gestion de base de données et optionnellement Forgejo Actions pour les workflows CI/CD.

## Fonctionnalités

- 🔧 **Plateforme Git complète** : Contrôle de version complet avec gestion des dépôts, pull requests, issues et wiki
- 🚀 **Intégration CI/CD** : Runner Forgejo Actions optionnel compatible avec les workflows GitHub Actions
- 🗄️ **Backend MariaDB** : Base de données fiable et performante pour vos données Git
- 🔐 **Support SSH** : Opérations Git via SSH sur le port 222
- ⚡ **Hautes performances** : Configuration optimisée pour un fonctionnement fiable
- 📦 **100% FOSS** : Logiciel entièrement libre et open-source

## Détails techniques

- **Base de données** : MariaDB avec initialisation automatique
- **Port SSH** : 222 (opérations Git)
- **Architectures** : ARM64, AMD64
- **Actions** : Runner CI/CD optionnel

## Configuration

Lors de l'installation, vous configurerez :
- Mot de passe root MariaDB (auto-généré)
- Mot de passe de la base Forgejo (fourni par l'utilisateur)
- Nom d'utilisateur de la base de données (défaut : forgejo)
- Service SSH (activer/désactiver)

## Cas d'usage

- Hébergement Git personnel ou en équipe
- Gestion de dépôts privés
- Pipelines CI/CD pour tests et déploiements automatisés
- Suivi des issues et gestion de projet