import { Coordinates } from "./Coordinates";
import { EDirection } from "./state/Direction";

export class Grid {
    private readonly MAX_WIDTH = 10;
    private readonly MAX_HEIGHT = 10;
    private readonly MIN_WIDTH = 0;
    private readonly MIN_HEIGHT = 0;

    private obstacles?: Array<Coordinates>;
    
    constructor(obstacles?: Array<Coordinates>){
        this.obstacles = obstacles;
    }

    coordinateTo(coordinate: Coordinates, direction: string){
        let x = coordinate.x;
        let y = coordinate.y;

        const currentCoordinates = coordinate;

        if(direction === EDirection.NORTH.valueOf()){
            y = (y < 9) ? y + 1 : y = this.MIN_HEIGHT; 
        }   
        if(direction === EDirection.EAST.valueOf()){
            x = (x < 9) ? x + 1 : this.MIN_WIDTH; 
        }
        if(direction === EDirection.SOUTH.valueOf()){
            y = (y > 0) ? y - 1 : y = this.MAX_HEIGHT - 1; 
        }
        if(direction === EDirection.WEST.valueOf()){
            x = (x > 0) ? x - 1 : x = this.MAX_WIDTH - 1;
        }

        let newCoordinates = new Coordinates(x,y);
        return this.nextCoordinate(newCoordinates, currentCoordinates);

    }

    private nextCoordinate(newCoordinates: Coordinates, currentCoordinates: Coordinates) {
        return this.isObstacle(newCoordinates) ? currentCoordinates : newCoordinates;
    }

    isObstacle(coordinate: Coordinates){
        return this.obstacles?.some(coordinatesElt => coordinatesElt.isEqual(coordinate));
    }
}