# Portfolio - Dias Oliveira Ruben

Un site de portfolio moderne et réactif construit avec React, Vite et Tailwind CSS.

## Fonctionnalités

- **Design Réactif** - Fonctionne parfaitement sur mobile, tablette et bureau
- **Support du Mode Sombre** - Basculez entre les thèmes clair et sombre
- **Filtrage des Projets** - Filtrez les projets par compétences et type (Académique, Professionnel, Personnel)
- **Animations Fluides** - Animations de fondu et défilement lisse
- **Interface Moderne** - Construit avec Tailwind CSS et du style personnalisé

## Pile Technologique

- **Framework Frontend** : React 18
- **Outil de Construction** : Vite
- **Stylisation** : Tailwind CSS
- **Icônes** : React Icons
- **Famille de Polices** : Dancing Script, Inter

## Structure du Projet

```
src/
├── components/
│   ├── Hero.jsx          # Section d'accueil avec profil
│   ├── About.jsx         # Section À propos et expérience
│   ├── Services.jsx      # Services offerts
│   ├── Projects.jsx      # Projets portfolio avec filtres
│   ├── Contact.jsx       # Formulaire de contact
│   ├── Navigation.jsx    # Navigation d'en-tête
│   └── Footer.jsx        # Pied de page avec liens
├── styles/              # CSS spécifique aux composants
├── utils/               # Fonctions utilitaires
└── App.jsx              # Composant principal de l'application

public/
├── assets/
│   ├── image/
│   │   ├── projects/    # Images de présentation des projets
│   │   ├── industry/    # Images d'expérience/éducation
│   │   └── profile/     # Photo de profil
│   └── pdf/             # CV et PDF du portfolio
```

## Ajouter des Images de Projet

Pour ajouter des images pour vos projets :

1. Placez les images du projet dans : `public/assets/image/projects/{project-name}/`
2. Nommez le fichier image de la même manière que le dossier du projet
3. Formats supportés : `.jpg`, `.png`

Exemple de structure de projet :
```
public/assets/image/projects/
├── atibox/
│   └── atibox.jpg
├── gnew/
│   └── gnew.jpg
├── veux-tu-mepuser/
│   └── veux-tu-mepuser.jpg
└── ...
```

## Configuration

### Tailwind CSS
Couleurs personnalisables dans `tailwind.config.js` :
- `primary` : Couleur de marque principale
- `secondary` : Couleur d'accent secondaire

### Mode Sombre
Le mode sombre est automatiquement détecté en fonction des préférences du système et peut être basculé via le bouton de thème.

## Sections

1. **Hero** - Section d'accueil avec image de profil et boutons d'appel à l'action
2. **About** - Chronologie de l'expérience et études
3. **Services** - Compétences et services offerts
4. **Projects** - Projets portfolio avec double filtrage (compétences + type)
5. **Contact** - Formulaire de contact (placeholder)
6. **Footer** - Liens vers les PDF CV et Portfolio

## Données des Projets

Les projets incluent :
- **Artibox** - Conception UX/UI professionnelle
- **Gnews** - Application web full-stack
- **Veux-tu m'épouser** - Projet de cinéma audiovisuel
- **Modelisation 3D** - Modélisation 3D avec Unity SDK
- **Astral Sword** - Art interactif avec Max MSP
- **Aftermath Festival** - Branding du festival
- **TCGVault** - Application mobile pour cartes à collectionner

## Contribution

N'hésitez pas à créer un fork et à modifier ce portfolio pour votre propre usage !

## Licence

Personal portfolio - Dias Oliveira Ruben
