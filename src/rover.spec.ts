import { MarsRoverClient } from './MarsRoverClient';
import { Coordinates } from './Coordinates';
import { Grid } from './Grid';
import { Rover } from './Rover';

describe('RoverShould', () => {

    let marsRoverApi: MarsRoverClient;
    let rover : Rover;
    beforeEach(() => {
        const grid = new Grid();
        rover = new Rover(grid);
        marsRoverApi = new MarsRoverClient(rover)
       
    })

    test.each([
        ['R', '0:0:E'],
        ['RR', '0:0:S'],
        ['RRR', '0:0:W'],
        ['RRRR', '0:0:N']
    ])('rotate_right', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['L', '0:0:W'],
        ['LL', '0:0:S'],
        ['LLL', '0:0:E'],
        ['LLLL', '0:0:N'],
    ])('rotate_left', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['M', '0:1:N'],
        ['MM', '0:2:N'],
    ])('move_up_to_north', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['RM', '1:0:E'],
        ['RMMMM', '4:0:E'],
    ])('move_up_to_east', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['RRM', '0:9:S'],
    ])('move_up_to_south', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['LM', '9:0:W'],
        ['LMM', '8:0:W'],
    ])('move_up_to_west', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['MMMMMMMMMM', '0:0:N'],
    ])('wrap_from_top_to_bottom_when_moving_north', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['RMMMMMMMMMM', '0:0:E'],
    ])('wrap_from_top_to_bottom_when_moving_east', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['RRMMMM', '0:6:S'],
    ])('wrap_from_top_to_bottom_when_moving_south', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['LMM', '8:0:W'],
    ])('wrap_from_top_to_bottom_when_moving_west', (command, position) => {
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

    test.each([
        ['MMMM', 'O:0:3:N'],
        ['RMMMMMM', 'O:1:0:E'],
    ])('stop_at_obstacle', (command, position) => {
        const obstacles = new Array<Coordinates>(new Coordinates(0,4), new Coordinates(2,0));
        const grid = new Grid(obstacles);
        rover = new Rover(grid)
        marsRoverApi = new MarsRoverClient(rover);
        expect(marsRoverApi.executeOperation(command)).toBe(position)
    })

})