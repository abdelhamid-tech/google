const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // When a link tries to open a new window, load it in the same window instead
  win.webContents.setWindowOpenHandler(({ url }) => {
    // Load the requested URL in the same window
    win.webContents.loadURL(url);
    return { action: 'deny' };
  });

  // Load Google (you can change this URL if you want a specific doodle/game page)
  win.loadURL('https://google.com');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
