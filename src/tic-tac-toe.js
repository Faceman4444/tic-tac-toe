class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.matrix=[[],[],[]];
        this.winner;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        this.matrix[rowIndex][columnIndex]=this.currentPlayerSymbol;
       if (this.currentPlayerSymbol==="x") {this.currentPlayerSymbol = "o";}
       else if (this.currentPlayerSymbol==="o") {this.currentPlayerSymbol = "x";}
    }

    isFinished() {
             if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[1][0]==this.matrix[2][0])   {this.winner = true;} 
        else if (this.matrix[0][1]!=undefined && this.matrix[0][1]==this.matrix[1][1]==this.matrix[2][1])   {this.winner = true;}
        else if (this.matrix[0][2]!=undefined && this.matrix[0][2]==this.matrix[1][2]==this.matrix[2][2])   {this.winner = true;}
        else if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[0][1]==this.matrix[0][2])   {this.winner = true;}
        else if (this.matrix[1][0]!=undefined && this.matrix[1][0]==this.matrix[1][1]==this.matrix[1][2])   {this.winner = true;}
        else if (this.matrix[2][0]!=undefined && this.matrix[2][0]==this.matrix[2][1]==this.matrix[2][2])   {this.winner = true;}
        else if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[1][1]==this.matrix[2][2])   {this.winner = true;}
        else if (this.matrix[2][0]!=undefined && this.matrix[2][0]==this.matrix[1][1]==this.matrix[0][2])   {this.winner = true;}
        else {this.winner = false;}

        var p = 0;
        for (var j = 0; j < 3; j++)
            for (var i = 0; i < 3; i++){
                if (this.matrix[i][j] != undefined) p++;
            }
        if (p == 9 && this.winner == true) {return true;}
        if (p == 9 && this.winner == false) {return false;}
        
        else {return true;}
    }

    getWinner() {
              if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[1][0]==this.matrix[2][0])   {this.winner = true; return this.matrix[0][0];} 
         else if (this.matrix[0][1]!=undefined && this.matrix[0][1]==this.matrix[1][1]==this.matrix[2][1])   {this.winner = true; return this.matrix[0][1];}
         else if (this.matrix[0][2]!=undefined && this.matrix[0][2]==this.matrix[1][2]==this.matrix[2][2])   {this.winner = true; return this.matrix[0][2];}
         else if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[0][1]==this.matrix[0][2])   {this.winner = true; return this.matrix[0][0];}
         else if (this.matrix[1][0]!=undefined && this.matrix[1][0]==this.matrix[1][1]==this.matrix[1][2])   {this.winner = true; return this.matrix[1][0];}
         else if (this.matrix[2][0]!=undefined && this.matrix[2][0]==this.matrix[2][1]==this.matrix[2][2])   {this.winner = true; return this.matrix[2][0];}
         else if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[1][1]==this.matrix[2][2])   {this.winner = true; return this.matrix[0][0];}
         else if (this.matrix[2][0]!=undefined && this.matrix[2][0]==this.matrix[1][1]==this.matrix[0][2])   {this.winner = true; return this.matrix[2][0];}
         else {this.winner = false; return null}

    }

    noMoreTurns() {
        var n = 0;
        for (var j = 0; j < 3; j++)
            for (var i = 0; i < 3; i++){
                if (this.matrix[i][j] != undefined) n++;
            }
        if (n != 9) return false;
        else {return true;}
    }

    isDraw() {
             if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[1][0]==this.matrix[2][0])   {this.winner = true;} 
        else if (this.matrix[0][1]!=undefined && this.matrix[0][1]==this.matrix[1][1]==this.matrix[2][1])   {this.winner = true;}
        else if (this.matrix[0][2]!=undefined && this.matrix[0][2]==this.matrix[1][2]==this.matrix[2][2])   {this.winner = true;}
        else if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[0][1]==this.matrix[0][2])   {this.winner = true;}
        else if (this.matrix[1][0]!=undefined && this.matrix[1][0]==this.matrix[1][1]==this.matrix[1][2])   {this.winner = true;}
        else if (this.matrix[2][0]!=undefined && this.matrix[2][0]==this.matrix[2][1]==this.matrix[2][2])   {this.winner = true;}
        else if (this.matrix[0][0]!=undefined && this.matrix[0][0]==this.matrix[1][1]==this.matrix[2][2])   {this.winner = true;}
        else if (this.matrix[2][0]!=undefined && this.matrix[2][0]==this.matrix[1][1]==this.matrix[0][2])   {this.winner = true;}
        else {this.winner = false;}

        var k = 0;
        for (var j = 0; j < 3; j++)
            for (var i = 0; i < 3; i++){
                if (this.matrix[i][j] != undefined) k++;
            }
        if (k == 9 && this.winner == false) {return true;}
        else {return true;}
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] != undefined) {return this.matrix[rowIndex][colIndex];}
        else {return null;}
    }
}

module.exports = TicTacToe;
