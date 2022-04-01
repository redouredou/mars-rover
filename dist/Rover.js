"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
const Direction_1 = require("./Direction");
class Rover {
    constructor() {
        this._direction = new Direction_1.Direction();
    }
    execute(command) {
        command.split('').forEach(value => {
            if (value === 'M') {
                return '0:1:' + this._direction.getValue();
            }
            if (value === 'R') {
                this._direction.rotateRight();
            }
            if (value === 'L')
                this._direction.rotateLeft();
        });
        return '0:0:' + this._direction.getValue();
    }
}
exports.Rover = Rover;
//# sourceMappingURL=Rover.js.map