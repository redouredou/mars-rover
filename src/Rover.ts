import {Direction, EDirection}  from "./Direction";
import { Coordinates } from './Coordinates';
import { Grid } from "./Grid";


export class Rover {
    
    private direction = new Direction();
    private coordinate = new Coordinates(0,0);
    private grid: Grid;

    constructor(grid: Grid){
        this.grid = grid;
    }

    execute(command: string): string{

        let meetObstacle = false;
        command.split('').forEach(value => {
            if(value === 'M'){
                const currentCoordinates = this.coordinate;
                this.coordinate = this.grid.coordinateTo(this.coordinate, this.direction.getValue());
                currentCoordinates.isEqual(this.coordinate) ? meetObstacle = true: meetObstacle;
            }
            if(value === 'R'){
                this.rotateRight();
            }
            if(value === 'L')
                this.rotateLeft();
            }
        )

        return  (meetObstacle? 'O:' : '')+this.coordinate.x + ':' + this.coordinate.y +':'+this.direction.getValue();
    }

    rotateRight(){
        this.direction.right();
    }

    rotateLeft(){
        this.direction.left();
    }
}



