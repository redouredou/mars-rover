import { Coordinates } from './Coordinates';
import { Grid } from "./Grid";
import { State } from "./state/State";
import { NorthDirection } from "./state/NorthDirection";


export class Rover {
    
    private state : State;
    private coordinate = new Coordinates(0,0);
    private grid: Grid;
    private isMeetObstacle: boolean;

    constructor(grid: Grid){
        this.state = new NorthDirection(this);
        this.grid = grid;
        this.isMeetObstacle = false;
    }

    changeState(state: State){
        this.state = state;
    }

    get getCoordinates(){
        return this.coordinate;
    }

    get getCurrentDirection(){
        return this.state.getCurrentDirection();
    }

    get IsMeetObstacle(){
        return this.isMeetObstacle;
    }

    turnRight(){
        this.state.turnRight();
    }

    turnLeft(){
        this.state.turnLeft();
    }

    moveAhead(){
        const currentCoordinates = this.coordinate;
        this.coordinate = this.grid.coordinateTo(this.coordinate, this.state.getCurrentDirection());
        this.isMeetObstacle = currentCoordinates.isEqual(this.coordinate);
    }

}



