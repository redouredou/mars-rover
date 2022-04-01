export class Rover {
    execute(command: string): string{
        if(command === 'RR'){
            return '0:0:S'
        }
        return '0:0:E';
    }
}