Basic Twitch Bot Example Application built with TypeScript.

Setup the Project:
- Install node (https://nodejs.org/en/)
- Type in Terminal "npm install"
- replace OAuth Token & User / Channel Name in globals.model with your data (generate token at: https://twitchapps.com/tmi/)

Build & Start Project:
- Build Bot: Type in Terminal "npm run build"
- Start Bot: Type in Terminal "npm run start"

To implement new Commands:
- In Commands folder create new file (for example my-command.model.ts)
- export const that is of type "ChatCommand"
- provide trigger(s) for command (for example '!myCommand')
- provide permitted Users / allowedForMods / allowedForSubs on command
- implement "execute" function on Command (see other commands)
- add Command to "availableCommands" Array in message-inbox.model.ts