const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Habilita o uso do Node.js no lado do cliente (opcional, dependendo das suas necessidades)
    }
  });

  win.loadFile('index.html'); // Carrega o arquivo HTML do aplicativo

  // Abre as ferramentas de desenvolvimento do Electron (opcional)
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);


const a =(i,j)=>{
  return i+j
}