import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses, answer, setGameResult }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          guess={guesses[num]}
          answer={answer}
          setGameResult={setGameResult}
        />
      ))}
    </div>
  );
}

export default GuessResults;
