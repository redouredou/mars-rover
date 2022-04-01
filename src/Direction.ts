export class Direction {

    private _direction: EDirection = EDirection.NORTH

    getValue(){
        return this._direction.valueOf();
    }

    rotateRight = () => {
        if(this._direction === EDirection.WEST) this._direction = EDirection.NORTH;
        else if(this._direction === EDirection.SOUTH) this._direction = EDirection.WEST;
        else if(this._direction === EDirection.EAST) this._direction = EDirection.SOUTH;
        else this._direction = EDirection.EAST;
    }

    rotateLeft = () => {
        if(this._direction === EDirection.EAST) this._direction = EDirection.NORTH;
        else if(this._direction === EDirection.SOUTH) this._direction = EDirection.EAST;
        else if(this._direction === EDirection.WEST) this._direction = EDirection.SOUTH;
        else this._direction = EDirection.WEST;
    }

}

enum EDirection {
    NORTH = 'N',
    EAST = 'E',
    SOUTH = 'S',
    WEST = 'W',
}
