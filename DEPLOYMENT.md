# Deployment Guide

This guide provides multiple options for deploying the Ignite Company Showcase application.

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   Follow the prompts and your app will be deployed automatically.

3. **Or connect your GitHub repository:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite app and deploy

### Option 2: Netlify
1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

3. **Or drag and drop:**
   - Build the app: `npm run build`
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deploy area

### Option 3: GitHub Pages
1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### Option 4: Firebase Hosting
1. **Install Firebase CLI:**
   ```bash
   npm i -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## Manual Build & Deploy

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **The built files will be in the `dist` folder**

3. **Upload the contents of `dist` folder to your hosting provider**

## Build Output

The build process creates a `dist` folder containing:
- `index.html` - Main HTML file
- `assets/` - CSS, JS, and image files
- All files are optimized for production

## Domain Configuration

For custom domains:
1. **Vercel:** Add domain in project settings
2. **Netlify:** Add domain in site settings
3. **GitHub Pages:** Add CNAME file in repository root

## Continuous Deployment

The repository includes GitHub Actions workflow for automatic deployment to GitHub Pages when pushing to the main branch.

## Troubleshooting

### Common Issues:
1. **404 errors on refresh:** Make sure your hosting provider supports SPA routing (all routes redirect to index.html)
2. **Assets not loading:** Check that the base path is correct in vite.config.ts
3. **Build failures:** Ensure all dependencies are installed with `npm ci`

### Build Commands:
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Performance Tips

1. **Enable gzip compression** on your hosting provider
2. **Set up CDN** for faster global delivery
3. **Configure caching headers** for static assets
4. **Use HTTPS** for security and SEO

## Environment Variables

If you need environment variables:
1. Create `.env` file for local development
2. Set environment variables in your hosting platform
3. Use `import.meta.env.VITE_` prefix for client-side variables

## Mobile Optimization

The app is already optimized for mobile devices with:
- Responsive design
- Touch-friendly navigation
- Fast loading times
- Progressive Web App features

## SEO Optimization

The app includes:
- Meta tags for social sharing
- Open Graph tags
- Proper heading structure
- Semantic HTML

## Analytics

To add analytics:
1. **Google Analytics:** Add tracking code to index.html
2. **Vercel Analytics:** Built-in with Vercel deployment
3. **Custom analytics:** Add to your preferred service

## Custom Configuration

### Vite Configuration
The `vite.config.ts` file is already optimized for production builds.

### Build Optimization
- Code splitting enabled
- Tree shaking for smaller bundles
- Asset optimization
- CSS purging

## Support

For deployment issues:
1. Check the build logs
2. Verify all dependencies are installed
3. Ensure Node.js version compatibility
4. Check hosting provider documentation

## Success!

Once deployed, your Ignite Company Showcase will be live and accessible worldwide!
