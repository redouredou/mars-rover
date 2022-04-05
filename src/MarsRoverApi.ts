/*import MoveCommand  from './command/MoveCommand';
import RotationLeftCommand  from './command/RotationLeftCommand';
import RotationRightCommand from './command/RotationRightCommand';

import { Command } from "./command/Command";
import { Rover } from "./Rover";

export class MarsRoverApi{

    private moveCommand: MoveCommand;
    private rotationLeftCommand: MoveCommand;
    private rotationRightCommand: MoveCommand;
    
    constructor(moveCommand: MoveCommand, rotationLeftCommand: RotationLeftCommand, rotationRightCommand: RotationRightCommand ){
        this.moveCommand = moveCommand;
        this.rotationLeftCommand = rotationLeftCommand;
        this.rotationRightCommand = rotationRightCommand;
    }

    sendMoveAction(){
        this.moveCommand.execute();
    }

    sendRotationLeftAction(){
        this.rotationLeftCommand.execute();
    }

    sendRotationRightAction(){
        this.rotationRightCommand.execute();
    }


    executeCommand(command: string): string{

        let isRoverMeetObstacle = false;
        command.split('').forEach(value => {
            if(value === 'M'){
            //    !isRoverMeetObstacle && (isRoverMeetObstacle = this.rover.moveAhead());
                
            }
            if(value === 'R'){
           //     this.rover.turnRight();
            }
            if(value === 'L'){
            //   this.rover.turnLeft();
            }
        )

        return  (isRoverMeetObstacle? 'O:' : '')+this.rover.getCoordinates.x + ':' + this.rover.getCoordinates.y +':'+this.rover.getCurrentDirection;
    }

}*/