import MoveCommand from './command/MoveCommand';
import RotationLeftCommand from './command/RotationLeftCommand';
import RotationRightCommand from './command/RotationRightCommand';
import { Grid } from './Grid';
import { MarsRoverInvoker } from './MarsRoverInvoker';
import { Rover } from './Rover';
export class MarsRoverClient {

    private rover: Rover;

    constructor(rover: Rover){
        this.rover = rover;
    }

    executeOperation(command: string): string{

        const marsRoverInvoker = new MarsRoverInvoker();

        command.split('').forEach(value => {
            if(value === 'M'){
                marsRoverInvoker.executeOperation(new MoveCommand(this.rover))
            }
            if(value === 'R'){
                marsRoverInvoker.executeOperation(new RotationRightCommand(this.rover))
            }
            if(value === 'L')
                marsRoverInvoker.executeOperation(new RotationLeftCommand(this.rover))
            }
        )

        return  (this.rover.IsMeetObstacle? 'O:' : '')+this.rover.getCoordinates.x + ':' + this.rover.getCoordinates.y +':'+this.rover.getCurrentDirection;
    }
}