import { Rover } from "../Rover";

export abstract class Command {
    protected rover: Rover;

    constructor(rover: Rover){
        this.rover = rover;
    }
    execute(): void{}
}