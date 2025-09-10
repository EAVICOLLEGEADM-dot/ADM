# 🚀 GitHub Update Instructions

## Quick Update Method

### Option 1: Automated Script (Easiest)
1. **Double-click** `deploy.bat` in your project folder
2. **Enter commit message** when prompted (or press Enter for default)
3. **Add repository URL** if this is your first time
4. **Wait for completion** - the script will handle everything

### Option 2: Manual Git Commands
1. **Open Command Prompt** in your project folder
2. **Run these commands:**
   ```bash
   git add .
   git commit -m "Update EAVI system with mobile PDF improvements"
   git push origin main
   ```

## First Time Setup (If you haven't uploaded to GitHub yet)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click **"New Repository"**
3. Name it: `eavi-admission-system`
4. Make it **Public**
5. **Don't** initialize with README (we already have one)
6. Click **"Create Repository"**

### Step 2: Connect and Upload
1. **Copy your repository URL** (looks like: `https://github.com/yourusername/eavi-admission-system.git`)
2. **Run the deploy.bat script** OR use these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: EAVI Admission System v2.0"
   git branch -M main
   git remote add origin https://github.com/yourusername/eavi-admission-system.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select "Deploy from a branch"
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**
7. Your site will be live at: `https://yourusername.github.io/eavi-admission-system`

## What's New in This Update

### 🎯 Major Improvements
- ✅ **Fixed mobile PDF issues** - Much better formatting on mobile devices
- ✅ **Simplified login** - No passwords needed, just select campus
- ✅ **White PDF backgrounds** - Fixed dark background problems
- ✅ **Better mobile layout** - Improved responsive design
- ✅ **Added favicon** - EAVI logo in browser tab

### 🔧 Technical Updates
- Enhanced CSS for mobile PDF generation
- Improved JavaScript PDF functions
- Better cross-device compatibility
- Optimized font rendering and sizing

## Troubleshooting

### If you get "remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/yourusername/eavi-admission-system.git
```

### If you get authentication errors:
1. Make sure you're logged into GitHub
2. Use GitHub Desktop app instead of command line
3. Or use personal access token instead of password

### If GitHub Pages isn't working:
1. Check that `index.html` is in the root folder ✅
2. Make sure Pages is set to deploy from main branch ✅
3. Wait 5-10 minutes for changes to appear
4. Clear browser cache and try again

## Support
- Check the [README.md](README.md) for detailed documentation
- View [CHANGELOG.md](CHANGELOG.md) for all updates
- Create GitHub issues for bugs or questions

---
**Your EAVI system is now ready for GitHub! 🎉**