type WordProps = {
  guessedLetters: string[],
  wordToGuess: string
}

function Word({ guessedLetters, wordToGuess }: WordProps) {
  return (
    <div style={{
      display: "flex",
      textTransform: "uppercase",
      fontSize: "4rem",
      gap: '1rem',
      justifyContent: "space-between",
      marginBottom: "2rem"
    }}>
      {
        wordToGuess.split("").map(letter => {
          return (
              <span style={{ borderBottom: "0.1rem solid white", flex: "1"}}>
                <span style={{
                  visibility: guessedLetters.includes(letter) ? "visible": "hidden"
                }}>
                  {letter}
                </span>
              </span>
            );
        })
      }
    </div>
  );
}

export default Word;