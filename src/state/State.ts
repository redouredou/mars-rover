import { EDirection } from './Direction';
import { Rover } from "../Rover";


export abstract class State{
    protected rover: Rover;

    constructor(rover: Rover){
        this.rover = rover;
    }

    abstract getCurrentDirection(): EDirection
    abstract turnRight(): void;
    abstract turnLeft(): void
}