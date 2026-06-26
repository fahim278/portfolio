@echo off
echo ========================================
echo   Fahim's Portfolio - Git Push Helper
echo ========================================
echo.

echo Step 1: Checking current status...
git status
echo.

echo Step 2: Adding all changes...
git add .
echo.

echo Step 3: Enter your commit message
set /p commit_msg="Commit message: "
git commit -m "%commit_msg%"
echo.

echo Step 4: Pushing to GitHub...
git push
echo.

echo ========================================
echo   Push Complete! ✅
echo ========================================
echo.
echo Your portfolio is now on GitHub!
echo Next: Deploy to Vercel/Netlify
echo See DEPLOYMENT_GUIDE.md for instructions
echo.

pause
