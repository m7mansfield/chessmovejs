// Michael Mansfield
// Calculate the legal chess moves given the
// state of the board and the current turn.

"use strict";

document.getElementById("calcMoves").onclick = function() {
    var turn = document.getElementById("turn").value.toLowerCase()[0];
    var board = document.getElementById("input").value.split("\n");
    for(var i = 0; i < 8; i++) {
        board[i] = board[i].split(" ");
    }
    board.reverse();
    var moves = [];
    for(var y = 0; y < 8; y++) {
        for(var x = 0; x < 8; x++) {
            if(board[y][x][0] === turn) {
                //Rook (and Queen) check
                if((board[y][x][1] === "r") || (board[y][x][1] === "q")) {
                    var row = y + 1;
                    while((row <= 7) && (board[row][x] === "xx")) {
                        moves.push([[x, y], [x, row]]);
                        row++;
                    }
                    var y_max = row;
                    row = y - 1;
                    while((row >= 0) && (board[row][x] === "xx")) {
                        moves.push([[x, y], [x, row]]);
                        row--;
                    }
                    var y_min = row;
                    var column = x + 1;
                    while((column <= 7) && (board[y][column] === "xx")) {
                        moves.push([[x, y], [column, y]]);
                        column++;
                    }
                    var x_max = column;
                    column = x - 1;
                    while((column >= 0) && (board[y][column] === "xx")) {
                        moves.push([[x, y], [column, y]]);
                        column--;
                    }
                    var x_min = column;
                    if((x_max <= 7) && (board[y][x_max][0] !== board[y][x][0])) {
                        moves.push([[x, y], [x_max, y]]);
                    }
                    if((x_min >= 0) && (board[y][x_min][0] !== board[y][x][0])) {
                        moves.push([[x, y], [x_min, y]]);
                    }
                    if((y_max <= 7) &&(board[y_max][x][0]  !== board[y][x][0])) {
                        moves.push([[x, y], [x, y_max]]);
                    }
                    if((y_min >= 0) && (board[y_min][x][0] !== board[y][x][0])) {
                        moves.push([[x, y], [x, y_min]]);
                    }
                }
                //Bishop (and Queen) check
                if((board[y][x][1] === "b") || (board[y][x][1] === "q")) {
                    var row = y + 1;
                    var column = x + 1;
                    while((row <= 7) && (column <= 7) && (board[row][column] === "xx")) {
                        moves.push([[x, y], [column, row]]);
                        row++;
                        column++;
                    }
                    var y_up_right = row;
                    var x_up_right = column;
                    row = y - 1;
                    column = x + 1;
                    while((row >= 0) && (column <= 7) && (board[row][column] === "xx")) {
                        moves.push([[x, y], [column, row]]);
                        row--;
                        column++;
                    }
                    var y_down_right = row;
                    var x_down_right = column;
                    row = y + 1;
                    column = x - 1;
                    while((row <= 7) && (column >= 0) && (board[row][column] === "xx")) {
                        moves.push([[x, y], [column, row]]);
                        row++;
                        column--;
                    }
                    var x_up_left = column;
                    var y_up_left = row;
                    row = y - 1;
                    column = x - 1;
                    while((row >= 0) && (column >= 0) && (board[row][column] === "xx")) {
                        moves.push([[x, y], [column, row]]);
                        row--;
                        column--;
                    }
                    var x_down_left = column;
                    var y_down_left = row;
                    if((x_up_right <= 7) && (y_up_right <= 7) && (board[y_up_right][x_up_right][0] !== board[y][x][0])) {
                        moves.push([[x, y], [x_up_right, y_up_right]]);
                    }
                    if((x_up_left >= 0) && (y_up_left <= 7) && (board[y_up_left][x_up_left][0] !== board[y][x][0])) {
                        moves.push([[x, y], [x_up_left, y_up_left]]);
                    }
                    if((x_down_right <= 7) && (y_down_right >= 0) && (board[y_down_right][x_down_right][0] !== board[y][x][0])) {
                        moves.push([[x, y], [x_down_right, y_down_right]]);
                    }
                    if((x_down_left >= 0) && (y_down_left >= 0) && (board[y_down_left][x_down_left][0] !== board[y][x][0])) {
                        moves.push([[x, y], [x_down_left, y_down_left]]);
                    }
                }
                //Knight check
                else if(board[y][x][1] === "h") {
                    var x_check = x + 2;
                    var y_check = y + 1;
                    if((y_check <= 7) && (x_check <= 7)) {
                        if((board[y_check][x_check] === "xx") || (board[y_check][x_check][0] !== board[y][x][0])) {
                            moves.push([[x, y], [x_check, y_check]]);
                        }
                    }
                    x_check = x - 2;
                    y_check = y + 1;
                    if((y_check <= 7) && (x_check >= 0)) {
                        if((board[y_check][x_check] === "xx") || (board[y_check][x_check][0] !== board[y][x][0])) {
                            moves.push([[x, y], [x_check, y_check]]);
                        }
                    }
                    x_check = x - 2;
                    y_check = y - 1;
                    if((y_check >= 0) && (x_check >= 0)) {
                        if((board[y_check][x_check] === "xx") || (board[y_check][x_check][0] !== board[y][x][0])) {
                            moves.push([[x, y], [x_check, y_check]]);
                        }
                    }
                    x_check = x + 2;
                    y_check = y - 1;
                    if((y_check >= 0) && (x_check <= 7)) {
                        if((board[y_check][x_check] === "xx") || (board[y_check][x_check][0] !== board[y][x][0])) {
                            moves.push([[x, y], [x_check, y_check]]);
                        }
                    }
                    x_check = x + 1;
                    y_check = y + 2;
                    if((y_check <= 7) && (x_check <= 7)) {
                        if((board[y_check][x_check] === "xx") || (board[y_check][x_check][0] !== board[y][x][0])) {
                            moves.push([[x, y], [x_check, y_check]]);
                        }
                    }
                    x_check = x - 1;
                    y_check = y + 2;
                    if((y_check <= 7) && (x_check >= 0)) {
                        if((board[y_check][x_check] === "xx") || (board[y_check][x_check][0] !== board[y][x][0])) {
                            moves.push([[x, y], [x_check, y_check]]);
                        }
                    }
                    x_check = x - 1;
                    y_check = y - 2;
                    if((y_check >= 0) && (x_check >= 0)) {
                        if((board[y_check][x_check] === "xx") || (board[y_check][x_check][0] !== board[y][x][0])) {
                            moves.push([[x, y], [x_check, y_check]]);
                        }
                    }
                    x_check = x + 1;
                    y_check = y - 2;
                    if((y_check >= 0) && (x_check <= 7)) {
                        if((board[y_check][x_check] === "xx") || (board[y_check][x_check][0] !== board[y][x][0])) {
                            moves.push([[x, y], [x_check, y_check]]);
                        }
                    }
                }
                //King check
                else if(board[y][x][1] === "k") {
                    if((y < 7) && ((board[y+1][x] === "xx") || (board[y+1][x][0] !== board[y][x][0]))) {
                        moves.push([[x, y], [x, y+1]]);
                    }
                    if((y > 0) && ((board[y-1][x] === "xx") || (board[y-1][x][0] !== board[y][x][0]))) {
                        moves.push([[x, y], [x, y-1]]);
                    }
                    if((x < 7) && ((board[y][x+1] === "xx") || (board[y][x+1][0] !== board[y][x][0]))) {
                        moves.push([[x, y], [x+1, y]]);
                    }
                    if((x > 0) && ((board[y][x-1] === "xx") || (board[y][x-1][0] !== board[y][x][0]))) {
                        moves.push([[x, y], [x-1, y]]);
                    }
                    if((y < 7) && (x < 7) && ((board[y+1][x+1] === "xx") || (board[y+1][x+1][0] !== board[y][x][0]))) {
                        moves.push([[x, y], [x+1, y+1]]);
                    }
                    if((y < 7) && (x > 0) && ((board[y+1][x-1] === "xx") || (board[y+1][x-1][0] !== board[y][x][0]))) {
                        moves.push([[x, y], [x-1, y+1]]);
                    }
                    if((y > 0) && (x < 7) && ((board[y-1][x+1] === "xx") || (board[y-1][x+1][0] !== board[y][x][0]))) {
                        moves.push([[x, y], [x+1, y-1]]);
                    }
                    if((y > 0) && (x > 0) && ((board[y-1][x-1] === "xx") || (board[y-1][x-1][0] !== board[y][x][0]))) {
                        moves.push([[x, y], [x-1, y-1]]);
                    }
                }
                //White pawn check
                else if(board[y][x] === "wp") {
                    if((y < 7) && (board[y+1][x] === "xx")) {
                        moves.push([[x, y], [x, y+1]]);
                    }
                    if(y < 7 && x < 7) {
                        if(board[y+1][x+1][0] === "b") {
                            moves.push([[x, y], [x+1, y+1]]);
                        }
                    }
                    if(y < 7 && x > 0) {
                        if(board[y+1][x-1][0] === "b") {
                            moves.push([[x, y], [x-1, y+1]]);
                        }
                    }
                    if((y === 1) && (board[y+1][x] === "xx") && (board[y+2][x] === "xx")) {
                        moves.push([[x, y], [x, y+2]]);
                    }
                }
                //Black pawn check
                else if(board[y][x] === "bp") {
                    if((y > 0) && (board[y-1][x] === "xx")) {
                        moves.push([[x, y], [x, y-1]]);
                    }
                    if(y > 0 && x < 7) {
                        if(board[y-1][x+1][0] === "w") {
                            moves.push([[x, y], [x+1, y-1]]);
                        }
                    }
                    if(y > 0 && x > 0) {
                        if(board[y-1][x-1][0] === "w") {
                            moves.push([[x, y], [x-1, y-1]]);
                        }
                    }
                    if((y === 6) && (board[y-1][x] === "xx") && (board[y-2][x] === "xx")) {
                        moves.push([[x, y], [x, y-2]]);
                    }
                }
            }
        }
    }
    var output = "Total moves: " + moves.length + "\n";
    for(var j = 0; j < moves.length; j++) {
        output = output + "(" + moves[j][0][0] + "," + moves[j][0][1] + ") to (" + moves[j][1][0] + "," + moves[j][1][1] + ")\n";
    }
    document.getElementById("moves").value = output;
};
