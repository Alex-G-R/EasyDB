// preload.js

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => {
        // Whitelist channels and data for security
        const validChannels = ['hide-window', 'create-database-window-open']; // Add any other allowed channels
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    // Add other methods you want to expose
});
