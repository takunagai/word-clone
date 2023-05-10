import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const resultData = checkGuess(guess, answer);
  console.log(resultData);
  // checkGuess() 関数は、以下のようなオブジェクトの配列を返す:
  // [
  //   { letter: 'W', status: 'incorrect' },
  //   { letter: 'H', status: 'incorrect' },
  //   { letter: 'A', status: 'correct' },
  //   { letter: 'L', status: 'misplaced' },
  //   { letter: 'E', status: 'misplaced' },
  // ]

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${resultData && resultData[num].status}`}
        >
          {guess && guess[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
