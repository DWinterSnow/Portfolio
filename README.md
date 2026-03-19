# Portfolio - Dias Oliveira Ruben

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Dark Mode Support** - Toggle between light and dark themes
- **Project Filtering** - Filter projects by skills and type (Academic, Professional, Personal)
- **Smooth Animations** - Fade-in animations and smooth scrolling
- **Modern UI** - Built with Tailwind CSS and custom styling

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font Family**: Dancing Script, Inter

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Landing section with profile
│   ├── About.jsx         # About & experience section
│   ├── Services.jsx      # Services offered
│   ├── Projects.jsx      # Portfolio projects with filters
│   ├── Contact.jsx       # Contact form
│   ├── Navigation.jsx    # Header navigation
│   └── Footer.jsx        # Footer with links
├── styles/              # Component-specific CSS
├── utils/               # Utility functions
└── App.jsx              # Main app component

public/
├── assets/
│   ├── image/
│   │   ├── projects/    # Project showcase images
│   │   ├── industry/    # Experience/education images
│   │   └── profile/     # Profile picture
│   └── pdf/             # CV and portfolio PDFs
```

## Adding Project Images

To add images for your projects:

1. Place project images in: `public/assets/image/projects/{project-name}/`
2. Name the image file the same as the project folder
3. Supported formats: `.jpg`, `.png`

Example project structure:
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
Customizable colors in `tailwind.config.js`:
- `primary`: Main brand color
- `secondary`: Secondary accent color

### Dark Mode
Dark mode is automatically detected based on system preference and can be toggled via the theme button.

## Sections

1. **Hero** - Landing section with profile image and CTA buttons
2. **About** - Experience timeline and education
3. **Services** - Skills and services offered
4. **Projects** - Portfolio projects with dual filtering (skills + type)
5. **Contact** - Contact form (placeholder)
6. **Footer** - Links to CV and Portfolio PDFs

## Project Data

Projects include:
- **Artibox** - Professional UX/UI design
- **Gnews** - Full-stack web application
- **Veux-tu m'épouser** - Audiovisual cinema project
- **Modelisation 3D** - 3D modeling with Unity SDK
- **Astral Sword** - Interactive art with Max MSP
- **Aftermath Festival** - Festival branding
- **TCGVault** - Mobile trading card app

## Contributing

Feel free to fork and modify this portfolio for your own use!

## License

Personal portfolio - use as reference or inspiration.
