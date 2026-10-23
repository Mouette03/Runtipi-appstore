BETA

# OpenCode — AI Coding Agent


## 🇬🇧 English

> **Open-source AI coding agent with a web interface** — explore codebases, implement features, fix bugs and run commands from your browser.

### ✨ Key Features

- 🔍 **Explore & understand** — navigate large codebases and get contextual answers
- 🛠️ **Implement features** — generate code, refactor and apply patches in your workspace
- 🐛 **Fix bugs** — diagnose issues and let the agent propose fixes
- 💻 **Run commands** — execute shell commands inside the workspace
- 💾 **Sessions & history** — conversations and context are persisted
- 🌐 **Web UI** — no CLI required, works from any browser

### 🔑 Access

Open the app URL provided by Runtipi (local or exposed). Your browser will prompt for the username and password set at installation (default username: `opencode`). This login comes from OpenCode itself, not from Runtipi.

> ⚠️ **Known issue:** for now, keep the default username `opencode`. Custom usernames are affected by a bug reported to OpenCode.

### 🤖 Provider setup

- Run **`/connect`** in the UI to sign in to an AI provider, **or**
- add provider API keys (e.g. `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`) as environment variables.

### 📁 Workspace & data

All data (configuration, provider auth, conversations, snapshots) is persisted in:

```text
${APP_DATA_DIR}/data/home
```

Put your projects in the `workspace/` subfolder (container path `/home/opencode/workspace`). Only add repositories you want OpenCode to read or modify.

### 🔒 Security

> ⚠️ **OpenCode can run commands and modify files in its workspace.**

- Use a strong password (8 characters minimum).
- Prefer a VPN, Tailscale or an authentication proxy if exposed beyond your LAN.
- The Docker socket is **not** mounted.

---

## 🇫🇷 Français

> **Agent de code IA open source avec interface web** — explorez vos projets, implémentez des fonctionnalités, corrigez des bugs et lancez des commandes depuis votre navigateur.

### ✨ Fonctionnalités principales

- 🔍 **Explorer & comprendre** — naviguer dans de grosses bases de code et obtenir des réponses contextuelles
- 🛠️ **Implémenter** — générer du code, refactoriser et appliquer des patches dans l'espace de travail
- 🐛 **Corriger** — diagnostiquer des problèmes et laisser l'agent proposer des correctifs
- 💻 **Exécuter des commandes** — lancer des commandes shell dans le workspace
- 💾 **Sessions & historique** — conversations et contexte persistés
- 🌐 **Interface web** — pas de CLI nécessaire, accessible depuis n'importe quel navigateur

### 🔑 Accès

Ouvrez l'URL de l'application fournie par Runtipi (locale ou exposée). Votre navigateur vous demandera l'identifiant et le mot de passe définis à l'installation (identifiant par défaut : `opencode`). Cette connexion est fournie par OpenCode lui-même, pas par Runtipi.

> ⚠️ **Probléme connu :** pour le moment, gardez l'identifiant par défaut `opencode`. Les identifiants personnalisés sont touchés par un bug signalé à OpenCode.

### 🤖 Configuration du fournisseur IA

- Utilisez **`/connect`** dans l'interface pour vous connecter à un fournisseur IA, **ou**
- ajoutez vos clés API (ex. `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`) en variables d'environnement.

### 📁 Espace de travail & données

Toutes les données (configuration, authentification, conversations, snapshots) sont conservées dans :

```text
${APP_DATA_DIR}/data/home
```

Placez vos projets dans le sous-dossier `workspace/` (chemin conteneur `/home/opencode/workspace`). N'ajoutez que les dépôts qu'OpenCode peut lire ou modifier.

### 🔒 Sécurité

> ⚠️ **OpenCode peut exécuter des commandes et modifier les fichiers de son espace de travail.**

- Utilisez un mot de passe robuste (8 caractères minimum).
- Préférez un VPN, Tailscale ou un proxy d'authentification si exposition hors LAN.
- Le socket Docker n'est **pas** monté.
