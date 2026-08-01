# AliasVault

## English

AliasVault is a self-hosted password and identity manager with built-in email aliasing.

### Features

- Self-hosted vault for passwords and identities.
- Built-in email alias support in the same application.
- Officially documented all-in-one Docker deployment for existing Docker environments.


### Configuration


- `FORCE_HTTPS_REDIRECT`: redirects traffic to HTTPS when TLS is correctly handled upstream.
- `PUBLIC_REGISTRATION_ENABLED`: allows or blocks new user registrations.

> **First launch:** the `Public registration enabled` option must be enabled (`true`) on the first launch so you can create the initial admin account. You can then disable it afterwards to block new registrations.


## Français

AliasVault est un gestionnaire de mots de passe et d'identité auto-hébergé avec prise en charge intégrée des alias email.

### Fonctionnalités

- Coffre-fort auto-hébergé pour mots de passe et identités.
- Gestion intégrée des alias email dans la même application.
- Déploiement Docker tout-en-un documenté officiellement pour les environnements Docker existants.


### Configuration


- `FORCE_HTTPS_REDIRECT` : redirige le trafic vers HTTPS lorsque le TLS est correctement géré en amont.
- `PUBLIC_REGISTRATION_ENABLED` : autorise ou bloque l'inscription de nouveaux utilisateurs.

> **Premier lancement :** l'option « Public registration enabled » doit être activée (`true`) lors du premier lancement afin de pouvoir créer le premier compte administrateur. Vous pouvez ensuite la désactiver pour bloquer les nouvelles inscriptions.