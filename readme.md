API Star Wars
Ce projet est une API Star Wars qui fournit des informations sur les personnages, les véhicules et les transports,les vaisseaux, vehicules et biensur les films de l'univers Star Wars. L'API est basée sur le modèle de Richardson pour le développement d'API RESTful.

Modèle de Richardson
Le modèle de Richardson, également connu sous le nom de modèle de maturité des API RESTful, est une approche pour concevoir et développer des API RESTful de manière évolutive et cohérente. Il propose un ensemble de niveaux ou de contraintes pour les API RESTful, qui permettent de mesurer leur adhésion aux principes de l'architecture REST.

Les niveaux du modèle de Richardson sont les suivants :

Niveau 0 - Services Web basés sur SOAP: Les services Web sont exposés en utilisant des protocoles SOAP (Simple Object Access Protocol) et des opérations CRUD (Create, Read, Update, Delete).

Niveau 1 - Ressources individuelles: Les services exposent des ressources individuelles, identifiées par des URI.

Niveau 2 - Verbes HTTP: Les services utilisent les verbes HTTP (GET, POST, PUT, DELETE) pour interagir avec les ressources.

Niveau 3 - Hyperliens: Les services incluent des hyperliens (HATEOAS - Hypermedia as the Engine of Application State) dans les réponses, permettant aux clients de naviguer et de découvrir dynamiquement les fonctionnalités de l'API.

Respect du modèle de Richardson
Dans cette API Star Wars, nous avons respecté les niveaux du modèle de Richardson de la manière suivante :

Niveau 1 (Ressources individuelles) : Chaque entité (personnage, véhicule, transport) est exposée en tant que ressource individuelle identifiée par une URI unique. Par exemple, les personnages sont accessibles à l'URI /characters, les véhicules à l'URI /vehicles et les transports à l'URI /transports.

Niveau 2 (Verbes HTTP) : Nous utilisons les verbes HTTP appropriés pour chaque action sur les ressources. Par exemple, nous utilisons GET pour récupérer des ressources, POST pour créer de nouvelles ressources, PUT pour mettre à jour des ressources existantes et DELETE pour supprimer des ressources.

Niveau 3 (Hyperliens) : Nous avons inclus des hyperliens dans les réponses JSON renvoyées par l'API. Ces hyperliens permettent aux clients de naviguer et de découvrir dynamiquement les fonctionnalités de l'API. Par exemple, une réponse renvoyant un personnage peut inclure des liens vers les véhicules associés à ce personnage.

En respectant les niveaux du modèle de Richardson, nous créons une API RESTful évolutive, cohérente et facile à naviguer pour les clients.

Documentation de l'API
La documentation complète de l'API est disponible dans les fichiers Swagger YAML générés. Vous pouvez consulter les Swagger YAML pour chaque partie de l'API (personnages, véhicules, transports) pour obtenir des informations détaillées sur les endpoints, les paramètres, les réponses et les schémas de données.

Pour visualiser et interagir avec la documentation Swagger, vous pouvez utiliser des outils tels que Swagger UI, Postman ou Insomnia.

Configuration et déploiement
Pour configurer et déployer l'API Star Wars, suivez les étapes suivantes :

Assurez-vous d'avoir Node.js et MongoDB installés sur votre machine.

Clonez ce référentiel dans votre environnement local.

Exécutez npm install pour installer les dépendances.

Configurez les paramètres de connexion à la base de données MongoDB en mettant la variable globale de connexion MONGO_URI dans votre fichier .env

Exécutez npm start pour démarrer le serveur de l'API.

L'API sera accessible à l'adresse http://localhost:5000.

N'hésitez pas à explorer et à utiliser l'API Star Wars pour accéder aux informations sur les personnages, les véhicules et les transports de l'univers Star Wars.

Contributions
Les contributions à l'amélioration et à l'extension de cette API Star Wars sont les bienvenues ! Si vous souhaitez apporter des modifications, veuillez soumettre une demande d'extraction en décrivant vos modifications et en expliquant leur pertinence.

Licence
Ce projet est sous licence MIT, ce qui signifie que vous pouvez l'utiliser, le modifier et le distribuer librement. Cependant, veuillez noter que les données Star Wars utilisées dans cette API sont soumises aux droits d'auteur de Lucasfilm Ltd. Veuillez consulter les conditions d'utilisation appropriées pour les données Star Wars.