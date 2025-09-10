@echo off
echo ================================
echo EAVI System - GitHub Deployment
echo ================================
echo.

echo Checking if git is initialized...
if not exist ".git" (
    echo Initializing git repository...
    git init
    echo.
)

echo Adding all files to git...
git add .
echo.

echo Committing changes...
set /p commit_message=Enter commit message (or press Enter for default): 
if "%commit_message%"=="" set commit_message=Update EAVI system with mobile PDF improvements

git commit -m "%commit_message%"
echo.

echo Checking if remote origin exists...
git remote -v | findstr origin >nul
if errorlevel 1 (
    echo.
    echo No remote repository found!
    echo Please add your GitHub repository URL:
    echo Example: git remote add origin https://github.com/yourusername/eavi-admission-system.git
    echo.
    set /p repo_url=Enter your GitHub repository URL: 
    git remote add origin %repo_url%
    echo Remote repository added.
    echo.
)

echo Setting main branch...
git branch -M main
echo.

echo Pushing to GitHub...
git push -u origin main
echo.

echo ================================
echo Deployment completed!
echo ================================
echo.
echo Your EAVI system has been updated on GitHub.
echo If you have GitHub Pages enabled, your site will be available at:
echo https://yourusername.github.io/repository-name
echo.
pause