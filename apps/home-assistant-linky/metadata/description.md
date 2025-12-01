Home Assistant avec Matter & HA-Linky compatible ARM64 uniquement.

Pack Home Assistant destiné uniquement aux utilisateurs en France équipés d’un compteur Linky, avec support Matter et intégration HA-Linky pour récupérer automatiquement les consommations Enedis dans les tableaux de bord Énergie de Home Assistant via Conso API.

​
Fonctionnalités

    Serveur Matter intégré pour piloter les appareils compatibles (Thread / Wi‑Fi) directement depuis Home Assistant.

​

HA-Linky en conteneur dédié, qui interroge Conso API pour importer chaque jour les consommations de votre compteur Linky (quotidien et pas horaire quand disponible) dans le dashboard Énergie.

    ​

Prérequis côté Enedis / Linky

    Compteur Linky installé en France et compte client Enedis actif.

    Collecte de la consommation horaire activée dans l’espace client Enedis (rubrique accès / partage des données).

    Token d’accès généré sur le service Conso API après avoir autorisé l’accès à vos données Linky.

    ​

Mise en œuvre HA-Linky

    Créer un jeton d’accès longue durée Home Assistant (profil utilisateur > jetons longue durée) et le renseigner dans la configuration de l’application (variable SUPERVISOR_TOKEN).

​

Dans le dossier de données de l’application, créer un fichier options.json pour HA-Linky avec au minimum :

    prm : numéro de PRM à 14 chiffres de votre compteur Linky,

    token : token Conso API,

    name : nom d’affichage de la consommation dans Home Assistant,

    action : sync, production : false pour une installation en consommation seule.

    ​

Démarrer ou redémarrer le service HA-Linky : il va initialiser l’historique (jusqu’à un an) puis synchroniser automatiquement les nouvelles données 1 à 2 fois par jour, avec un délai d’environ 24 h lié au traitement Enedis.

    ​

Utilisation dans Home Assistant

    Ouvrir le tableau de bord Énergie de Home Assistant, ajouter une source de consommation électrique et sélectionner la statistique créée par HA-Linky correspondant au name défini dans options.json.

​

Après la première synchronisation réussie, les graphiques journaliers et, lorsque disponibles, les détails horaires de la consommation Linky seront visibles dans ce tableau de bord.

    ​

Aide et documentation

    Documentation complète HA-Linky (add-on & mode Docker standalone, configuration détaillée, gestion des coûts, import CSV) :
    https://github.com/bokub/ha-linky

​