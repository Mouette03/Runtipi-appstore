# AliasVault

## English

AliasVault is a self-hosted password and identity manager with built-in email aliasing.

### Features

- Self-hosted vault for passwords and identities.
- Built-in email alias support in the same application.
- Officially documented all-in-one Docker deployment for existing Docker environments.


### Configuration


- `PUBLIC_REGISTRATION_ENABLED`: allows or blocks new user registrations.
- `IP_LOGGING_ENABLED`: controls IP logging for authentication attempts.
  - `true`: attempts are logged with the client IP, but the IP is always anonymized — the last octet is masked (e.g. `127.0.0.1` becomes `127.0.0.xxx`). The network part of the IP remains visible without exposing the full address.
  - `false`: no IP addresses are logged at all.
- `TRUSTED_PROXIES`: when AliasVault sits behind another reverse proxy (Traefik, Cloudflare, HAProxy, nginx, etc.), the built-in nginx reads the real client IP from the `X-Forwarded-For` header so that audit logs and the IP allowlist see the actual client. To prevent header spoofing, only the proxies listed here are allowed to set that header.
  - empty (default): trust all RFC1918 private ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
  - Comma-separated list of IPs or CIDRs: trust only the listed proxies (recommended, e.g. `10.0.1.5,192.168.10.0/24`).
  - `none`: trust no upstream proxy, `X-Forwarded-For` is always ignored.
- `ADMIN_IP_ALLOWLIST`: restricts access to the admin panel at `/admin` by client IP. By default the admin panel is reachable from anywhere.
  - empty (default): no restriction, `/admin` is reachable from anywhere.
  - `private`: only loopback and RFC1918 private addresses are allowed (`127.0.0.0/8`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
  - Comma-separated list of IPs or CIDRs: only the listed ranges are allowed (loopback is always allowed, e.g. `203.0.113.42,198.51.100.0/24`).

> **Note:** when AliasVault runs behind another reverse proxy, the admin allowlist is matched against the client IP from `X-Forwarded-For`, so `TRUSTED_PROXIES` must be configured correctly.

> **First launch:** the `Public registration enabled` option must be enabled (`true`) on the first launch so you can create the initial admin account. You can then disable it afterwards to block new registrations.


## Français

AliasVault est un gestionnaire de mots de passe et d'identité auto-hébergé avec prise en charge intégrée des alias email.

### Fonctionnalités

- Coffre-fort auto-hébergé pour mots de passe et identités.
- Gestion intégrée des alias email dans la même application.
- Déploiement Docker tout-en-un documenté officiellement pour les environnements Docker existants.


### Configuration


- `PUBLIC_REGISTRATION_ENABLED` : autorise ou bloque l'inscription de nouveaux utilisateurs.
- `IP_LOGGING_ENABLED` : contrôle la journalisation des adresses IP lors des tentatives de connexion.
  - `true` : les tentatives sont journalisées avec l'IP du client, mais l'IP est toujours anonymisée — le dernier octet est masqué (ex. `127.0.0.1` devient `127.0.0.xxx`). La partie réseau de l'IP reste visible sans exposer l'adresse complète.
  - `false` : aucune adresse IP n'est journalisée.
- `TRUSTED_PROXIES` : lorsque AliasVault est placé derrière un autre reverse proxy (Traefik, Cloudflare, HAProxy, nginx, etc.), le nginx intégré lit l'adresse IP réelle du client dans l'en-tête `X-Forwarded-For` afin que les journaux d'audit et la liste d'autorisation IP voient le vrai client. Pour empêcher l'usurpation d'en-tête, seuls les proxies listés ici sont autorisés à définir cet en-tête.
  - vide (défaut) : fait confiance à toutes les plages privées RFC1918 (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
  - Liste d'IP ou de CIDR séparées par des virgules : ne fait confiance qu'aux proxies listés (recommandé, ex. `10.0.1.5,192.168.10.0/24`).
  - `none` : ne fait confiance à aucun proxy amont, `X-Forwarded-For` est toujours ignoré.
- `ADMIN_IP_ALLOWLIST` : restreint l'accès au panneau d'administration `/admin` selon l'IP du client. Par défaut, le panneau d'administration est accessible depuis n'importe où.
  - vide (défaut) : aucune restriction, `/admin` est accessible depuis n'importe où.
  - `private` : seules les adresses loopback et privées RFC1918 sont autorisées (`127.0.0.0/8`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
  - Liste d'IP ou de CIDR séparées par des virgules : seules les plages listées sont autorisées (loopback toujours autorisé, ex. `203.0.113.42,198.51.100.0/24`).

> **Remarque :** lorsque AliasVault est derrière un autre reverse proxy, la liste d'autorisation admin est comparée à l'IP du client issue de `X-Forwarded-For`, donc `TRUSTED_PROXIES` doit être configuré correctement.

> **Premier lancement :** l'option « Public registration enabled » doit être activée (`true`) lors du premier lancement afin de pouvoir créer le premier compte administrateur. Vous pouvez ensuite la désactiver pour bloquer les nouvelles inscriptions.