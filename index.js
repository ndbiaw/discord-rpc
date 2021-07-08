const RPC = require('discord-rpc');
const config = require('./config.json');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: `${config.first}`,
            state: `${config.second}`,
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: `${config.largei}`,
                large_text: `${config.larget}`,
                small_image: `${config.smalli}`,
                small_text: `${config.smallt}`
            },
            buttons: [
                { label: `${config.buttf}`, url: `${config.urlf}` },
                { label: `${config.butts}`, url: `${config.urls}` }
            ]
        }
    });
});

client.login({
    clientId: `${config.id}`,
    clientSecret: `${config.key}`
});
