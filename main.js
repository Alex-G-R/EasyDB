
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let createDatabaseWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js') // Path to preload script
        }
    });

    mainWindow.loadFile('main.html');
    mainWindow.setTitle('EasyDB ~ Main menu');

    ipcMain.on('hide-window', () => {
        if (mainWindow) {
            mainWindow.close();
        }

        mainWindow.on('closed', e => {
            mainWindow = null;
        });
    });

    ipcMain.on('create-database-window-open', () => {
        if (true) {
            createDatabaseWindow = new BrowserWindow({
                width: 1600,
                height: 900,
                autoHideMenuBar: true,
                webPreferences: {
                    nodeIntegration: true,
                    preload: path.join(__dirname, 'preload.js') // Path to preload script
                }
            });

            createDatabaseWindow.loadFile('./windows/createDatabase.html');
            createDatabaseWindow.setTitle('EasyDB ~ Create Database');
        }
    });

});

