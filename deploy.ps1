# ==============================
# 🚀 GitHub Pages One-Click Deploy Script
# Author: Najeeb Ullah
# ==============================

Write-Host "Starting deployment for Portfolio site..." -ForegroundColor Cyan

# Step 1 — Navigate to current script directory
Set-Location -Path $PSScriptRoot

# Step 2 — Add all changes
git add .

# Step 3 — Commit with timestamp
$commitMessage = "Auto update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git commit -m "$commitMessage"

# Step 4 — Push to main branch
git push -u origin main

Write-Host "`n✅ Deployment Complete!" -ForegroundColor Green
Write-Host "🌐 Visit your live site: https://najeebullahr.github.io"
