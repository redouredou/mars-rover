import Grid from "./Grid"



describe('Grid tests', () => {

    /*My first acceptance*/ 
    it('should throw IllegalArgument when grid x length is negative', () => {
        expect(() => new Grid(-10, 20)).toThrow('you cannot have an x length negative');
    })
})