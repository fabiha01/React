import { useState } from "react";n 

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);  
  
  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {

  }

  // add a new guess to the guesses state
  // update isCorrect state if the guess is correct
  // add 1 to the turn state
  const addNewGuess = () => {

  }

  // handle key up event & track current guess
  // if user presses enter, add new guess
  const handleKeyup = () => {

  }

  return {turn, currentGuess, guesses, history, isCorrect, handleKeyup};

}

export default useWordle;