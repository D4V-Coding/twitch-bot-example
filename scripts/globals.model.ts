import * as tmi from 'tmi.js';

export const globals: {
    twitchClient: tmi.Client | null,
    identity: {
        username: string,
        password: string
    }, 
    channels: string[],
} = {
    twitchClient: null,
    identity: {
        username: <BOT_NAME>,
        password: <YOUR_OAUTH>,
      },
    channels: [<YOUR_CHANNEL>],
}