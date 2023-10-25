const {app, BrowserWindow } = require('electron');

app.whenReady().then(()=>{

    const mainWindow = new BrowserWindow({
        width: 1600,
        height: 1000,
        webPreferences: {
            nodeIntegration: true
        }
    });


    // load a webpage
    mainWindow.loadFile('main.html');

    // Set the initial window title
    mainWindow.setTitle('EasyDB');
});