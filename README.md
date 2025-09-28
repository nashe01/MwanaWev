# MwanaWev

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

![Status](https://img.shields.io/badge/Status-Production_Ready-22C55E?style=for-the-badge&logo=check-circle&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-FF6B6B?style=for-the-badge&logo=shield&logoColor=white)
![Build](https://img.shields.io/badge/Build-Passing-22C55E?style=for-the-badge&logo=github-actions&logoColor=white)
![Deployment](https://img.shields.io/badge/Deployment-Ready-3B82F6?style=for-the-badge&logo=rocket&logoColor=white)

A modern, responsive web application showcasing multiple business segments under the MwanaWev umbrella. Built with React and TypeScript, featuring a clean, professional design with smooth animations and optimized performance.

## Overview

Company Showcase presents four distinct business segments:
- **MwanaWev** - Innovation Hub and technology incubator
- **PayWega** - Financial technology solutions for digital payments
- **Sky Giants** - Drone entertainment and aerial services
- **SaaS for MSME** - Business management software for small and medium enterprises

## Tech Stack

### Frontend Framework
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white) **React 18.3.1** - Modern React with hooks and functional components  
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript&logoColor=white) **TypeScript 5.8.3** - Type-safe development with full type coverage  
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=flat-square&logo=vite&logoColor=white) **Vite 5.4.19** - Fast build tool and development server

### UI Framework & Styling
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) **Tailwind CSS 3.4.17** - Utility-first CSS framework  
![Radix UI](https://img.shields.io/badge/Radix_UI-1.0.0-161618?style=flat-square&logo=radixui&logoColor=white) **Radix UI** - Accessible, unstyled UI components  
![Lucide](https://img.shields.io/badge/Lucide-0.462.0-000000?style=flat-square&logo=lucide&logoColor=white) **Lucide React** - Modern icon library  
![CVA](https://img.shields.io/badge/CVA-0.7.1-000000?style=flat-square&logo=classvarianceauthority&logoColor=white) **Class Variance Authority** - Component variant management  
![Tailwind Merge](https://img.shields.io/badge/Tailwind_Merge-2.6.0-000000?style=flat-square&logo=tailwindmerge&logoColor=white) **Tailwind Merge** - Utility class merging  
![Tailwind Animate](https://img.shields.io/badge/Tailwind_Animate-1.0.7-000000?style=flat-square&logo=tailwindanimate&logoColor=white) **Tailwind Animate** - Animation utilities

### Routing & State Management
![React Router](https://img.shields.io/badge/React_Router-6.30.1-CA4245?style=flat-square&logo=reactrouter&logoColor=white) **React Router DOM 6.30.1** - Client-side routing  
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.83.0-FF4154?style=flat-square&logo=tanstackquery&logoColor=white) **TanStack Query 5.83.0** - Server state management and caching

### Form Handling & Validation
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.61.1-EC5990?style=flat-square&logo=reacthookform&logoColor=white) **React Hook Form 7.61.1** - Performant form handling  
![Zod](https://img.shields.io/badge/Zod-3.25.76-3068D1?style=flat-square&logo=zod&logoColor=white) **Zod 3.25.76** - TypeScript-first schema validation  
![Hookform Resolvers](https://img.shields.io/badge/Hookform_Resolvers-3.10.0-000000?style=flat-square&logo=hookformresolvers&logoColor=white) **Hookform Resolvers** - Form validation integration

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-9.32.0-4B32C3?style=flat-square&logo=eslint&logoColor=white) **ESLint 9.32.0** - Code linting and quality assurance  
![TypeScript ESLint](https://img.shields.io/badge/TypeScript_ESLint-8.38.0-3178C6?style=flat-square&logo=typescripteslint&logoColor=white) **TypeScript ESLint** - TypeScript-specific linting rules  
![PostCSS](https://img.shields.io/badge/PostCSS-8.5.6-DD3A0A?style=flat-square&logo=postcss&logoColor=white) **PostCSS 8.5.6** - CSS processing  
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-10.4.21-DD3735?style=flat-square&logo=autoprefixer&logoColor=white) **Autoprefixer** - CSS vendor prefixing

### Build & Deployment
![Vite Build](https://img.shields.io/badge/Vite_Build-Production-646CFF?style=flat-square&logo=vite&logoColor=white) **Vite Build** - Production build optimization  
![Vercel](https://img.shields.io/badge/Vercel-Primary-000000?style=flat-square&logo=vercel&logoColor=white) **Vercel** - Primary deployment platform  
![Netlify](https://img.shields.io/badge/Netlify-Alternative-00C7B7?style=flat-square&logo=netlify&logoColor=white) **Netlify** - Alternative deployment option  
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Open_Source-181717?style=flat-square&logo=github&logoColor=white) **GitHub Pages** - Open source deployment

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Radix UI)
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Route components
│   ├── MwanaWev.tsx    # Innovation hub page
│   ├── PayWega.tsx     # FinTech solutions page
│   ├── SkyGiants.tsx   # Drone entertainment page
│   ├── SaasMsme.tsx    # Business management page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets and images
└── App.tsx             # Main application component
```

## Features

![Responsive](https://img.shields.io/badge/Responsive-Design-06B6D4?style=flat-square&logo=responsive&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_AA-22C55E?style=flat-square&logo=accessibility&logoColor=white)
![Performance](https://img.shields.io/badge/Performance-Optimized-FF6B6B?style=flat-square&logo=speedometer&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-Ready-3B82F6?style=flat-square&logo=seo&logoColor=white)

### Navigation
- Responsive header with company dropdown navigation
- Footer with quick access links
- Client-side routing with React Router
- 404 error handling with navigation

### Design System
- Consistent color schemes per company
- Responsive design for all screen sizes
- Smooth scroll animations
- Professional typography and spacing
- Accessible UI components

### Performance
- Code splitting and lazy loading
- Optimized images and assets
- Gzip compression ready
- Fast build times with Vite
- Tree shaking for smaller bundles

## Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd ignite-company-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development Server
The application runs on `http://localhost:8080` by default.

## Build Process

### Production Build
```bash
npm run build
```

The build process:
1. TypeScript compilation
2. React component optimization
3. CSS processing and purging
4. Asset optimization and compression
5. Code splitting and tree shaking

### Build Output
- **HTML**: Optimized index.html with proper meta tags
- **CSS**: Minified and purged Tailwind CSS
- **JavaScript**: Bundled and minified React application
- **Assets**: Optimized images and static files

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Push to main branch
3. GitHub Actions will automatically deploy

### Manual Deployment
1. Run `npm run build`
2. Upload `dist` folder contents to web hosting service
3. Configure server for SPA routing

## Configuration

### Environment Variables
Create `.env` file for local development:
```env
VITE_API_URL=your_api_url
VITE_APP_NAME=Ignite Company Showcase
```

### Vite Configuration
The `vite.config.ts` includes:
- React SWC plugin for fast compilation
- Path aliases for clean imports
- Development server configuration
- Build optimization settings

### Tailwind Configuration
Custom configuration in `tailwind.config.ts`:
- Company-specific color schemes
- Custom animations
- Responsive breakpoints
- Typography settings

## Browser Support

![Chrome](https://img.shields.io/badge/Chrome-90+-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-88+-FF7139?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-14+-000000?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-90+-0078D4?style=flat-square&logo=microsoftedge&logoColor=white)

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Metrics

![FCP](https://img.shields.io/badge/First_Contentful_Paint-<1.5s-22C55E?style=flat-square&logo=clock&logoColor=white)
![LCP](https://img.shields.io/badge/Largest_Contentful_Paint-<2.5s-22C55E?style=flat-square&logo=clock&logoColor=white)
![CLS](https://img.shields.io/badge/Cumulative_Layout_Shift-<0.1-22C55E?style=flat-square&logo=layout&logoColor=white)
![Bundle Size](https://img.shields.io/badge/Bundle_Size-417KB-3B82F6?style=flat-square&logo=package&logoColor=white)
![Gzipped](https://img.shields.io/badge/Gzipped-125KB-06B6D4?style=flat-square&logo=archive&logoColor=white)

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: ~417KB (gzipped: ~125KB)

## Security

- No client-side secrets or API keys
- Content Security Policy ready
- HTTPS enforcement
- XSS protection with React

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with proper TypeScript types
4. Run linting and tests
5. Submit pull request

## License

This project is proprietary software. All rights reserved.

## Support

For technical support or questions:
- Check the deployment guide in `DEPLOYMENT.md`
- Review build logs for errors
- Ensure Node.js version compatibility
- Verify all dependencies are installed

## Changelog

### Version 1.0.0
- Initial release
- Four company showcase pages
- Responsive design implementation
- Production build optimization
- Deployment configuration
