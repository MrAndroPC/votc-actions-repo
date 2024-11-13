# **Attention!!!**
1. Disable these standart actions: **aiGetsWounded** (replaced by aiInjured) and **intercourse** (no more recurring intercourses in one convo with intercourseA)
2. Choose only one **allianceDiplomatic** action. New action has a new formula* of action avaliability, based on exact values of religion, cultural, personal and conversation opinions and personal diplomacy.

\* Formula: `score = ((cultural_op+religion_op+personal_diplo+100) / 100) * (75 + (opinion / 2) + (convo_op * 2))`

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

## Issues and Logs

If you encounter any issues, logs can help diagnose the problem. Here’s where to find them:

- **Primary Logs**: The main `debug.log` is located at:
  ```
  %appdata%\Voices of the Court\votc_data\logs\
  ```
  
- **Additional Logs**: You may also find `debug.log` and `error.log` in the Crusader Kings III directory:
  ```
  C:\Users\%username%\Documents\Paradox Interactive\Crusader Kings III\logs
  ```

### Quick Access
To quickly open these directories:
1. Press `Win + R`.
2. Paste the directory path.
3. Press `Enter`.
