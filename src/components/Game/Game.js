import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import ResultBanner from "../ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameResult, setGameResult] = useState("");

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        setGameResult={setGameResult}
      />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        setGameResult={setGameResult}
      />
      <ResultBanner
        gameResult={gameResult}
        answer={answer}
        clearCount={guesses.length}
      />
    </>
  );
}

export default Game;
