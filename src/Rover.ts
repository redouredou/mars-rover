import { Coordinates } from './Coordinates';
import { Grid } from "./Grid";
import { State } from "./state/State";
import { NorthDirection } from "./state/NorthDirection";


export class Rover {
    
    private state : State;
    private coordinate = new Coordinates(0,0);
    private grid: Grid;

    constructor(grid: Grid){
        this.state = new NorthDirection(this);
        this.grid = grid;
    }

    changeState(state: State){
        this.state = state;
    }

    turnRight(){
        this.state.turnRight();
    }

    turnLeft(){
        this.state.turnLeft();
    }

    moveAhead() : boolean{
        const currentCoordinates = this.coordinate;
        this.coordinate = this.grid.coordinateTo(this.coordinate, this.state.getCurrentDirection());
        return currentCoordinates.isEqual(this.coordinate);
    }

    get getCoordinates(){
        return this.coordinate;
    }

    get getCurrentDirection(){
        return this.state.getCurrentDirection();
    }
}



