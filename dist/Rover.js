"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
const Coordinates_1 = require("./Coordinates");
const NorthDirection_1 = require("./state/NorthDirection");
class Rover {
    constructor(grid) {
        this.coordinate = new Coordinates_1.Coordinates(0, 0);
        this.state = new NorthDirection_1.NorthDirection(this);
        this.grid = grid;
    }
    changeState(state) {
        this.state = state;
    }
    turnRight() {
        this.state.turnRight();
    }
    turnLeft() {
        this.state.turnLeft();
    }
    moveAhead() {
        const currentCoordinates = this.coordinate;
        this.coordinate = this.grid.coordinateTo(this.coordinate, this.state.getCurrentDirection());
        return currentCoordinates.isEqual(this.coordinate);
    }
    get getCoordinates() {
        return this.coordinate;
    }
    get getCurrentDirection() {
        return this.state.getCurrentDirection();
    }
}
exports.Rover = Rover;
//# sourceMappingURL=Rover.js.map