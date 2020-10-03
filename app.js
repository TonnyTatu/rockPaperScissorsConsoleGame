const gameMoves = ['r', 'p', 's'];
var cpuMove = 0;
var playerMove = '';


var gameOn = true;

function gamePlay(playerMove) {
    
    let drawCount = 0;
    let totalGame = 0;
    let playerWin = 0;
    let cpuWin = 0;

    
    while(gameOn) {

        playerMove = prompt("Player Turn: Rock('r'), Paper('p'), Scissors('s') or Quit('q'): ");
        cpuMove = Math.floor(Math.random() * 3);
        
        if(playerMove !== 'q') {
            console.log(`Player's Move: ${playerMove} \nComputer's Move: ${gameMoves[cpuMove]}`);
        } else 
            console.log(`Game Quited by Player`);
        
        

        switch(playerMove) {

            case 'r':
                if(playerMove === 'r' && gameMoves[cpuMove] === 's') {
                    console.log(`---------------------------------\n Player Wins! and Computer Loose!\n---------------------------------\n`);
                    playerWin++;
                } else if(playerMove === 'r' && gameMoves[cpuMove] === 'p') {
                    console.log(`---------------------------------\n Computer Wins! and Player Loose!\n---------------------------------\n`);
                    cpuWin++;
                } else {
                    console.log("---------\n  Draw\n---------\n");
                    console.log();
                    drawCount++;
                }
                totalGame++;
                break;

            case 'p':
                if(playerMove === 'p' && gameMoves[cpuMove] === 'r') {
                    console.log(`---------------------------------\n Player Wins! and Computer Loose!\n---------------------------------\n`);
                    playerWin++;
                } else if(playerMove === 'p' && gameMoves[cpuMove] === 's') {
                    console.log(`---------------------------------\n Computer Wins! and Player Loose!\n---------------------------------\n`);
                    cpuWin++;
                } else {
                    console.log("---------\n  Draw\n---------\n");
                    console.log();
                    drawCount++;
                }
                totalGame++;
                break;
            
            case 's':
                if(playerMove === 's' && gameMoves[cpuMove] === 'p') {
                    console.log(`---------------------------------\n Player Wins! and Computer Loose!\n---------------------------------\n`);
                    playerWin++;
                } else if(playerMove === 's' && gameMoves[cpuMove] === 'r') {
                    console.log(`---------------------------------\n Computer Wins! and Player Loose!\n---------------------------------\n`);
                    cpuWin++;
                } else {
                    console.log("---------\n  Draw\n---------\n");
                    console.log();
                    drawCount++;
                }
                totalGame++;
                break;
            case 'q':
                if(playerMove === 'q') {
                    gameOn = false;
                }
                break;
            default:
                console.log("Invalid Input");
                playerMove = prompt("Do You Want to Quit? Quit('q') :\nPress 'c' for Continue...");
                if(playerMove === 'q') {
                    gameOn = false;
                } else {
                    alert("Game is Continued...");
                }
                break;
        }


    }

    console.log("Game Quited! \n" + "Total Game Turns: " + totalGame + "\n");
    console.log("Player Wins: " + playerWin + "\nCpu Wins: " + cpuWin + `\nDraws: ${drawCount} \n`);
}

gamePlay(playerMove);