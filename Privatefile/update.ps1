# ================================================
# 🚀 Auto Update Script with Logging & Notification
# Author: Najeeb Ullah
# ================================================

# --- Settings ---
$logFile = "E:\Portfolio\update_log.txt"
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# --- Start Log ---
Add-Content $logFile "`n============================="
Add-Content $logFile "🕒 Update started at: $timestamp"
Add-Content $logFile "============================="

try {
    Write-Host "🔁 Starting auto-update process..." -ForegroundColor Cyan

    # --- Step 1: Update Public Portfolio Website ---
    Set-Location "E:\Portfolio\najeebullahr.github.io"
    Write-Host "`n🌐 Updating public portfolio website..." -ForegroundColor Green
    git add .
    git commit -m "Auto update on $timestamp"
    git push origin main
    Add-Content $logFile "✅ Public website updated successfully."

    # --- Step 2: Backup to Private Repo ---
    Set-Location "E:\Portfolio\Privatefile"
    Write-Host "`n🔒 Backing up scripts and files to private repo..." -ForegroundColor Green
    git add .
    git commit -m "Backup on $timestamp"
    git push origin main
    Add-Content $logFile "✅ Private backup completed successfully."

    # --- Step 3: Confirmation ---
    Write-Host "`n✅ All updates complete!" -ForegroundColor Yellow
    Add-Content $logFile "✅ All updates complete successfully."

    # --- Step 4: Open Website ---
    Start-Process "https://najeebullahr.github.io/"
    Add-Content $logFile "🌐 Website opened in browser."

    # --- Step 5: Send Desktop Notification ---
    Add-Type -AssemblyName System.Windows.Forms
    $notify = New-Object System.Windows.Forms.NotifyIcon
    $notify.Icon = [System.Drawing.SystemIcons]::Information
    $notify.BalloonTipTitle = "✅ Update Successful!"
    $notify.BalloonTipText  = "Your website and private backup were updated successfully."
    $notify.Visible = $true
    $notify.ShowBalloonTip(4000)
    Start-Sleep -Seconds 5
    $notify.Dispose()
}
catch {
    # --- Error Logging ---
    $errorMsg = $_.Exception.Message
    Write-Host "❌ Error: $errorMsg" -ForegroundColor Red
    Add-Content $logFile "❌ Error during update: $errorMsg"

    # --- Error Notification ---
    Add-Type -AssemblyName System.Windows.Forms
    $notify = New-Object System.Windows.Forms.NotifyIcon
    $notify.Icon = [System.Drawing.SystemIcons]::Error
    $notify.BalloonTipTitle = "⚠️ Update Failed!"
    $notify.BalloonTipText  = "An error occurred: $errorMsg"
    $notify.Visible = $true
    $notify.ShowBalloonTip(5000)
    Start-Sleep -Seconds 5
    $notify.Dispose()
}

Add-Content $logFile "🕒 Update finished at: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
Add-Content $logFile "--------------------------------------------"
