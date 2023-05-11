import React from "react";

function ResultBanner({ gameResult }) {
  if (gameResult === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
    );
  } else if (gameResult === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    );
  }
}

export default ResultBanner;
