Home Assistant avec Matter & HA-Linky compatible ARM64 uniquement.

Il n'est plus possible d'utiliser les dernières version de l'add-on HA Linky avec une architecture armv7, i386 ou armhf avec la version 1.7.0

Pack Home Assistant destiné uniquement aux utilisateurs en France équipés d’un compteur Linky, avec support Matter et intégration HA-Linky pour récupérer automatiquement les consommations Enedis dans les tableaux de bord Énergie de Home Assistant via Conso API.



​
HA-Linky en conteneur dédié, qui interroge Conso API pour importer les consommations de votre compteur Linky dans le dashboard Énergie : données par demi-heure pour les 7 derniers jours, puis données quotidiennes pour l'historique plus ancien.

Prérequis côté Enedis / Linky

    Compteur Linky installé en France et compte client Enedis actif.

    Collecte de la consommation horaire activée dans l’espace client Enedis (rubrique accès / partage des données).

    Token d’accès généré sur le service Conso API après avoir autorisé l’accès à vos données Linky.

    ​

Mise en œuvre HA-Linky

    Créer un jeton d’accès longue durée Home Assistant (profil utilisateur > jetons longue durée) et le renseigner dans la configuration de l’application (variable SUPERVISOR_TOKEN).

​
Dans le dossier de données de l'application, créer un fichier `options.json` pour HA-Linky avec la structure minimale suivante :

```json
{
  "meters": [
    {
      "prm": "",
      "token": "",
      "name": "Linky consumption",
      "action": "sync",
      "production": false
    }
  ],
  "costs": []
}
```

Remplissez les champs suivants :
- `prm` : numéro de PRM à 14 chiffres de votre compteur Linky
- `token` : token d'accès Conso API
- `name` : nom d'affichage de la consommation dans Home Assistant
- `action` : "sync" pour synchroniser automatiquement
- `production` : false pour une installation en consommation seule

​

Démarrer ou redémarrer le service HA-Linky : il va initialiser l'historique (jusqu'à un an de données quotidiennes) puis synchroniser automatiquement les nouvelles données deux fois par jour (entre 6h-7h et entre 9h-10h du matin), avec un délai d'environ 24h lié au traitement Enedis.


Utilisation dans Home Assistant

    Ouvrir le tableau de bord Énergie de Home Assistant, ajouter une source de consommation électrique et sélectionner la statistique créée par HA-Linky correspondant au `name` défini dans `options.json`.

    ​
Après la première synchronisation réussie, les graphiques journaliers seront visibles. Pour les 7 derniers jours, des détails par demi-heure seront disponibles. Pour les dates plus anciennes, seules les données quotidiennes apparaîtront.


## 📚 Aide et documentation

**Documentation complète HA-Linky** (add-on & mode Docker standalone, configuration détaillée, gestion des coûts, import CSV) :

🔗 **https://github.com/bokub/ha-linky**
