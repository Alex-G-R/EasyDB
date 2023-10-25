
/* Get the packages */
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

/* Declare the windows */
let mainWindow;
let createDatabaseWindow;
let editDatabaseWindow;
let fillDatabaseWindow;

/* Open the initial main menu (first open) */
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js') // Path to preload script
        },
        // icon: __dirname + '/Bluetooth.ico',
    });

    /* Load the main.html file as face and change the window name */
    mainWindow.loadFile('main.html');
    mainWindow.setTitle('EasyDB ~ Main menu');


    /* On a hide-window message, close and null out the mainWindow */
    ipcMain.on('hide-window', () => {
        /* Close the window */
        if (mainWindow) {
            mainWindow.close();
        }

        /* Null it out to avoid later errors */
        mainWindow.on('closed', e => {
            mainWindow = null;
        });
    });


    /* On a create-database-window-open message, create and open the createDatabaseWindow */
    ipcMain.on('create-database-window-open', () => {
        if (true) {
            /* Create the window */
            createDatabaseWindow = new BrowserWindow({
                width: 1600,
                height: 900,
                autoHideMenuBar: true,
                webPreferences: {
                    nodeIntegration: true,
                    preload: path.join(__dirname, 'preload.js') // Path to preload script
                }
            });
            /* Load the createDatabase.html file as a face */
            createDatabaseWindow.loadFile('./windows/createDatabase.html');
            /* Change the window name */
            createDatabaseWindow.setTitle('EasyDB ~ Creating Database');
        }
    });

     /* On a edit-database-window-open message, create and open the editDatabaseWindow */
    ipcMain.on('edit-database-window-open', () => {
        if (true) {
            /* Create the window */
            editDatabaseWindow = new BrowserWindow({
                width: 1600,
                height: 900,
                autoHideMenuBar: true,
                webPreferences: {
                    nodeIntegration: true,
                    preload: path.join(__dirname, 'preload.js') // Path to preload script
                }
            });
            /* Load the editDatabase.html file as a face */
            editDatabaseWindow.loadFile('./windows/editDatabase.html');
            /* Change the window name */
            editDatabaseWindow.setTitle('EasyDB ~ Editing Database');
        }
    });

    /* On a fill-database-window-open message, create and open the fillDatabaseWindow */
    ipcMain.on('fill-database-window-open', () => {
        if (true) {
            /* Create the window */
            fillDatabaseWindow = new BrowserWindow({
                width: 1600,
                height: 900,
                autoHideMenuBar: true,
                webPreferences: {
                    nodeIntegration: true,
                    preload: path.join(__dirname, 'preload.js') // Path to preload script
                }
            });
            /* Load the fillDatabase.html file as a face */
            fillDatabaseWindow.loadFile('./windows/fillDatabase.html');
            /* Change the window name */
            fillDatabaseWindow.setTitle('EasyDB ~ Filling in the Database');
        }
    });

    /* On a back-to-main-menu message, close the current window and null it out to avoid later errors, open the mainWindow */
    ipcMain.on('back-to-main-menu', () => {
        if (createDatabaseWindow) { // If createDatabaseWindow is open

            /* Close the window */
            createDatabaseWindow.close();

            /* Null it out */
            createDatabaseWindow.on('closed', () => {
                createDatabaseWindow = null;
            });
            openTheMainMenu()
        } 
        if(fillDatabaseWindow){ // If fillDatabaseWindow is open

            /* Close the window */
            fillDatabaseWindow.close();

            /* Null it out */
            fillDatabaseWindow.on('closed', () => {
                fillDatabaseWindow = null;
            });
            openTheMainMenu()
        } 
        if(editDatabaseWindow){ // If editDatabaseWindow is open

            /* Close the window */
            editDatabaseWindow.close();

            /* Null it out */
            editDatabaseWindow.on('closed', () => {
                editDatabaseWindow = null;
            });
            openTheMainMenu()
        }
    });


    /* Function that when called will open a new main menu window (mainWindow) */
    function openTheMainMenu() {
        if (mainWindow === null) {
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
            mainWindow.setTitle('EasyDB ~ Main Menu');
      
            // Store a reference to the new window object
            mainWindow.on('closed', () => {
                mainWindow = null;
            });
        }
    }

});

