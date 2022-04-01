import { Rover } from './Rover';

describe('RoverShould', () => {

    let rover : Rover;
    beforeEach(() => {
        rover = new Rover();
    })

    test.each([
        ['R', '0:0:E'],
        ['RR', '0:0:S']
    ])('rotate_right', (command, position) => {
        expect(rover.execute(command)).toBe(position)
    })

})