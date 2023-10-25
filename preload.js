// preload.js

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => {
        // Whitelist channels and data for security
        const validChannels = [ // Add any other allowed channels
            'hide-window',
            'create-database-window-open',
            'edit-database-window-open',
            'fill-database-window-open' // don't forget a coma
        ]; 
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    // Add other methods you want to expose
});
