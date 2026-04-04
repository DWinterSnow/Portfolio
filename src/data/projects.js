export const skillLabels = {
  all: 'Tous',
  mobile: 'Mobile',
  web: 'Web',
  'ux-design': 'UX/UI Design',
  'graphic-design': 'Graphic Design',
  branding: 'Branding',
  audiovisuelle: 'Audiovisuelle',
  interactive: 'Interactive',
  '3d': '3D',
};

export const typeLabels = {
  all: 'Tous',
  academic: 'Académique',
  professional: 'Professionnel',
  personal: 'Personnel',
};

const _projects = [
  {
    id: 1,
    slug: 'artibox',
    title: 'Artibox',
    type: 'professional',
    description:
      'Professional UX/UI design for web and mobile platforms with intuitive user experience.',
    longDescription:
      "Artibox est une plateforme numérique dédiée à la gestion et à la diffusion de contenus culturels et artistiques. Durant mon stage, j'ai conçu et prototypé les interfaces administration et front-end, en plaçant l'utilisateur au centre de chaque décision de design.",
    skills: ['ux-design', 'web', 'mobile'],
    tools: ['Figma', 'Adobe XD', 'Photoshop'],
    image: '/assets/image/projects/atibox/atibox.jpg',
    gradient: 'from-pink-500 to-red-500',
    context:
      "Stage professionnel chez ArtiBox à Collégien. Mission centrée sur l'amélioration de l'expérience utilisateur des interfaces web et mobile de la plateforme.",
    objectives: [
      "Concevoir des interfaces intuitives pour l'administration et le front-end",
      "Optimiser l'UX et l'accessibilité via le design thinking",
      'Améliorer les interactions et animations pour une navigation fluide',
      'Collaborer étroitement avec les développeurs web/mobile',
    ],
    process: [
      {
        step: 'Recherche & Audit UX',
        detail: "J'ai commencé par analyser l'existant : audit complet de l'interface, entretiens avec les utilisateurs et benchmark des concurrents. L'objectif était de comprendre les points de friction dans le parcours utilisateur. La difficulté principale était de synthétiser des retours très variés en axes d'amélioration concrets.",
        images: [
          { src: '/assets/image/projects/atibox/artibox_logo.webp', alt: 'Logo Artibox' },
        ],
      },
      {
        step: 'Idéation & Personas',
        detail: "À partir des données de recherche, j'ai animé des ateliers de design thinking avec l'équipe. J'ai créé des personas et cartographié les parcours utilisateurs. Le défi était d'aligner les besoins business avec les attentes réelles des utilisateurs, en trouvant un équilibre entre simplicité et fonctionnalités.",
      },
      {
        step: 'Prototypage des interfaces',
        detail: "J'ai conçu les wireframes basse fidélité puis itéré vers des maquettes haute fidélité sur Figma, pour le desktop et le mobile. La difficulté était de maintenir une cohérence visuelle entre les versions web et mobile tout en adaptant les interactions à chaque support.",
        images: [
          { src: '/assets/image/projects/atibox/Artiboxx_homepage.webp', alt: 'Page d\'accueil desktop' },
          { src: '/assets/image/projects/atibox/Atibox_hompage_phone.webp', alt: 'Page d\'accueil mobile' },
          { src: '/assets/image/projects/atibox/Bageguide_page.webp', alt: 'Page guide' },
        ],
      },
      {
        step: 'Tests & Itérations',
        detail: "J'ai organisé des sessions de tests utilisateurs pour valider les choix de design. Les profils desktop et mobile montrant des comportements différents, j'ai dû adapter les flows de navigation. Chaque cycle de feedback a permis de simplifier les interfaces et d'améliorer l'accessibilité.",
        images: [
          { src: '/assets/image/projects/atibox/user_profile_pc.webp', alt: 'Profil utilisateur desktop' },
          { src: '/assets/image/projects/atibox/User_profile_phone.webp', alt: 'Profil utilisateur mobile' },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'gnews',
    title: 'Gnews',
    type: 'academic',
    description:
      'Full-stack web and mobile platform with responsive UX design, frontend and backend development.',
    longDescription:
      "Gnews est une plateforme d'agrégation d'actualités développée en full-stack. Le projet couvre le design UX/UI responsive, le développement front-end et back-end, ainsi que l'intégration mobile pour une expérience multiplateforme cohérente.",
    skills: ['web', 'mobile', 'ux-design'],
    tools: ['Figma', 'React', 'Node.js', 'MongoDB'],
    image: '/assets/image/projects/gnew/gnew.jpg',
    gradient: 'from-teal-400 to-pink-300',
    context:
      "Projet académique réalisé dans le cadre du Bachelor BEST'm à ESIEE Paris. L'objectif était de concevoir et développer une plateforme d'actualités complète de A à Z.",
    objectives: [
      "Concevoir une interface utilisateur responsive et accessible",
      'Développer un back-end robuste avec API RESTful',
      'Intégrer un système de filtrage et de catégorisation des articles',
      'Assurer une expérience multiplateforme cohérente (web & mobile)',
    ],
    process: [
      {
        step: 'Conception UX & Maquettes',
        detail: "J'ai démarré par une phase de recherche utilisateur pour comprendre les habitudes de consommation d'actualités. J'ai créé des wireframes puis des maquettes interactives sur Figma. La difficulté était de concevoir une hiérarchie visuelle claire pour un flux dense d'informations tout en gardant l'interface lisible.",
        images: [
          { src: '/assets/image/projects/gnew/Gnews_HomePage.webp', alt: 'Page d\'accueil Gnews' },
          { src: '/assets/image/projects/gnew/Gnews_Subcribe_to_news.webp', alt: 'Page d\'abonnement aux actualités' },
        ],
      },
      {
        step: 'Développement Front-end',
        detail: "J'ai développé l'interface en React avec des composants réutilisables et un design responsive. Le challenge était de gérer le chargement dynamique des articles avec une pagination fluide et de maintenir des performances correctes avec un grand volume de contenu.",
      },
      {
        step: 'Développement Back-end & Architecture',
        detail: "J'ai conçu l'API RESTful en Node.js avec MongoDB pour la gestion des contenus. J'ai dû structurer la base de données pour supporter le filtrage par catégories et la recherche plein texte. La plus grande difficulté était d'optimiser les requêtes pour un temps de réponse rapide.",
        images: [
          { src: '/assets/image/projects/gnew/diagrame_architecture.webp', alt: 'Diagramme d\'architecture' },
        ],
      },
      {
        step: 'Intégration & Tests',
        detail: "J'ai connecté le front et le back, puis réalisé des tests cross-platform pour assurer une expérience cohérente sur web et mobile. La difficulté principale était la gestion des différentes tailles d'écran et l'adaptation des interactions tactiles vs souris.",
      },
    ],
  },
  {
    id: 3,
    slug: 'veux-tu-mepouser',
    title: "Veux-tu m'épouser",
    type: 'academic',
    description:
      'Audiovisual cinema project: 7-minute video with screenplay and multimedia storytelling.',
    longDescription:
      "\"Veux-tu m'épouser\" est un court-métrage de 7 minutes réalisé dans le cadre d'un projet audiovisuel. Ce projet explore la narration cinématographique à travers l'écriture de scénario, la direction artistique, le tournage et le montage vidéo.",
    skills: ['audiovisuelle'],
    tools: ['Capcut', 'After Effects', ],
    image: '/assets/image/projects/veux-tu-mepuser/veux-tu-mepuser.jpg',
    gradient: 'from-slate-500 to-zinc-600',
    context:
      "Projet académique de réalisation audiovisuelle. L'enjeu était de maîtriser toute la chaîne de production vidéo, de l'écriture au montage final.",
    objectives: [
      "Écrire un scénario original captivant",
      'Diriger et filmer les scènes avec une vision artistique cohérente',
      'Réaliser le montage vidéo et le sound design',
      'Raconter une histoire émouvante en 7 minutes',
    ],
    inlineProcess: true,
    process: [
      {
        step: 'Écriture & Storyboard',
        detail: "J'ai rédigé le scénario original à partir d'une idée de narration intime. J'ai ensuite dessiné le storyboard pour planifier chaque plan. La difficulté était de condenser une histoire émotionnellement riche en seulement 7 minutes tout en gardant un rythme narratif engageant.",
      },
      {
        step: 'Tournage & Direction artistique',
        detail: "J'ai dirigé les acteurs, cadré les scènes et géré la captation son. Le principal challenge était de travailler avec des contraintes de lumière naturelle et de coordonner les plannings des acteurs bénévoles sur un temps limité.",
        images: [
          { src: '/assets/image/projects/veux-tu-mepuser/Scene_1.webp', alt: 'Scène 1' },
          { src: '/assets/image/projects/veux-tu-mepuser/Scene_2.webp', alt: 'Scène 2' },
        ],
      },
      {
        step: 'Post-production & Montage',
        detail: "J'ai monté le film sur CapCut, ajouté les transitions et l'étalonnage couleur. La difficulté était de maintenir la continuité entre les scènes tournées à différents moments et de trouver le bon rythme de montage pour servir l'émotion.",
      },
      {
        step: 'Sound Design',
        detail: "J'ai travaillé le mixage audio, ajouté les ambiances sonores et la musique. Le défi était d'harmoniser les pistes audio captées dans des conditions différentes et de créer une atmosphère immersive avec After Effects pour les quelques effets visuels.",
      },
    ],
  },
  {
    id: 4,
    slug: 'modelisation-3d',
    title: 'Modélisation 3D',
    type: 'academic',
    date: '2024-2026',
    description:
      '3D modeling and animation with audiovisual content creation. Includes Unity SDK development for interactive 3D experiences.',
    longDescription:
      "Projet de modélisation et d'animation 3D combinant création de contenu audiovisuel et développement interactif. Ce projet explore les possibilités de Blender pour la modélisation et d'Unity pour la création d'expériences 3D interactives.",
    skills: ['3d', 'audiovisuelle'],
    tools: ['Blender', 'Unity','Substance Painter', 'Capcut', 'Premiere Pro'],
    image: '/assets/image/projects/modelisation-3d/modelisation-3d.jpg',
    gradient: 'from-blue-400 to-cyan-400',
    context:
      "Cela fait maintenant 2 ans que je pratique Blender. La modélisation 3D d'objets et l'animation sont devenues au fil du temps de véritables passions, me permettant de concevoir des objets et des univers tout en approfondissant mes connaissances techniques et créatives. Ce projet académique mais aussi personnel et axé sur la création 3D et les médias interactifs m'a permis de maîtriser le pipeline complet de la 3D : modélisation, texturage, animation et intégration dans un environnement interactif.",
    objectivesTitle: 'Compétences acquises',
    objectives: [
      'Maîtriser la modélisation 3D',
      "Créer des animations fluides et réalistes",
      "Utilisation de l'unity SDK",
      'Produire du contenu audiovisuel à partir de rendus 3D',
    ],
    dropdownProcess: true,
    processTitle: 'Projets réalisés',
    process: [
      {
        step: 'Luca le magicien — Création & Animation du personnage',
          detail: "Ce projet retrace toute la création de Luca, un jeune magicien imaginé dans un univers fantastique. J'ai travaillé chaque étape dans Blender, du concept art à l'animation, en passant par la modélisation, le texturage et le rigging. L'objectif était de donner vie à un personnage original avec une vraie identité visuelle et une animation cohérente.",
        tools: ['Blender','Capcut'],
        sections: [
          {
            title: 'Concept & Design',
            content: "L'objectif était de créer un personnage 3D complet dans Blender. Initialement pensé en style anime, le design a évolué vers un style figurine Pop — formes simplifiées et couleurs vives — plus adapté à une première expérience en 3D. Inspiré de D&D, des animes japonais (Frieren) et des figurines Pop, Luca est un jeune magicien de 20 ans qui découvre un médaillon magique ouvrant un monde parallèle.",
            image: { src: '/assets/image/projects/modelisation-3d/Luca_3D%20Reference%20sheet.webp', alt: 'Fiche de référence 3D' },
          },
          {
            title: 'Modélisation',
            content: "Partant d'un cube avec l'outil miroir pour la symétrie, j'ai sculpté la silhouette en ajustant vertices et subdivision pour obtenir des formes arrondies. Pour finaliser le style Pop/anime, j'ai creusé le visage avec l'outil loup et ajouté des yeux expressifs via une UV sphere modifiée, ainsi que des accessoires de magicien.",
            image: { src: '/assets/image/projects/modelisation-3d/image(5).webp', alt: 'Rendu final du modèle' },
          },
          {
            title: 'Rigging, Texturage & Difficultés',
            content: "Le rigging utilise un squelette humain pour une animation fluide. Pour le texturage, j'ai utilisé Smart UV Unwrap et peint les détails directement sur les faces du modèle. Les principales difficultés : l'outil miroir a créé des vertex non fermés causant des problèmes en UV editing, et les couleurs ne s'appliquaient parfois pas correctement, nécessitant de nombreuses corrections manuelles.",
            image: { src: '/assets/image/projects/modelisation-3d/Luca_bones.webp', alt: 'Rigging — Bones' },
          },
          {
            title: 'Animation — Storyboard',
            content: "L'animation suit un storyboard en 4 scènes : Luca découvre un livre ancien dans une bibliothèque, un cube magique déclenche un souvenir, il entre dans un temple mystique et touche un artefact lévitant, puis bascule dans un nouveau monde magique. Chaque scène a été animée par keyframes dans Blender.",
            image: { src: '/assets/image/projects/modelisation-3d/luca_keyframe_animation.webp', alt: 'Animation keyframe' },
          },
          {
            title: 'Résultat — Scènes finales',
            content: "Malgré un nombre limité de scènes, chacune a été choisie pour son impact narratif — la curiosité de Luca, l'apparition de la magie et la transition vers un monde fantastique. Ce projet m'a permis de maîtriser la chaîne complète : concept, modélisation, texturage, rigging et animation.",
            image: { src: '/assets/image/projects/modelisation-3d/luca_scens.webp', alt: 'Scènes finales' },
          },
        ],
      },
      {
        step: 'Animation d\'un environnement de bureau',
        detail: "Ce projet m'a permis de travailler plus en profondeur la lumière et la mise en scene d'un environnement interieur dans Blender. Il m'a aussi aide a rendre certains elements plus realistes, comme le tissu du lit, les cables ou encore l'organisation d'objets du quotidien dans un bureau. En plus de l'aspect visuel, ce travail m'a donne une meilleure comprehension du shading afin de produire un rendu plus coherent et plus credible.",
        tools: ['Blender', 'Premiere Pro'],
        images: [
          { src: '/assets/image/projects/modelisation-3d/bureaux%20animation.webp', alt: 'Animation bureau' },
        ],
      },
      {
        step: 'Modélisation d\'objets — Bouteille & Lustre',
        detail: "Ce projet portait sur la modélisation d'objets du quotidien, notamment une bouteille et un lustre avec ampoule, en mettant l'accent sur la précision des formes, le travail des matériaux PBR et la gestion de l'éclairage. Le principal défi consistait à reproduire de manière crédible les reflets et la transparence du verre, ce qui demandait une bonne maîtrise du shader editor de Blender.",
        tools: ['Blender'],
        images: [
          { src: '/assets/image/projects/modelisation-3d/medelin_bouteilleg.webp', alt: 'Modélisation bouteille' },
          { src: '/assets/image/projects/modelisation-3d/Modeling_lustre_ampoule.webp', alt: 'Modélisation lustre' },
        ],
      },
      {
        step: 'Peluche — Texturage & Unity SDK',
        detail: "Passionné par la réalité virtuelle, je me suis intéressé aux plateformes de jeux qui proposent des SDK permettant aux utilisateurs de publier et d'intégrer leurs propres créations. À partir du SDK d'un jeu, ce projet consistait à concevoir une peluche sur Blender, réaliser son texturage sur Substance Painter 3D, puis l'intégrer dans le jeu avec Unity. L'objet peut être attaché à un avatar, déposé dans une map et utilisé comme élément interactif dans l'environnement.",
        tools: ['Blender', 'Substance Painter', 'Unity'],
        sections: [
          {
            title: 'Modélisation & Dépliage UV',
            content: "J'ai modélisé la peluche dans Blender à partir de formes primitives, avec une topologie propre pour faciliter la suite du pipeline. Pour obtenir une UV propre et facile à texturer dans Substance Painter, j'ai utilisé des seams afin de séparer correctement les différentes zones du modèle et de limiter les déformations sur la texture.",
            image: { src: '/assets/image/projects/modelisation-3d/pelush_seamUV.webp', alt: 'Dépliage UV de la peluche' },
          },
          {
            title: 'Texturage dans Substance Painter',
            content: "Le texturage a été réalisé directement dans Substance Painter, avec l'ajout de couleurs, de détails et de variations de matière pour retrouver un aspect plus textile. Les maps finales, comme l'Albedo, la Normal et la Roughness, ont ensuite été exportées pour un rendu temps réel.",
            image: { src: '/assets/image/projects/modelisation-3d/plush_subtancepainter.webp', alt: 'Texturage dans Substance Painter' },
          },
          {
            title: 'Intégration dans Unity via le SDK',
            content: "Le modèle a ensuite été importé dans Unity au format FBX. Un material shader Poyomi a été utilisé pour appliquer les textures OpenGL à la peluche et renforcer son apparence textile. Grâce à cette intégration via le SDK, l'objet obtenu se rapproche davantage d'une vraie peluche et peut être utilisé dans le jeu comme accessoire ou élément interactif.",
            image: { src: '/assets/image/projects/modelisation-3d/pelush_unitySDK.webp', alt: 'Peluche intégrée dans Unity' },
          },
          {
            title: 'Résultat final',
              content: "Une fois intégrée dans le jeu via le SDK, la peluche peut être placée dans une map, utilisée comme objet interactif et manipulée par les autres joueurs. Ce résultat final montre que l'ensemble du pipeline, la modélisation, les UV, la texturee et l'intégration a permis d'obtenir un asset cohérent, fonctionnel et prêt à être utilisé en jeu.",
            image: { src: '/assets/image/projects/modelisation-3d/Peluch_map.webp', alt: 'Peluche dans la map du jeu' },
          },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'astral-sword',
    title: 'Astral Sword',
    type: 'academic',
    description:
      'Interactive digital art project using Max MSP exploring immersive storytelling and creative coding.',
    longDescription:
      "Astral Sword est un projet d'art numérique interactif utilisant Max MSP. Cette installation explore la narration immersive à travers le creative coding, combinant visuels génératifs, sons réactifs et interaction en temps réel.",
    skills: ['interactive'],
    tools: ['Max MSP', 'Jitter', 'Arduino'],
    image: '/assets/image/projects/astral-sword/astral-sword.jpg',
    gradient: 'from-purple-500 to-blue-600',
    context:
      "Projet académique d'art interactif et de creative coding. L'enjeu était de créer une expérience immersive mêlant son, image et interaction humaine.",
    objectives: [
      'Créer une installation interactive immersive',
      'Explorer le creative coding avec Max MSP',
      'Combiner visuels génératifs et sons réactifs',
      "Concevoir une narration non-linéaire pilotée par l'utilisateur",
    ],
    process: [
      {
        step: 'Concept & Scénarisation',
        detail: "J'ai défini l'univers visuel et sonore du projet en esquissant l'interaction homme-machine. J'ai conçu le diagramme du système reliant les capteurs, Max MSP et les sorties audiovisuelles. La difficulté était de penser une interaction non-linéaire où chaque geste du public devait produire une réponse cohérente et immersive.",
        images: [
          { src: '/assets/image/projects/astral-sword/Diagram.webp', alt: 'Diagramme du système' },
        ],
      },
      {
        step: 'Développement Max MSP',
        detail: "J'ai programmé les patches Max MSP pour le traitement audio et les visuels génératifs avec Jitter. Le patch Sword Swing traduit les mouvements de l'épée en sons et effets visuels. La difficulté principale était la latence — il fallait que la réponse soit instantanée pour que l'interaction reste crédible.",
        images: [
          { src: '/assets/image/projects/astral-sword/Fontview_Interactif_device_Max_MSP.webp', alt: 'Dispositif Max MSP' },
          { src: '/assets/image/projects/astral-sword/Max_masp_SwordSwing.webp', alt: 'Patch Max MSP — Sword Swing' },
        ],
      },
      {
        step: 'Prototypage hardware',
        detail: "J'ai construit le dispositif interactif avec un accéléromètre Arduino intégré dans une épée physique, connectée au PC en temps réel. Le défi était de calibrer les capteurs pour distinguer les mouvements intentionnels du bruit de fond, et de maintenir une communication série stable.",
        images: [
          { src: '/assets/image/projects/astral-sword/Fronview_interactif_device.webp', alt: 'Vue de face du dispositif' },
          { src: '/assets/image/projects/astral-sword/acceleometer_sword.webp', alt: 'Accéléromètre épée' },
          { src: '/assets/image/projects/astral-sword/accelometer_sword_PCconected.jpg', alt: 'Épée connectée au PC' },
        ],
      },
      {
        step: 'Installation & Résultat final',
        detail: "J'ai mis en place l'installation finale dans l'espace d'exposition, en ajustant l'éclairage, la projection et le son en temps réel. La difficulté était de calibrer l'ensemble pour des conditions de lumière et de bruit variables selon les visiteurs. Le résultat est une expérience où chaque mouvement d'épée génère une réponse unique.",
        images: [
          { src: '/assets/image/projects/astral-sword/End_resultt.webp', alt: 'Résultat final' },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'aftermath-festival',
    title: 'Aftermath Festival',
    type: 'personal',
    description:
      'Festival branding and UX/UI design with Adobe Illustrator and Photoshop.',
    longDescription:
      "Aftermath Festival est un projet personnel de branding complet pour un festival de musique fictif. Le projet englobe la création de l'identité visuelle, le design des supports de communication et la conception de l'interface web du festival.",
    skills: ['ux-design', 'branding'],
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    image: '/assets/image/projects/aftermath-festival/aftermath-festival.jpg',
    gradient: 'from-indigo-500 to-purple-500',
    context:
      "Projet personnel de branding créatif. L'objectif était de concevoir une identité visuelle forte et mémorable pour un festival de musique, du logo aux supports de communication.",
    objectives: [
      'Créer une identité visuelle complète et cohérente',
      'Concevoir le logo, la typographie et la palette de couleurs',
      'Réaliser les supports de communication (affiches, flyers, bannières)',
      "Designer l'interface web du festival avec une approche UX",
    ],
    process: [
      {
        step: 'Recherche & Moodboards',
        detail: "J'ai analysé les identités visuelles de festivals existants (Coachella, Tomorrowland, Primavera Sound) pour comprendre les codes graphiques du milieu. J'ai constitué des moodboards pour définir la direction créative. La difficulté était de trouver un positionnement visuel original qui se démarque tout en restant lisible.",
      },
      {
        step: 'Identité visuelle & Logo',
        detail: "J'ai conçu le logo du festival avec plusieurs itérations, choisi la typographie et défini la palette de couleurs. Le challenge était de créer un logo polyvalent qui fonctionne aussi bien en grand format sur une affiche qu'en petit sur un billet ou un goodies.",
        images: [
          { src: '/assets/image/projects/aftermath-festival/AF_Logo.webp', alt: 'Logo Aftermath Festival' },
        ],
      },
      {
        step: 'Supports de communication',
        detail: "J'ai designé les affiches, goodies et billets sur Illustrator et Photoshop. La difficulté principale était de maintenir la cohérence graphique sur des formats très différents (du billet A7 à l'affiche A0) tout en adaptant la hiérarchie d'information à chaque support.",
        images: [
          { src: '/assets/image/projects/aftermath-festival/AF_Goodies_Ticket.webp', alt: 'Goodies & Tickets' },
          { src: '/assets/image/projects/aftermath-festival/AF_Signe_Prototype_image.webp', alt: 'Signalétique — Prototype' },
        ],
      },
      {
        step: 'Interface web du festival',
        detail: "J'ai conçu les maquettes UI du site web du festival sur Figma avec une approche mobile-first. Le défi était de créer une navigation intuitive vers le programme, la billetterie et les infos pratiques, tout en gardant l'énergie visuelle du branding.",
        images: [
          { src: '/assets/image/projects/aftermath-festival/AF_Hompagee.webp', alt: 'Page d\'accueil du site' },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'tcgvault',
    title: 'TCGVault',
    type: 'personal',
    description:
      'Mobile app combining UX/UI design with brand identity and branding strategy.',
    longDescription:
      "TCGVault est une application mobile dédiée à la gestion de collections de cartes à jouer et à collectionner (TCG). Le projet couvre la conception UX/UI complète, le branding et la stratégie d'identité visuelle pour créer une expérience utilisateur engageante.",
    skills: ['ux-design', 'branding', 'mobile'],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    image: '/assets/image/projects/tcgvault/tcg-vault.jpg',
    gradient: 'from-orange-500 to-red-400',
    context:
      "Projet personnel motivé par la passion pour les jeux de cartes à collectionner. L'objectif était de concevoir une application mobile intuitive pour gérer et valoriser sa collection.",
    objectives: [
      'Concevoir une application mobile intuitive et engageante',
      "Créer une identité de marque forte et reconnaissable",
      'Optimiser le parcours utilisateur pour la gestion de collection',
      'Intégrer des fonctionnalités sociales et de partage',
    ],
    process: [
      {
        step: 'Recherche UX & Marché',
        detail: "J'ai étudié le marché des apps de gestion de collections TCG (TCGPlayer, Moxfield, Deckbox) et interviewé des collectionneurs passionnés. La difficulté était de comprendre les workflows très différents entre les joueurs compétitifs et les collectionneurs purs, et de trouver des fonctionnalités qui servent les deux.",
        images: [
          { src: '/assets/image/projects/tcgvault/Buisness_model_TCG.webp', alt: 'Business Model' },
        ],
      },
      {
        step: 'Branding & Identité',
        detail: "J'ai créé le nom TCGVault, conçu le logo et défini l'identité visuelle complète. Le challenge était de trouver un équilibre entre un look premium (pour valoriser les collections) et une approche accessible et fun (pour attirer les nouveaux collectionneurs).",
        images: [
          { src: '/assets/image/projects/tcgvault/TCG_Branding.webp', alt: 'Branding TCGVault' },
        ],
      },
      {
        step: 'Design UI & Prototype',
        detail: "J'ai conçu les wireframes puis un prototype haute fidélité sur Figma avec toutes les interactions. La difficulté principale était de rendre la gestion d'inventaire intuitive sur mobile — afficher beaucoup d'informations (état, prix, édition) sur un petit écran sans surcharger l'interface.",
        images: [
          { src: '/assets/image/projects/tcgvault/TCG_home_phone.webp', alt: 'Page d\'accueil mobile' },
          { src: '/assets/image/projects/tcgvault/TCG_Inventory.webp', alt: 'Inventaire de cartes' },
        ],
      },
      {
        step: 'Tests utilisateurs & Itérations',
        detail: "J'ai organisé des tests avec des collectionneurs pour valider le parcours. Les retours ont révélé que la fonction de scan de cartes était trop enfouie dans le menu — j'ai donc repensé la navigation pour la rendre accessible en un tap. Chaque itération a simplifié le flow d'ajout de cartes.",
      },
    ],
    results:
      "Application mobile entièrement designée avec une identité forte, un parcours utilisateur optimisé et un prototype interactif prêt pour le développement.",
    date: '2025',
  },
];

const base = import.meta.env.BASE_URL;
function prefixAssetPaths(obj) {
  if (typeof obj === 'string' && obj.startsWith('/assets/'))
    return base + obj.slice(1);
  if (Array.isArray(obj)) return obj.map(prefixAssetPaths);
  if (obj !== null && typeof obj === 'object')
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, prefixAssetPaths(v)])
    );
  return obj;
}

export const projects = _projects.map((p) => prefixAssetPaths(p));
