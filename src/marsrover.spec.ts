import Grid from './grid/Grid';
import MarsRover from './MarsRover'


describe('Mars rover tests', () => {

    /*My first acceptance*/ 
    it('given a grid with no obstacles, input MMRMMLM gives output 2:3:N', () => {

        const grid = new Grid(10, 10);
        const marsRover = new MarsRover();

        marsRover.MarsRover(grid) ;

        const roverLastPosition = marsRover.execute('MMRMMLM');

        expect(roverLastPosition).toBe('2:3:N')

    })
})