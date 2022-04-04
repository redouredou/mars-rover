import { EDirection } from "./Direction";
import { NorthDirection } from "./NorthDirection";
import { SouthDirection } from "./SouthDirection";
import { State } from "./State";

export class EastDirection extends State {

    getCurrentDirection(): EDirection {
        return EDirection.EAST;
    }
    turnRight(): void {
        this.rover.changeState(new SouthDirection(this.rover))
    }
    turnLeft(): void {
        this.rover.changeState(new NorthDirection(this.rover))
    }


}