# CodeSmart - Frontend-only informational site

This repository was simplified to include only the frontend (React) informational site for CodeSmart.

## Run locally (Windows PowerShell)
1. Install dependencies:

```powershell
Set-Location 'C:\Users\sebas\Programacion\codesmart-webapp\frontend'
npm install
```

2. Start the dev server:

```powershell
npm run start
```

3. Open http://localhost:3000

## Notes
- The backend, infra and shared folders were kept but are not required for this informational site.
- All API calls were removed and replaced by static/demo data.

## To publish to GitHub
1. Initialize git (if not already):

```powershell
Set-Location 'C:\Users\sebas\Programacion\codesmart-webapp'
if (-not (Test-Path .git)) { git init }
git add .
git commit -m "Convert repo to frontend-only informational site"
```

2. Add remote and push (replace URL):

```powershell
git remote add origin <your-git-remote-url>
git branch -M main
git push -u origin main
```