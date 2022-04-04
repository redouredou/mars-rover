import { EDirection } from './Direction';
import { NorthDirection } from "./NorthDirection";
import { SouthDirection } from "./SouthDirection";
import { State } from "./State";

export class WestDirection extends State {

    getCurrentDirection(): EDirection {
        return EDirection.WEST;
    }
    turnRight(): void {
        this.rover.changeState(new NorthDirection(this.rover))
    }
    turnLeft(): void {
        this.rover.changeState(new SouthDirection(this.rover))
    }
}