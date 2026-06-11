# REDBEARDVFX Portfolio

VFX Artist Portfolio website for Rustam Masuev (redbeardvfx) - a professional VFX Supervisor and Compositing Artist.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 8
- **Styling**: SCSS with CSS Modules + BEM naming convention
- **Architecture**: Feature-Sliced Design (FSD)
- **Utilities**: clsx for className management

## Project Structure

```
src/
├── app/                    # Application layer
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│       ├── _reset.scss
│       ├── _tokens.scss    # Design system tokens (CSS Custom Properties)
│       └── global.scss
│
├── pages/                  # Page layer
│   └── portfolio/
│       ├── ui/
│       │   └── PortfolioPage.tsx
│       └── index.ts
│
├── widgets/                # Feature widgets (sections)
│   ├── header/
│   ├── hero/
│   ├── gallery/
│   ├── expertise/
│   ├── about/
│   ├── clients/
│   └── footer/
│
├── entities/               # Domain entities
│   └── project/
│       ├── model/
│       │   └── types.ts
│       └── index.ts
│
└── shared/                 # Shared utilities and components
    ├── ui/
    │   ├── button/
    │   └── section-header/
    ├── styles/
    │   ├── _variables.scss
    │   └── _mixins.scss
    └── lib/
        └── data.ts         # Static content and interfaces
```

## Design System

### Colors (CSS Custom Properties)
- **Accent**: `#D35400` (orange)
- **Background**: Deep (`#0A0A0A`), Primary (`#1A1A1A`), Card (`#111111`)
- **Text**: Primary (`#E0E0E0`), Secondary (`#999999`), Tertiary (`#666666`)

### Typography
- **Body Font**: Geist (sans-serif)
- **Heading Font**: Geist Mono (monospace)

### Spacing Scale
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens dev server at `http://localhost:5173`

### Build

```bash
npm run build
```

Produces optimized build in `dist/` directory.

### Preview Build

```bash
npm run preview
```

## BEM Naming Convention

All components use BEM (Block Element Modifier) naming pattern:

```scss
.block { }
.block__element { }
.block__element--modifier { }
```

Example in TSX:
```tsx
import styles from './Header.module.scss'

<div className={styles.header}>
  <nav className={styles['header__nav']}>
    <a className={clsx(styles['header__nav-link'],
                        { [styles['header__nav-link--active']]: isActive })}>
```

## Sections

1. **Header** - Navigation menu (Works, Services, About, Contact)
2. **Hero** - Main introduction with CTA
3. **Gallery** - VFX project showcase (5 projects)
4. **Expertise** - Technical skills (Nuke, Blender, Matchmoving)
5. **About** - Biography and CV download
6. **Clients** - Client logo cloud (6 major studios)
7. **Footer** - Contact CTA and social links

## Path Aliases

Configured for cleaner imports:
- `@app` → `src/app`
- `@pages` → `src/pages`
- `@widgets` → `src/widgets`
- `@entities` → `src/entities`
- `@shared` → `src/shared`

## Responsive Design

Uses mobile-first approach with breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Next Steps

1. Add placeholder images to `public/images/projects/` and `public/images/clients/`
2. Update social media links in `src/shared/lib/data.ts`
3. Add CV file to `public/` for download
4. Connect contact form or email service
5. Deploy to hosting platform
