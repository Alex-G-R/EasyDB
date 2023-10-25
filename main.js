const {app, BrowserWindow } = require('electron');

app.whenReady().then(()=>{

    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        autoHideMenuBar: true, // hide the menu bar
        webPreferences: {
            nodeIntegration: true
        }
    });


    // load a webpage
    mainWindow.loadFile('main.html');

    // Set the initial window title
    mainWindow.setTitle('EasyDB ~ Main menu');
});