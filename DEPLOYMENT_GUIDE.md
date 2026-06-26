# 🚀 Deployment Guide - Fahim's Portfolio

## 📋 Prerequisites
- Git installed on your computer
- GitHub account
- Node.js installed

---

## 🔐 Step 1: Prepare for GitHub Push

### Check .gitignore (Already Done ✅)
Your `.env` file is already in `.gitignore`, so your EmailJS credentials are safe!

---

## 📤 Step 2: Push to GitHub

### Option A: If you DON'T have a GitHub repository yet

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `portfolio` (or any name you like)
   - Description: "My 3D Developer Portfolio"
   - Keep it **Public** (for free hosting)
   - **DON'T** initialize with README (we already have files)
   - Click "Create repository"

2. **Push your code:**

Open terminal/command prompt in your project folder and run:

```bash
cd E:\project_3D_developer_portfolio\project_3D_developer_portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Fahim's 3D Portfolio"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: If you ALREADY have a GitHub repository

```bash
cd E:\project_3D_developer_portfolio\project_3D_developer_portfolio

git add .
git commit -m "Update portfolio with personal info"
git push
```

---

## 🌐 Step 3: Deploy Your Portfolio

You have **3 FREE hosting options**:

### 🟢 Option 1: Vercel (RECOMMENDED - Easiest)

**Pros:** Free, automatic deployments, fast, custom domain support

1. Go to https://vercel.com
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import your portfolio repository
5. **Configure Environment Variables:**
   - Click "Environment Variables"
   - Add these 3 variables:
     ```
     VITE_APP_EMAILJS_SERVICE_ID = service_jplx3sy
     VITE_APP_EMAILJS_TEMPLATE_ID = template_mcq15f8
     VITE_APP_EMAILJS_PUBLIC_KEY = -_oYHZ8t2hsolVl6X
     ```
6. Click "Deploy"
7. Wait 2-3 minutes
8. Your site will be live at: `https://your-project-name.vercel.app`

**Auto-deployment:** Every time you push to GitHub, Vercel auto-deploys! 🎉

---

### 🔵 Option 2: Netlify

**Pros:** Free, easy, custom domain support

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Add Environment Variables:**
   - Go to Site settings → Environment variables
   - Add the same 3 variables as Vercel
7. Click "Deploy site"
8. Live at: `https://your-site-name.netlify.app`

---

### 🟣 Option 3: GitHub Pages

**Pros:** Free hosting directly from GitHub

1. **Install gh-pages package:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json** - Add these lines:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy:**
```bash
npm run deploy
```

4. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

5. Live at: `https://YOUR_USERNAME.github.io/portfolio`

**Note:** You need to set environment variables in GitHub:
- Repository Settings → Secrets and variables → Actions
- Add your EmailJS credentials

---

## 🎯 Recommended Deployment Flow

```
LOCAL → GITHUB → VERCEL
```

1. ✅ Code on your computer
2. ✅ Push to GitHub (version control + backup)
3. ✅ Auto-deploy to Vercel (live website)

---

## 🔄 Future Updates

After initial deployment, to update your portfolio:

```bash
# Make your changes
git add .
git commit -m "Update projects/experience/etc"
git push
```

Vercel/Netlify will automatically redeploy! 🚀

---

## 🌍 Custom Domain (Optional)

After deployment, you can add your own domain:

1. Buy a domain (Namecheap, GoDaddy, Google Domains)
2. In Vercel/Netlify dashboard:
   - Go to Domains
   - Add your custom domain
   - Update your domain's DNS settings (they'll guide you)

---

## 📧 Environment Variables Summary

**Never push these to GitHub!**

```
VITE_APP_EMAILJS_SERVICE_ID=service_jplx3sy
VITE_APP_EMAILJS_TEMPLATE_ID=template_mcq15f8
VITE_APP_EMAILJS_PUBLIC_KEY=-_oYHZ8t2hsolVl6X
```

Add them in:
- ✅ Local: `.env` file (already done)
- ✅ Vercel: Project Settings → Environment Variables
- ✅ Netlify: Site Settings → Environment Variables
- ✅ GitHub Pages: Repository Settings → Secrets

---

## 🐛 Troubleshooting

### Contact form not working after deployment?
→ Check if you added environment variables in hosting platform

### 3D models not loading?
→ Check browser console for errors
→ Ensure assets are in `/public` folder

### Build fails?
→ Run `npm run build` locally first to test
→ Check for any errors in terminal

---

## ✅ Quick Checklist

- [ ] Push code to GitHub
- [ ] Choose hosting platform (Vercel recommended)
- [ ] Add environment variables on hosting platform
- [ ] Deploy
- [ ] Test contact form
- [ ] Share your portfolio link!

---

**Your Portfolio Will Be Live! 🎉**

Share it on:
- LinkedIn
- GitHub Profile README
- Resume
- Job Applications

---

**Created:** January 2025  
**Owner:** Fahim Ullah  
**Email:** fahimwazir671@gmail.com
