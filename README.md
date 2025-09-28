# MwanaWev

A modern, responsive web application showcasing multiple business segments under the Ignite umbrella. Built with React and TypeScript, featuring a clean, professional design with smooth animations and optimized performance.

## Overview

Company Showcase presents four distinct business segments:
- **MwanaWev** - Innovation Hub and technology incubator
- **PayWega** - Financial technology solutions for digital payments
- **Sky Giants** - Drone entertainment and aerial services
- **SaaS for MSME** - Business management software for small and medium enterprises

## Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.8.3** - Type-safe development with full type coverage
- **Vite 5.4.19** - Fast build tool and development server

### UI Framework & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Modern icon library
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility class merging
- **Tailwind Animate** - Animation utilities

### Routing & State Management
- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query 5.83.0** - Server state management and caching

### Form Handling & Validation
- **React Hook Form 7.61.1** - Performant form handling
- **Zod 3.25.76** - TypeScript-first schema validation
- **Hookform Resolvers** - Form validation integration

### Development Tools
- **ESLint 9.32.0** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Build & Deployment
- **Vite Build** - Production build optimization
- **Vercel** - Primary deployment platform
- **Netlify** - Alternative deployment option
- **GitHub Pages** - Open source deployment

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

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Metrics

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
