import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
let restOfGuesses = NUM_OF_GUESSES_ALLOWED;

function GuessInput({ guesses, setGuesses, setGameResult }) {
  const [guess, setGuess] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (guess.length !== 5) {
    //   window.alert("Guess must be 5 characters long.💖");
    //   return;
    // }

    setGuesses([...guesses, guess]);
    --restOfGuesses;
    if (restOfGuesses <= 0) {
      setIsInputActive(true);
      setGameResult("lose");
    }
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        disabled={isInputActive}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
      {/* pattern の箇所、ブラウザの不具合対策に必須。5文字のアルファベットのみを許可 */}
    </form>
  );
}

export default GuessInput;
