import { Rover } from './Rover';

describe('RoverShould', () => {

    let rover : Rover;
    beforeEach(() => {
        rover = new Rover();
    })

    test.each([
        ['R', '0:0:E'],
        ['RR', '0:0:S'],
        ['RRR', '0:0:W'],
        ['RRRR', '0:0:N']
    ])('rotate_right', (command, position) => {
        expect(rover.execute(command)).toBe(position)
    })

    test.each([
        ['L', '0:0:W'],
        ['LL', '0:0:S'],
        ['LLL', '0:0:E'],
        ['LLLL', '0:0:N'],
    ])('rotate_left', (command, position) => {
        expect(rover.execute(command)).toBe(position)
    })

    /*test.each([
        ['M', '0:1:N'],
    ])('move_up', (command, position) => {
        expect(rover.execute(command)).toBe(position)
    })*/

})