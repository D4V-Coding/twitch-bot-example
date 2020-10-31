import * as tmi from 'tmi.js';
import { globals } from './globals.model.js';

export function getTwitchClient(): tmi.Client {
    if(globals.twitchClient === null) {
        globals.twitchClient = tmi.client(globals);
    }

    return globals.twitchClient;
}