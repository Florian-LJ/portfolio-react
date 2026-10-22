# Portfolio — Florian Le Joncour

Portfolio personnel développé avec React pour présenter mon parcours, mes compétences et mes projets. L'interface s'adapte aux mobiles et aux écrans larges, avec un thème clair/sombre mémorisé entre les visites.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
</p>

## Aperçu

Le site met en avant :

- une présentation et un lien pour télécharger mon CV ;
- mon parcours de formation et mes expériences ;
- mes compétences, regroupées par domaine ;
- une sélection de projets avec leurs technologies et leurs dépôts ;
- un sélecteur de thème clair/sombre.

## Technologies

- **React 19** — composants et interface utilisateur
- **Vite 8** — serveur de développement et build
- **Tailwind CSS 4** — styles et mise en page responsive
- **Lucide React** — icônes

## Lancer le projet en local

### Prérequis

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Florian-LJ/portfolio-react.git
cd portfolio-react
npm install
npm run dev
```

Vite affiche l'adresse locale à ouvrir dans le navigateur après le démarrage.

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Génère la version de production dans `dist/` |
| `npm run preview` | Prévisualise la version de production |
| `npm run lint` | Analyse le code avec Oxlint |

## Structure du projet

```text
src/
├── assets/          # Images, icône et CV
├── components/      # Sections et composants de l'interface
├── styles/          # Variables et couleurs des thèmes
├── App.jsx          # Assemblage des sections et gestion du thème
├── index.css        # Styles globaux et configuration Tailwind
└── main.jsx         # Point d'entrée React
```

## Personnalisation

Les contenus des sections sont définis dans les composants correspondants sous `src/components/`. Les couleurs et variables des thèmes se trouvent dans `src/styles/colors.css`.

## Contact

- **GitHub :** [Florian-LJ](https://github.com/Florian-LJ)
- **Email :** [florian.lejoncour@gmail.com](mailto:florian.lejoncour@gmail.com)
