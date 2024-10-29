## Quick Installation Guide

1. Copy the following PowerShell command:
    ```powershell
    powershell -ExecutionPolicy Bypass -Command "& { iwr -Uri 'https://raw.githubusercontent.com/MrAndroPC/votc-actions-repo/refs/heads/main/install.ps1' -OutFile $env:TEMP\install.ps1; & $env:TEMP\install.ps1 }"
    ```

2. Press `Win + R` to open the Run dialog.

3. Paste the copied command into the dialog box.

4. Press `Enter` to execute the installation.


## Manual Installation Guide

1. **Download** the ZIP file of this repository.

2. **Extract** the contents of the ZIP file.

3. **Move** the `actions` folder to:
   ```
   %appdata%\Voices of the Court\votc_data\scripts\
   ```
