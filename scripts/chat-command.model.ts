import { ChatCommandResult } from "./chat-command-result.model.js";

export interface ChatCommand {
    readonly trigger: string | string[];
    readonly permittedUsers?: string[];
    readonly allowedForMods?: boolean;
    readonly allowedForSubscriber?: boolean;

    execute: (params: string | string[] | null, sender?: string) => ChatCommandResult
}