# Deploying Your Portfolio to Vercel

This document guides you through deploying your portfolio project to Vercel.

## Pre-Deployment Configuration

The project has been prepared with the following files:

1. `vercel.json` - Contains the build, installation, and routing configuration
2. `vite.config.vercel.ts` - A specialized Vite configuration for Vercel deployment

These files tell Vercel how to build and serve your application correctly.

## Deployment Steps

1. **Export your Replit project to GitHub**:
   - Click on the "Version Control" tab in Replit
   - Connect to GitHub
   - Initialize a repository or push to an existing one

2. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

3. **Import your repository**:
   - In Vercel dashboard, click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel should automatically detect it's a Vite project

4. **Configure build settings**:
   - Framework Preset: Vite
   - Build Command: `vite build` (not the default `npm run build` since that also builds the server)
   - Output Directory: `dist`
   - Install Command: `npm install`
   
   Note: The `vercel.json` file in your project already has these settings configured.

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Once complete, you'll receive a URL to your deployed site

## Important Notes

1. **Frontend Only Deployment**:
   For your portfolio, you can deploy just the frontend part since it doesn't need a backend server in production.

2. **Routing**:
   The `vercel.json` file includes rewrites to handle client-side routing.

3. **Custom Domain**:
   After deployment, you can add a custom domain in the Vercel project settings if desired.

4. **Environment Variables**:
   If your project uses environment variables, you'll need to add them in the Vercel project settings.

5. **Continuous Deployment**:
   Vercel will automatically redeploy your site whenever you push changes to your GitHub repository.