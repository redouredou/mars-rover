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
        this.isMeetObstacle = false;
    }
    changeState(state) {
        this.state = state;
    }
    get getCoordinates() {
        return this.coordinate;
    }
    get getCurrentDirection() {
        return this.state.getCurrentDirection();
    }
    get IsMeetObstacle() {
        return this.isMeetObstacle;
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
        this.isMeetObstacle = currentCoordinates.isEqual(this.coordinate);
    }
}
exports.Rover = Rover;
//# sourceMappingURL=Rover.js.map