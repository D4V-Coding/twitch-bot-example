import * as tmi from 'tmi.js';
import { globals } from './globals.model.js';
import { processTwitchChatMessage } from './message-inbox.model.js';

globals.twitchClient = tmi.client(globals);
globals.twitchClient.on('message', processTwitchChatMessage);
globals.twitchClient.on('connected', onConnectedHandler);
globals.twitchClient.connect();

function onConnectedHandler (addr: any, port: any) {
    console.log(`* Connected to ${addr}:${port}`);
} 