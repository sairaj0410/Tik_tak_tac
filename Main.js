//Global Variables
let playerTurn=0;
let matchStatus= "";
let player = "X";


let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];



//document.getElementById(1).addEventListener('click',() =>{play(document.getElementById(1))});


/*Its marks X or O 
function play(i){
    if (count%2===0){
        document.getElementById(i).innerHTML("X");
        count++;
    }
    else
    {
        document.getElementById(i).innerHTML("O");
        count++;
    }
}
*/

//change player
function playerChange(){
    player = (player=== "X")? "O": "X" ;}


function cellClick(row, col){

    if (board[row][col]===""){
        board[row][col]=player;
        document.getElementById("col"+row+col).innerHTML=player;
        playerTurn++;

        if (checkWinner()){
            matchStatus= player + " is Winner";
        }
        else if (playerTurn===9)
        {
            matchStatus=" Game Tied ";
        }
        else{playerChange();}

        document.getElementById("matchStatus").innerHTML= matchStatus;
    }
}

/*function checkWinner(){

    
    
    if((board[0][0]===board[0][1]===board[0][2]) || (board[1][0]===board[1][1]===board[1][2]) || board[2][0]===board[2][1]===board[2][2])
    {return true;}

    if(board[0][0]===board[1][0]===board[2][0] || board[0][1]===board[1][1]===board[2][1] || board[2][0]===board[2][1]===board[2][2])
    {return true;}

    if(board[0][0]===board[1][1]===board[2][2] || board[0][2]===board[1][1]===board[2][0])
    {return true;}

    else
    {
        return false
    }
    
}*/


function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== "" && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return true;
        }
    }
    // Check diagonals
    if (board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[2][0] !== "" && board[2][0] === board[1][1] && board[2][0] === board[0][2]) {
        return true;
    }
    // If no winner
    return false;
}





