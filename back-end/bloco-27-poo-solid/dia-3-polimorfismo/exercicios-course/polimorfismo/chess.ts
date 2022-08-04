type BoardColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type BoardRow = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
type BoardHouse = [BoardColumn, BoardRow];

const boardColumns: BoardColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const boardRows: BoardRow[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const isInList = (element: any, list: any[]) => {
    for (let e of list)
        if (element[0] == e[0] && element[1] == e[1]) return true;
    return false;
};

abstract class Piece {
    protected _position: BoardHouse;
    abstract type: string;

    constructor(position: BoardHouse, protected board: Board) {
        this._position = position;
    };

    get position() { return this._position; }
    abstract get availableMoves(): BoardHouse[];

    move(newPosition: BoardHouse) {
        console.log(
            `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
        );
        if (!isInList(newPosition, this.availableMoves)) return false;
        this._position = newPosition;
        return true;
    }
}