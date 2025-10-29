# ------------------------------------------------------------
# 🚀 GitHub Pages Auto Update Script
# ------------------------------------------------------------

# 1️⃣ Go to your local project folder
Set-Location "E:\Portfolio"

# Show which files were changed
Write-Host "`n🧾 Files changed since last commit:" -ForegroundColor Cyan
git status -s

# 2️⃣ Stage all changed files
git add .

# 3️⃣ Create a timestamped commit
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Auto update on $timestamp"

# 4️⃣ Push updates to GitHub Pages
git push origin main

# 5️⃣ Open your published portfolio
Start-Process "https://najeebullahr.github.io/"

Write-Host "`n✅ Update complete! Check your GitHub.io page." -ForegroundColor Green
