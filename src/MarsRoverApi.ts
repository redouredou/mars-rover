import { Rover } from "./Rover";

export class MarsRoverApi{

    private rover: Rover;
    
    constructor(rover: Rover){
        this.rover = rover;
    }

    execute(command: string): string{

        let isRoverMeetObstacle = false;
        command.split('').forEach(value => {
            if(value === 'M'){
                !isRoverMeetObstacle && (isRoverMeetObstacle = this.rover.moveAhead());
            }
            if(value === 'R'){
                this.rover.turnRight();
            }
            if(value === 'L')
                this.rover.turnLeft();
            }
        )

        return  (isRoverMeetObstacle? 'O:' : '')+this.rover.getCoordinates.x + ':' + this.rover.getCoordinates.y +':'+this.rover.getCurrentDirection;
    }

}