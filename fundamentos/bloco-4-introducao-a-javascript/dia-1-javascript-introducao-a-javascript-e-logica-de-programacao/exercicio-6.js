const chessPiece = "Queen".toLowerCase();

switch(chessPiece) {
    case "horse":
        console.log("Moves in 'L'.");
        break;
    case "pawn":
        console.log("Forward by 1 square (captures diagonally).");
        break;
    case "rook":
        console.log("Right angles limited by other pieces.");
        break;
    case "king":
        console.log("Right angles limited by 1 square.");
        break;
    case "queen":
        console.log("Right angles and diagonal limited by other pieces");
        break;
    case "bishop":
        console.log("Moves in diagonal limited by other pieces.");
        break;
    default:
        console.log("Invalid Piece");
}
