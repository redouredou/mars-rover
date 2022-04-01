"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
class Rover {
    execute(command) {
        if (command === 'RR') {
            return '0:0:S';
        }
        return '0:0:E';
    }
}
exports.Rover = Rover;
//# sourceMappingURL=Rover.js.map