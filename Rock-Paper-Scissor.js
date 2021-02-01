const readline = require('readline-sync')

// Get User's Choice
let userChoice = () => {
let getUserChoice = readline.question('Rock Paper or Scissors?:')
let userInput = getUserChoice.toLowerCase()
if(userInput === 'rock' || userInput === 'paper' || userInput ==='scissors'){
    return userInput
} else {
    console.log('Error! Input rock, paper or scissors')
   let getUserChoice = readline.question('Rock Paper or Scissors?:')
}
}

// Get Computer's Choice
let computerChoice = () => {
    let randomNumber = (Math.floor(Math.random()*3))
    if(randomNumber === 1){
        console.log('computer chose rock')
        return 'rock';
    }else if(randomNumber===2){
        console.log('computer chose paper')
        return 'paper'
    } else {
        console.log('computer chose scissors')
        return 'scissors'
    }
}
userChoice()
computerChoice()

if(userChoice ==='rock' && computerChoice === 'paper'){
    console.log('Computer is the Winner!')
}else if(userChoice==='rock' && computerChoice==='scissors'){
    console.log('User is the Winner!')
} else if (userChoice==='paper' && computerChoice==='rock'){
    console.log('User is the Winner')
} else if(userChoice==='paper' && computerChoice==='scissors'){
    console.log('Computer is the Winner')
} else if (userChoice === 'scissors' && computerChoice==='paper'){
    console.log('User is the Winner')
} else if (userChoice==='scissors' && computerChoice==='rock'){
    console.log('Computer is the Winner!')
} else{
    console.log('Its a tie')
}