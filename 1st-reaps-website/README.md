# Ist Reaps Global Company Website

A professional agro-export company website built with React and Tailwind CSS.

## Company Information
- **Company**: Ist Reaps Global Company Nig Ltd
- **Products**: Dried Ginger, Hibiscus Flowers, Cashew Nuts, Soya Beans, Sesame Seeds
- **Phone**: +2348166022054
- **Email**: 1streapsglobalcom@gmail.com

## Tech Stack
- React 19
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start
```

## Build for Production

```bash
yarn build
```

The build output will be in the `build` folder.

## Deploy to Netlify

### Option 1: Drag & Drop
1. Run `yarn build`
2. Drag the `build` folder to Netlify

### Option 2: Connect Git Repository
1. Push code to GitHub/GitLab
2. Connect repository in Netlify
3. Build settings:
   - **Build command**: `yarn build`
   - **Publish directory**: `build`

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

## Environment Variables
No environment variables required for this static site.
