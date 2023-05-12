import React from "react";

function ResultBanner({ gameResult, answer }) {
  if (gameResult === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>. {/* TODO: 正解までの回数表示 */}
        </p>
      </div>
    );
  } else if (gameResult === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default ResultBanner;
