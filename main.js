const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false, // sécurise en désactivant Node.js dans la page web
      contextIsolation: true,
    },
    icon: path.join(__dirname, '22.png') // icône de la fenêtre (optionnel)
  });

  win.loadFile('index.html'); // remplace par le nom de ton fichier HTML principal
  // win.webContents.openDevTools(); // décommente pour ouvrir les outils dev à chaque lancement
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // Sur macOS, recrée la fenêtre si nécessaire
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  // Quitter l'app sauf sur macOS
  if (process.platform !== 'darwin') app.quit();
});
