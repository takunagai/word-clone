import { useState } from "react";

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 5) {
      console.log(guess);
      setGuesses([...guesses, guess]);
      setGuess("");
    } else {
      window.alert("Guess must be 5 characters long.");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
