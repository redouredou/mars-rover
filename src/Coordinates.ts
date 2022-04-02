
export class Coordinates{
    private _x
    private _y

    constructor(_x: number, _y: number){
        this._x = _x;
        this._y = _y;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    isEqual(that: Coordinates){
        return (this._x === that.x) && (this._y === that.y);
    }

}