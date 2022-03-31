import Grid from "./Grid"

describe('Grid tests', () => {

    it('should throw IllegalArgument when grid x length is negative', () => {
        expect(() => new Grid(-10, 20)).toThrow('you cannot have an x length negative');
    })

    it('should throw IllegalArgument when grid y length is negative', () => {
        expect(() => new Grid(10, -20)).toThrow('you cannot have an y length negative');
    })
})