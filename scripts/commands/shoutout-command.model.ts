import { ChatCommand } from "../chat-command.model.js";
import { getTwitchClient } from "../get-twitch-client.model.js";
import { globals } from "../globals.model.js";

export const shoutoutCommand: ChatCommand = {
    trigger: ['!so', '!shoutout'],
    permittedUsers: ['D4V_Entertainment'],
    allowedForMods: true,

    execute: (recipient: string | string[] | null) => {
        console.log(`so incoming`);

        if(!recipient || recipient.length <= 0) {
            return { isSuccessfull: false, error: 'no recipient'};
        }

        let normalizedRecipients: string[] = [];
        if(Array.isArray(recipient)) {
            normalizedRecipients = recipient.map(x => x.replace('@', ''))
        } else {
            normalizedRecipients = [recipient.replace('@', '')];
        }

        normalizedRecipients.forEach(rec => {
            getTwitchClient().say(globals.channels[0], `Check the channel of @${rec}`)
        })

        return { isSuccessfull: true }
    }
}