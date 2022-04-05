import { Command } from "./Command";

export default class RotationRightCommand extends Command {

    execute(): void {
        this.rover.turnRight();
    }

}