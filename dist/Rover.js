"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
const Direction_1 = require("./Direction");
const Coordinates_1 = require("./Coordinates");
class Rover {
    constructor(grid) {
        this.direction = new Direction_1.Direction();
        this.coordinate = new Coordinates_1.Coordinates(0, 0);
        this.grid = grid;
    }
    execute(command) {
        let meetObstacle = false;
        command.split('').forEach(value => {
            if (value === 'M') {
                const currentCoordinates = this.coordinate;
                this.coordinate = this.grid.coordinateTo(this.coordinate, this.direction.getValue());
                currentCoordinates.isEqual(this.coordinate) ? meetObstacle = true : meetObstacle;
            }
            if (value === 'R') {
                this.rotateRight();
            }
            if (value === 'L')
                this.rotateLeft();
        });
        return (meetObstacle ? 'O:' : '') + this.coordinate.x + ':' + this.coordinate.y + ':' + this.direction.getValue();
    }
    rotateRight() {
        this.direction.right();
    }
    rotateLeft() {
        this.direction.left();
    }
}
exports.Rover = Rover;
//# sourceMappingURL=Rover.js.map