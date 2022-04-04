"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const Coordinates_1 = require("./Coordinates");
const Direction_1 = require("./state/Direction");
class Grid {
    constructor(obstacles) {
        this.MAX_WIDTH = 10;
        this.MAX_HEIGHT = 10;
        this.MIN_WIDTH = 0;
        this.MIN_HEIGHT = 0;
        this.obstacles = obstacles;
    }
    coordinateTo(coordinate, direction) {
        let x = coordinate.x;
        let y = coordinate.y;
        const currentCoordinates = coordinate;
        if (direction === Direction_1.EDirection.NORTH.valueOf()) {
            y = (y < 9) ? y + 1 : y = this.MIN_HEIGHT;
        }
        if (direction === Direction_1.EDirection.EAST.valueOf()) {
            x = (x < 9) ? x + 1 : this.MIN_WIDTH;
        }
        if (direction === Direction_1.EDirection.SOUTH.valueOf()) {
            y = (y > 0) ? y - 1 : y = this.MAX_HEIGHT - 1;
        }
        if (direction === Direction_1.EDirection.WEST.valueOf()) {
            x = (x > 0) ? x - 1 : x = this.MAX_WIDTH - 1;
        }
        let newCoordinates = new Coordinates_1.Coordinates(x, y);
        return this.nextCoordinate(newCoordinates, currentCoordinates);
    }
    nextCoordinate(newCoordinates, currentCoordinates) {
        return this.isObstacle(newCoordinates) ? currentCoordinates : newCoordinates;
    }
    isObstacle(coordinate) {
        var _a;
        return (_a = this.obstacles) === null || _a === void 0 ? void 0 : _a.some(coordinatesElt => coordinatesElt.isEqual(coordinate));
    }
}
exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map