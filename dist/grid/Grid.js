"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grid {
    constructor(lengthX, lengthY) {
        if (lengthY < 0) {
            throw new Error('you cannot have an y length negative');
        }
        if (lengthX < 0) {
            throw new Error('you cannot have an x length negative');
        }
        this.lengthX = lengthX;
        this.lengthY = lengthY;
    }
}
exports.default = Grid;
//# sourceMappingURL=Grid.js.map