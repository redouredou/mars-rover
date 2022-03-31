
export default class Grid {
    private lengthX: number;
    private lengthY: number;

    constructor(lengthX: number, lengthY: number){
        if(lengthX < 0){
            throw new Error('you cannot have an x length negative')
        }
        this.lengthX = lengthX;
        this.lengthY = lengthY;
    }
}