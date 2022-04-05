import { Command } from "./Command";

export default class RotationLeftCommand extends Command {

    execute(): void {
        this.rover.turnLeft();
    }

}