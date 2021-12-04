

function rockPaperScissors(p1, p2){
    if(p1 == p2)
        return 'its a tie!';
    else {
        if(p1== "rock" && p2 == "scissors") return 'p1 wins!'
    } 
        if(p1== "rock" && p2 == "paper") return 'p2 wins!'

        if(p1== "paper" && p2 == "scissors") return 'p2 wins!'
    
}

console.log(rockPaperScissors("rock", "rock"));
console.log(rockPaperScissors("rock", "scissors"));
console.log(rockPaperScissors("rock", "paper"));
console.log(rockPaperScissors("paper", "scissors"));