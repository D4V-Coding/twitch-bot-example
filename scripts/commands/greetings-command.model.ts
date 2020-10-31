import { ChatCommand } from "../chat-command.model.js";
import { getTwitchClient } from "../get-twitch-client.model.js";
import { globals } from "../globals.model.js";

export const greetingCommand: ChatCommand = {
    trigger: ['!greeting', '!greetings'],
    allowedForMods: true,
    allowedForSubscriber: true,

    execute: (recipient: string | string[] | null) => {
        console.log();
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
            getTwitchClient().say(globals.channels[0], `Hey Greetings to: @${rec}`)
        })

        return { isSuccessfull: true }
    }
}
