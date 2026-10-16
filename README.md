# Google Wrapper (Electron)

This small Electron app opens https://google.com inside a desktop window and forces any links that would open a new tab/window to load in the same application window instead (pas d'ouverture dans un nouvel onglet — même fenêtre).

Instructions:

1. Install dependencies:

   npm install

2. Run the app:

   npm start

Notes:
- The app loads https://google.com by default. If a specific Google Doodle or game page exists, replace the URL in main.js's win.loadURL(...) with that exact URL.
- This app prevents new windows from opening and loads clicked links in the same window.

---

Petit guide en français:

- Lancez `npm install` puis `npm start`.
- L'application ouvrira Google dans la même fenêtre de l'application — pas d'onglet externe.
