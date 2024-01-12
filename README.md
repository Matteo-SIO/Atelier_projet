# Architecture du projet:
- `/api` : contient les fichiers de l'API (le serveur backend qui contact la bdd...)
- `/clients` : contient les fichiers clients (site web + mobile)

# Installation:
## API:
- configurer le fichier `/api/config.ts`
- avoir sa base de donnée disponible
- `cd api` : se placer dans le dossier api
- `npm install` : installer les dépendances

## Client web:
- `cd clients` : se placer dans le dossier clients
- `npm install` : installer les dépendances

## Client mobile:
- avoir effectué les étapes de la partie client web
- installer Android Studio (mobile)
- `npx cap add android` : ajouter la plateforme android

# Lancement:
## API:
- `cd api` : se placer dans le dossier api
- avoir build l'API backend
- `npm run server` : lancer le serveur
- 
  Pour build:
- `npm run build` : build l'API backend

## Client web:
- `cd clients` : se placer dans le dossier clients
- avoir build le client web
- avoir lancé l'API backend
- `npm run dev` : lancer le client web (mode développement)

Pour build:
- `npm run build` : build le client web

## Client mobile:
- `cd clients` : se placer dans le dossier clients
- avoir build le client web
- `npx cap sync` : synchroniser le projet d'Android Studio
- `npx cap open android` : ouvrir le projet d'Android Studio
- attentre le chargement du projet
- Compiler un .APK signé (Build > Generate Signed Bundle / APK...)
- Utiliser `clients/cert.jks` comme keystore
- Utiliser `projet` comme mot de passe
- Utiliser `cert2` : `projet` comme alias