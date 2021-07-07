const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Large Text",
            state: "Small Text",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "NAME",
                large_text: "Large Text",
                small_image: "NAME",
                small_text: "Small Text"
            },
            buttons: [
                { label: "Button 1", url: "URL 1" },
                { label: "Button 2", url: "URL 2" }
            ]
        }
    });
});

client.login({
    clientId: 'ID',
    clientSecret: 'KEY'
});