Backend - Documentation

Description

Ce projet est une API RESTful pour gérer des annonces, comprenant des fonctionnalités comme la création, la mise à jour, la suppression et la récupération d'annonces. L'API est construite avec Node.js, Express et MongoDB.

Prérequis

Node.js installé (version 14 ou supérieure)

MongoDB en cours d'exécution

Installation

Clonez ce dépôt :

git clone <url-du-repo-backend>

Naviguez dans le dossier du backend :

cd backend

Installez les dépendances :

npm install

Configuration

Créez un fichier .env à la racine avec les variables suivantes :

PORT=8080
MONGO_URI=<votre-url-mongodb>
JWT_SECRET=<votre-clé-secrète>

Lancement

Lancez le serveur :

npm start

L'API sera accessible à http://localhost:8080

Routes Principales

POST /register : Inscription d'un utilisateur

POST /login : Connexion d'un utilisateur

POST /post : Créer une annonce (authentification requise)

GET /posts : Récupérer toutes les annonces (authentification requise)

PUT /post/:postId : Mettre à jour une annonce (authentification requise)

DELETE /post/:postId : Supprimer une annonce (authentification requise)

Structure du Projet

Controllers/ : Contient la logique métier des routes

Middleware/ : Gestion des middlewares, comme l'authentification

Models/ : Modèles de données pour MongoDB

Routes/ : Définition des routes API

