import { EDirection } from './Direction';
import { EastDirection } from './EastDirection';
import { State } from "./State";
import { WestDirection } from './WestDirection';

export class NorthDirection extends State {

    getCurrentDirection(): EDirection {
        return EDirection.NORTH;
    }
    turnRight(): void {
        this.rover.changeState(new EastDirection(this.rover))
    }
    turnLeft(): void {
        this.rover.changeState(new WestDirection(this.rover))
    }
    

}