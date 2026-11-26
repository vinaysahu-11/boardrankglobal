# BOARDRANK GLOBAL

React 18 + TypeScript + Vite migration of the existing BOARDRANK GLOBAL website, with a separate Express + TypeScript backend.

## Structure

- `frontend/` - React frontend and preserved original styles, scripts, and assets
- `backend/` - Express REST API
- `backup/` - original source is preserved outside this project at `../BRG_BACKUP_20261125`

## Development

```powershell
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:4000/api/health`

## Production build

```powershell
npm run build
```
