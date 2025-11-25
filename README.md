# Smart Resume Builder with AI Suggestions — Final Ready-to-Run

## Overview
Minimal, ready-to-run skeleton with:
- Frontend: Vite + React + Tailwind CSS (pre-configured)
- Backend: Express with a mocked AI suggestion endpoint (no OpenAI key required)
- Root-level `npm run dev` to start both frontend and backend concurrently (Windows + VS Code terminal friendly)

## Quick Start (Windows, VS Code terminal)
1. Extract the ZIP.
2. Open a terminal in the extracted folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Wait for install to finish. The command will start both servers:
   - Frontend (Vite) — usually: http://localhost:5173
   - Backend (Express) — http://localhost:4000 (API base: http://localhost:4000/api/v1)

## Notes
- The suggestion endpoint is mocked and returns a simple suggestion line.
- To enable real OpenAI, update `server/src/services/openaiService.js` with your implementation and set `OPENAI_API_KEY` in `server/.env`.
