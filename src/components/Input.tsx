const lettersRows: string = "abcdefghijklmnopqrstuvwxyz";

type InputProps = {
  guessedLetters: string[],
  guessLetter: (letter: string) => void
  isGameOver: boolean
};

function Input({ guessedLetters, guessLetter, isGameOver }: InputProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: "0.5rem",
      maxWidth: "800px"
    }}>
      {
        lettersRows.split("").map(letter => {
          const shouldBeDisabled = guessedLetters.includes(letter) || isGameOver;
          
          return (
            <button
              disabled={shouldBeDisabled}
              onClick={() => guessLetter(letter)} 
              key={letter}
            >
                {letter.toUpperCase()}
            </button>
          );
        })
      }
    </div>
  );
}

export default Input;