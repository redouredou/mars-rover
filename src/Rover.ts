import { Direction } from './Direction';
export class Rover {
    
    private _direction = new Direction();
    
    execute(command: string): string{
        
        command.split('').forEach(value => {
            if(value === 'M'){
                return '0:1:' + this._direction.getValue();
            }
            if(value === 'R'){
                this._direction.rotateRight()
            }
            if(value === 'L')
                this._direction.rotateLeft()
            }
        )

        return '0:0:'+ this._direction.getValue();
    }
}


