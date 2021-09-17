const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Error type either rock, scissors or paper')
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber=(Math.floor(Math.random() * 3));
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
        
      case 2: 
        return 'scissors';
         
      
    }
  };
  //console.log(getComputerChoice())
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Sorry computer won';
      } else {
       return 'Congratulations, you won';
      }
    }
  
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Sorry computer won';
      } else {
        return 'Congratulations, you won!'
      }
    }
  
     if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Sorry computer won';
      } else {
        return 'Congratulations, you won!'
      }
    }
  
    if (userChoice === 'bomb'){
      return 'congratulations! You won.'
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log(`You threw ${userChoice} and the compuer threw ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
  };
  playGame();
  
  
  
  
  