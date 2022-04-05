import { Command } from "./Command";

export default class MoveCommand extends Command {

    execute(): void {
       this.rover.moveAhead();
    }

}