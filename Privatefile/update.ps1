# ==========================================
# Website Auto-Update + Private Backup
# Author: Najeeb Ullah
# ==========================================

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "Starting update process at $timestamp" -ForegroundColor Cyan

# ----- PUBLIC WEBSITE -----
$publicPath = "E:\Portfolio"
$publicRepo = "https://github.com/najeebullahr/najeebullahr.github.io.git"

Set-Location $publicPath
$remoteUrl = git remote get-url origin 2>$null

if ($remoteUrl -ne $publicRepo) {
    Write-Host "Public repo not linked. Setting it now..." -ForegroundColor Yellow
    git remote remove origin 2>$null
    git remote add origin $publicRepo
} else {
    Write-Host "Public repo connection verified." -ForegroundColor Green
}

git add .
git commit -m "Auto update at $timestamp"
git push origin main
Write-Host "Public site updated successfully!" -ForegroundColor Green

# ----- PRIVATE BACKUP -----
$privatePath = "E:\Portfolio\Privatefile"
$privateRepo = "https://github.com/najeebullahr/privatetools.git"

Set-Location $privatePath
$remotePrivate = git remote get-url origin 2>$null

if ($remotePrivate -ne $privateRepo) {
    Write-Host "Linking private repository..." -ForegroundColor Yellow
    git remote remove origin 2>$null
    git remote add origin $privateRepo
} else {
    Write-Host "Private repo connection verified." -ForegroundColor Green
}

git add .
git commit -m "Backup on $timestamp"
git push origin main
Write-Host "Private backup pushed successfully!" -ForegroundColor Green

# ----- FINALIZE -----
Start-Process "https://najeebullahr.github.io/"
Write-Host "Update complete! Both repos synced." -ForegroundColor Cyan

Start-Sleep -Seconds 5
exit
