import { Command } from "./command/Command";

export class MarsRoverInvoker {

    executeOperation(command: Command){
        command.execute();
    }
}