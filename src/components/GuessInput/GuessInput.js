import { useState } from "react";

function GuessInput() {
  const [guessInputValue, setGuessInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guessInputValue.length === 5) {
      console.log(guessInputValue);
      setGuessInputValue("");
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
        value={guessInputValue}
        onChange={(event) => {
          setGuessInputValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
