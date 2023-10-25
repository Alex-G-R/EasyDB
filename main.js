
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let createDatabaseWindow;
let editDatabaseWindow;
let fillDatabaseWindow;

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
            createDatabaseWindow.setTitle('EasyDB ~ Creating Database');
        }
    });

    ipcMain.on('edit-database-window-open', () => {
        if (true) {
            editDatabaseWindow = new BrowserWindow({
                width: 1600,
                height: 900,
                autoHideMenuBar: true,
                webPreferences: {
                    nodeIntegration: true,
                    preload: path.join(__dirname, 'preload.js') // Path to preload script
                }
            });

            editDatabaseWindow.loadFile('./windows/editDatabase.html');
            editDatabaseWindow.setTitle('EasyDB ~ Editing Database');
        }
    });

    ipcMain.on('fill-database-window-open', () => {
        if (true) {
            fillDatabaseWindow = new BrowserWindow({
                width: 1600,
                height: 900,
                autoHideMenuBar: true,
                webPreferences: {
                    nodeIntegration: true,
                    preload: path.join(__dirname, 'preload.js') // Path to preload script
                }
            });

            fillDatabaseWindow.loadFile('./windows/fillDatabase.html');
            fillDatabaseWindow.setTitle('EasyDB ~ Filling in the Database');
        }
    });

});

