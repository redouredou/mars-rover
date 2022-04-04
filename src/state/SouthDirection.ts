import { EDirection } from './Direction';
import { EastDirection } from "./EastDirection";
import { State } from "./State";
import { WestDirection } from "./WestDirection";

export class SouthDirection extends State {

    getCurrentDirection(): EDirection {
        return EDirection.SOUTH;
    }
    turnRight(): void {
        this.rover.changeState(new WestDirection(this.rover))
    }
    turnLeft(): void {
        this.rover.changeState(new EastDirection(this.rover))
    }
}