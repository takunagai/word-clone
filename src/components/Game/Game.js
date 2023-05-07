import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessHistories from "../GuessHistories";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <GuessHistories guesses={guesses} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
