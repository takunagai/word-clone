import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import ResultBanner from "../ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log(`Answer: ${answer}`);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("");

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        setGameResult={setGameResult}
      />
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
      <ResultBanner gameResult={gameResult} />
    </>
  );
}

export default Game;
