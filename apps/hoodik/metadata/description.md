# Hoodik

Hoodik is a lightweight, self-hosted cloud storage solution focused on end-to-end encryption (E2EE). Files, file names, and even search queries are encrypted directly in your browser before they ever reach the server — the backend, written in Rust, never has access to your plaintext data or your encryption keys.

## Key features

- **End-to-end encryption**: files are encrypted client-side using a hybrid RSA/AES scheme, so the server administrator can never read your data.
- **Lightweight**: the backend runs comfortably on ~20 MB of RAM, ideal for a Runtipi instance on modest hardware.
- **Encrypted sharing**: share files and folders with other Hoodik users while keeping end-to-end encryption intact.
- **Flexible storage**: use local disk storage or an S3-compatible provider as the backend for encrypted blobs.
- **SQLite by default**: no external database required for a simple, self-contained install (an external Postgres database is also supported).

## Configuration notes

- Set `APP_URL` to the exact public URL you will use to reach the app (including scheme and port if non-standard).
- `SSL_DISABLED` should stay enabled (true) when running behind Runtipi's Traefik, since TLS termination is already handled at the proxy level.
- SMTP settings are optional and only needed if you want email verification or share notifications.

## Links

- Source code: [github.com/hudikhq/hoodik](https://github.com/hudikhq/hoodik)
- Website: [hoodik.io](https://hoodik.io)

---

# Hoodik (Français)

Hoodik est une solution de stockage cloud auto-hébergée, légère, centrée sur le chiffrement de bout en bout (E2EE). Les fichiers, leurs noms, et même les requêtes de recherche sont chiffrés directement dans le navigateur avant d'atteindre le serveur — le backend, écrit en Rust, n'a jamais accès à vos données en clair ni à vos clés de chiffrement.

## Fonctionnalités principales

- **Chiffrement de bout en bout** : les fichiers sont chiffrés côté client via un schéma hybride RSA/AES, l'administrateur du serveur ne peut jamais lire vos données.
- **Léger** : le backend tourne confortablement avec ~20 Mo de RAM, idéal pour une instance Runtipi sur du matériel modeste.
- **Partage chiffré** : partagez fichiers et dossiers avec d'autres utilisateurs Hoodik en conservant le chiffrement de bout en bout.
- **Stockage flexible** : stockage local sur disque ou fournisseur compatible S3 pour les blobs chiffrés.
- **SQLite par défaut** : aucune base de données externe requise pour une installation simple et autonome (une base Postgres externe est également supportée).

## Notes de configuration

- Définissez `APP_URL` avec l'URL publique exacte utilisée pour accéder à l'application (schéma et port inclus si non standard).
- `SSL_DISABLED` doit rester activé (true) derrière le Traefik de Runtipi, puisque la terminaison TLS est déjà gérée au niveau du proxy.
- Les réglages SMTP sont optionnels, uniquement nécessaires pour la vérification par email ou les notifications de partage.

## Liens

- Code source : [github.com/hudikhq/hoodik](https://github.com/hudikhq/hoodik)
- Site web : [hoodik.io](https://hoodik.io)
