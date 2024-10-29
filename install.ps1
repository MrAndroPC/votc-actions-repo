# GitHub repository details
$repoOwner = "MrAndroPC"
$repoName = "votc-actions-repo"
$folderPath = "actions"
$destinationPath = "$env:APPDATA\Voices of the Court\votc_data\scripts\actions\custom"

# Ensure the destination directory exists
New-Item -ItemType Directory -Path $destinationPath -Force | Out-Null

# Fetch file list from GitHub API
$url = "https://api.github.com/repos/$repoOwner/$repoName/contents/$folderPath"
$files = Invoke-RestMethod -Uri $url -Headers @{ "User-Agent" = "PowerShell" }

# Download each JavaScript file in the folder
foreach ($file in $files) {
    if ($file.type -eq "file" -and $file.name -match "\.js$") {
        $downloadUrl = $file.download_url
        $destinationFile = Join-Path -Path $destinationPath -ChildPath $file.name
        Invoke-WebRequest -Uri $downloadUrl -OutFile $destinationFile
        Write-Output "Downloaded $file.name to $destinationPath"
    }
}
