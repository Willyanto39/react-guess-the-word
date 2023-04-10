import { useState } from 'react'
import './App.css'
import Word from './components/Word';
import Input from './components/Input';
import { getRandomWord } from './word-randomizer';

function App() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(10);

  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter));

  const isLoser = attemptsLeft === 0;

  const isGameOver = isWinner || isLoser;

  function guessLetter(letter: string) {
    if (guessedLetters.includes(letter)) {
      return;
    }

    if (!wordToGuess.includes(letter)) {
      setAttemptsLeft(previousAttemptsLeft => previousAttemptsLeft - 1);
    }

    setGuessedLetters(currentGuessedLetters => [...currentGuessedLetters, letter]);
  }

  function playAgain() {
    setWordToGuess(getRandomWord());
    setGuessedLetters([]);
    setAttemptsLeft(10);
  }

  return (
    <div>
      <h1>Word Guessing Game</h1>
      <div style={{ fontSize: "2rem"}}>
        { isWinner && "You win!" }
        { isLoser && `You lose! ${wordToGuess.toUpperCase()} is the hidden word`}
      </div>
      <button onClick={() => playAgain()} hidden={!isGameOver}>Play Again</button>
      <p>Attempts left: {attemptsLeft}</p>
      <Word guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div>
        <Input 
          guessedLetters={guessedLetters} 
          guessLetter={guessLetter} 
          isGameOver={isGameOver}/>
      </div>
    </div>
  );
}

export default App;
