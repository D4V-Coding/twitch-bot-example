import * as tmi from 'tmi.js';
import { ChatCommand } from './chat-command.model.js';
import { greetingCommand } from './commands/greetings-command.model.js';
import { shoutoutCommand } from './commands/shoutout-command.model.js';

const availableCommands: ChatCommand[] = [shoutoutCommand, greetingCommand];

export function processTwitchChatMessage (channel: string, sender: tmi.Userstate, message: string, sentByMyself: boolean) {
    if(message.indexOf('!') < 0) {
        console.log(`* message dropped: no command - message: ${message}, sender: ${sender.username}`);
        return;
    }

    console.log(`* command received: no command - message: ${message}, sender: ${sender.username}`);

    const commandsWithReceiver = message.match(/\!\w+(\s*\@[\w|\d]*)*/g);
    if(!commandsWithReceiver || commandsWithReceiver.length <= 0) {
        console.log(`* command dropped: no command - message: ${message}, sender: ${sender.username}`);
        return;
    }

    const firstCommandWithReceivers = commandsWithReceiver[0].trim().toLowerCase();
    const matchingAvailableCommand = availableCommands.find(x => 
        (!Array.isArray(x.trigger) && firstCommandWithReceivers.indexOf(x.trigger.toLowerCase()) === 0) ||
        (Array.isArray(x.trigger) && x.trigger.some(trigger => firstCommandWithReceivers.indexOf(trigger.toLowerCase()) === 0))
        );

    if(!matchingAvailableCommand) {
        console.log('* dropping command: no handler found');
        return;
    }

    if(!matchingAvailableCommand.permittedUsers?.some(x => x.toLowerCase() === sender.username?.toLowerCase()) &&
    !(sender.mod && matchingAvailableCommand.allowedForMods) && !(sender.subscriber && matchingAvailableCommand.allowedForSubscriber)) {
        console.log(`* dropping command: no permission ${sender.username}: ${message}`);
        return;
    }

    const recipients = firstCommandWithReceivers.match(/\@[\w|\d]*/g)
    matchingAvailableCommand.execute(recipients, sender.username);
}