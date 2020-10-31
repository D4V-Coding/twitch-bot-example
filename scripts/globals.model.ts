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
        username: 'chatbot_user',
        password: 'your_oauth',
      },
    channels: ['channel'],
}