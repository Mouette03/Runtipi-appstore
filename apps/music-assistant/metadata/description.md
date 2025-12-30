# Music Assistant – Smart Multiroom Audio 🎵🏠
# Music Assistant – Audio multiroom intelligent 🎵🏠

## English 🇬🇧

Server URL: `http://SERVER_IP:8095`

**Music Assistant** unifies all your music sources (Spotify, local files, YouTube Music, etc.) and players (Chromecast, Sonos, AirPlay) in a single interface. Perfect for Home Assistant integration!

**Key Features:**  
- 🎵 **Multi-sources**: Spotify, Tidal, Qobuz, YouTube, local files, radio.  
- 📶 **All your players**: Chromecast, Sonos, AirPlay, DLNA, Bluetooth, Squeezebox.  
- 🤖 **HA Integration**: media_player entities for automations and scripts.  
- 🖥️ **Web Interface**: available directly on `http://SERVER_IP:8095` (not exposed by Runtipi because the container runs on host network).  
- 🔒 **Local only**: No cloud required, everything local.  
- ⚙️ **Simple Setup**: Single Docker container.


**Home Assistant Configuration:**  
1. Settings → Devices & Services → **Add Integration**  
2. Search **"Music Assistant"**  
3. Server URL: `http://SERVER_IP:8095`  
4. **Submit** → Done!

## Français 🇫🇷

URL du serveur : `http://IP_SERVEUR:8095`

**Music Assistant** unifie toutes vos sources musicales (Spotify, fichiers locaux, YouTube Music, etc.) et vos lecteurs (Chromecast, Sonos, AirPlay) dans une interface unique. Parfait pour l'intégration avec Home Assistant !

**Fonctionnalités clés :**  
- 🎵 **Multi-sources** : Spotify, Tidal, Qobuz, YouTube, fichiers locaux, radios.  
- 📶 **Tous vos lecteurs** : Chromecast, Sonos, AirPlay, DLNA, Bluetooth, Squeezebox.  
- 🤖 **Intégration HA** : media_player pour automatisations et scripts.  
- 🖥️ **Interface web** : accessible directement sur `http://IP_SERVEUR:8095` (non exposable par Runtipi car le conteneur utilise le réseau host).  
- 🔒 **Local only** : Pas de cloud obligatoire, tout en local.  
- ⚙️ **Configuration simple** : Un seul conteneur Docker.


**Configuration Home Assistant :**  
1. Paramètres → Appareils & services → **Ajouter une intégration**  
2. Chercher **"Music Assistant"**  
3. URL du serveur : `http://IP_SERVEUR:8095`  
4. **Soumettre** → Prêt !
