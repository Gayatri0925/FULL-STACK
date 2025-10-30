@echo off
setlocal

:: --- Navigate to your repo ---
cd /d "C:\Users\kgaya\Desktop\MERN-STACK" || (
    echo ❌ Could not find MERN-STACK folder!
    pause
    exit /b
)

echo 🔍 Cleaning any nested .git folders...
for /f "delims=" %%i in ('dir /b /s /a:d ^| findstr "\\.git$"') do (
    if /i not "%%~fi"=="%cd%\.git" (
        echo Removing: %%~fi
        rmdir /s /q "%%~fi"
    )
)

echo 📦 Adding all files...
git add .

echo 💬 Committing changes...
git commit -m "Daily update - %date%"

echo 🚀 Pushing to GitHub...
git push origin main

echo ✅ Done! Repo updated successfully.
pause
