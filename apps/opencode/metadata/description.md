BETA

# OpenCode — AI Coding Agent

> **Open-source AI coding agent with a web interface** — explore codebases, implement features, fix bugs and run commands from your browser.

> **Agent de code IA open source avec interface web** — explorez vos projets, implémentez des fonctionnalités, corrigez des bugs et lancez des commandes depuis votre navigateur.


## 🇬🇧 English

### 🌐 Overview

**OpenCode** is an open-source AI coding agent that helps you explore codebases, implement features, fix bugs, run commands and work on your projects through a modern web interface.

This Runtipi app runs OpenCode as a persistent web service (`serve --hostname 0.0.0.0`) with workspace at `/home/opencode/workspace` and home at `/home/opencode`.

### ✨ Key Features

- 🔍 **Explore & understand** — navigate large codebases, search, and get contextual answers
- 🛠️ **Implement features** — generate code, refactor, and apply patches directly in your workspace
- 🐛 **Fix bugs** — diagnose issues and let the agent propose fixes
- 💻 **Run commands** — execute shell commands inside the workspace
- 💬 **Sessions & snapshots** — conversations, history and context are persisted
- 🌐 **Web UI** — no CLI required, works from any browser via Runtipi

### 🔧 Access

1. Open the application URL provided by Runtipi.
2. Authenticate with **HTTP Basic Auth**:

| Field | Value |
|-------|-------|
| **Username** | `opencode` (configurable at install, default `opencode`) |
| **Password** | the password you set during installation (`OPENCODE_SERVER_PASSWORD`) |

> Tip: change credentials in Runtipi **App Settings** → update `OPENCODE_SERVER_USERNAME` / `OPENCODE_SERVER_PASSWORD` and restart the app.

### 📁 Workspace

Your projects live in the **persistent workspace directory** (container path `/home/opencode/workspace`):

```text
${APP_DATA_DIR}/data/home/workspace
```

- Clone or copy repositories there via the OpenCode terminal or via host file access.
- ⚠️ **Only put repositories you explicitly want OpenCode to read or modify** — the agent can execute commands and edit files in this folder.

### 💾 Configuration & Data

All OpenCode data is persisted under:

```text
${APP_DATA_DIR}/data/home
```

This includes:
- OpenCode configuration
- Provider authentication (via `/connect` or env vars)
- Conversations, local data and snapshots
- Workspace content (`workspace/` subfolder)

`$HOME` is set to `/home/opencode` inside the container.

### 🔒 Security

> **⚠️ OpenCode can run commands and modify files in its workspace.** Do not expose the application publicly without proper access protection.

- Use a **strong password** (min. 8 characters, enforced by the app form).
- Prefer restricting access via **VPN, Tailscale or an authentication proxy** if exposed beyond your LAN.
- ✅ **No Docker socket mounted** — OpenCode cannot control Docker containers on the host (verified in `docker-compose.yml`).

### 🤖 Provider Setup

After opening OpenCode:

- Run **`/connect`** inside the UI to authenticate with a supported AI provider, **or**
- Add provider API keys as **environment variables** in the app configuration (e.g. `ANTHROPIC_API_KEY`, `OPENAI_API_KEY` — depending on the provider you use).

Keys stored this way are injected into the container environment on next start.

### 📦 Technical Details

| Item | Value |
|------|-------|
| **Image** | `ghcr.io/anomalyco/opencode:1.18.30` |
| **Internal port** | `4096` (`x-runtipi.internal_port`) |
| **Working directory** | `/home/opencode/workspace` |
| **Volumes** | `${APP_DATA_DIR}/data/home:/home/opencode` |
| **Environment** | `HOME=/home/opencode`, `OPENCODE_SERVER_USERNAME`, `OPENCODE_SERVER_PASSWORD` |
| **Architectures** | `amd64`, `arm64` |
| **Runtipi** | `schema_version: 2`, `port: 4096`, `exposable: true` |

---

## 🇫🇷 Français

### 🌐 Présentation

**OpenCode** est un agent de code IA open source qui vous aide à explorer des bases de code, implémenter des fonctionnalités, corriger des bugs, exécuter des commandes et travailler sur vos projets depuis une interface web moderne.

Cette application Runtipi exécute OpenCode comme un service web persistant (`serve --hostname 0.0.0.0`) avec l'espace de travail à `/home/opencode/workspace` et le home à `/home/opencode`.

### ✨ Fonctionnalités principales

- 🔍 **Explorer & comprendre** — naviguer dans de grosses bases de code, chercher et obtenir des réponses contextuelles
- 🛠️ **Implémenter** — générer du code, refactoriser et appliquer des patches directement dans l'espace de travail
- 🐛 **Corriger** — diagnostiquer des problèmes et laisser l'agent proposer des correctifs
- 💻 **Exécuter des commandes** — lancer des commandes shell dans le workspace
- 💬 **Sessions & snapshots** — conversations, historique et contexte persistés
- 🌐 **Interface web** — pas de CLI nécessaire, accessible depuis n'importe quel navigateur via Runtipi

### 🔧 Accès

1. Ouvrez l'URL de l'application fournie par Runtipi.
2. Authentifiez-vous en **HTTP Basic Auth** :

| Champ | Valeur |
|-------|--------|
| **Utilisateur** | `opencode` (configurable à l'installation, défaut `opencode`) |
| **Mot de passe** | celui défini lors de l'installation (`OPENCODE_SERVER_PASSWORD`) |

> Astuce : modifiez les identifiants dans **Paramètres de l'app** Runtipi → `OPENCODE_SERVER_USERNAME` / `OPENCODE_SERVER_PASSWORD`, puis redémarrez l'app.

### 📁 Espace de travail

Vos projets sont stockés dans le dossier de travail persistant (chemin conteneur `/home/opencode/workspace`) :

```text
${APP_DATA_DIR}/data/home/workspace
```

- Clonez ou copiez vos dépôts à cet endroit via le terminal OpenCode ou l'accès fichier hôte.
- ⚠️ **Placez uniquement les dépôts qu'OpenCode est explicitement autorisé à lire ou modifier** — l'agent peut exécuter des commandes et modifier les fichiers de ce dossier.

### 💾 Configuration & données

Les données OpenCode sont persistées dans :

```text
${APP_DATA_DIR}/data/home
```

Cela inclut :
- La configuration OpenCode
- L'authentification des fournisseurs IA (via `/connect` ou variables d'environnement)
- Les conversations, données locales et snapshots
- Le contenu du workspace (sous-dossier `workspace/`)

`$HOME` vaut `/home/opencode` dans le conteneur.

### 🔒 Sécurité

> **⚠️ OpenCode peut exécuter des commandes et modifier les fichiers de son espace de travail.** N'exposez pas l'application publiquement sans protection d'accès adéquate.

- Utilisez un **mot de passe robuste** (min. 8 caractères, imposé par le formulaire).
- Limitez de préférence l'accès avec un **VPN, Tailscale ou un proxy d'authentification** si exposition hors LAN.
- ✅ **Socket Docker non monté** — OpenCode ne peut pas contrôler les conteneurs Docker de l'hôte (vérifié dans `docker-compose.yml`).

### 🤖 Configuration du fournisseur IA

Après avoir ouvert OpenCode :

- Utilisez la commande **`/connect`** dans l'interface pour vous authentifier auprès d'un fournisseur IA pris en charge, **ou**
- Ajoutez les clés API des fournisseurs en **variables d'environnement** dans la configuration de l'app (ex. `ANTHROPIC_API_KEY`, `OPENAI_API_KEY` selon le fournisseur).

Les clés sont injectées dans l'environnement du conteneur au prochain démarrage.

### 📦 Détails techniques

| Élément | Valeur |
|---------|--------|
| **Image** | `ghcr.io/anomalyco/opencode:1.18.30` |
| **Port interne** | `4096` (`x-runtipi.internal_port`) |
| **Working directory** | `/home/opencode/workspace` |
| **Volumes** | `${APP_DATA_DIR}/data/home:/home/opencode` |
| **Environnement** | `HOME=/home/opencode`, `OPENCODE_SERVER_USERNAME`, `OPENCODE_SERVER_PASSWORD` |
| **Architectures** | `amd64`, `arm64` |
| **Runtipi** | `schema_version: 2`, `port: 4096`, `exposable: true` |

