App retrieved from the official store for updating.

# DuckDNS

## English

[DuckDNS](https://duckdns.org/) is a free dynamic DNS service that points DNS subdomains (under duckdns.org) to an IP address of your choice. The service is completely free and doesn't require reactivation or forum posts to maintain.

### Application Setup

- Visit the [DuckDNS website](https://duckdns.org/), register your subdomain(s) and retrieve your token
- Create a container with your subdomain(s) and token. For example, if you own `user.duckdns.org`, set `SUBDOMAINS=user`. Do NOT include sub-subdomains like `overseerr` from `overseerr.user.duckdns.org`
- Your IP will be automatically updated with DuckDNS every 5 minutes (with a random jitter)

### Notice Regarding Automatic Detection

The `UPDATE_IP` variable (when set to `ipv4`, `ipv6`, or `both`) uses an external _Cloudflare whoami_ service to detect public IP addresses.
**Please note that using this variable will query a third-party service other than DuckDNS.**

Omitting the `UPDATE_IP` variable uses DuckDNS for IP detection and only supports IPv4.

---

## Français

[DuckDNS](https://duckdns.org/) est un service DNS dynamique gratuit qui pointe des sous-domaines DNS (sous duckdns.org) vers une adresse IP de votre choix. Le service est entièrement gratuit et ne nécessite pas de réactivation ou de publications sur un forum pour maintenir son existence.

### Configuration de l'Application

- Rendez-vous sur le [site DuckDNS](https://duckdns.org/), enregistrez vos sous-domaine(s) et récupérez votre token
- Créez un conteneur avec vos sous-domaine(s) et token. Par exemple, si vous possédez `user.duckdns.org`, définissez `SUBDOMAINS=user`. N'incluez PAS les sous-sous-domaines comme `overseerr` de `overseerr.user.duckdns.org`
- Votre IP sera automatiquement mise à jour avec DuckDNS toutes les 5 minutes (avec une variation aléatoire)

### Avertissement Concernant la Détection Automatique

La variable `UPDATE_IP` (lorsqu'elle est définie sur `ipv4`, `ipv6` ou `both`) utilise un service externe _Cloudflare whoami_ pour détecter les adresses IP publiques.
**Veuillez noter que l'utilisation de cette variable interrogera un service tiers autre que DuckDNS.**

Omettre la variable `UPDATE_IP` utilise DuckDNS pour la détection d'IP et ne supporte que l'IPv4.
