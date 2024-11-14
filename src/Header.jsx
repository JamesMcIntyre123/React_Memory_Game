import headerPic from "./assets/pokemon-header-text.png";
import currentScorePic from "./assets/current-score-pic.png";
import bestScorePic from "./assets/best-score.png";

import "./styles/header.css";
function Header({ currentScore, bestScore }) {
  return (
    <div className="header">
      <h1>Star Wars Memory Game</h1>
      <div className="scoreBox">
        <div className="score-and-label">
          <h2>Current Score: {currentScore}</h2>
        </div>
        <div className="score-and-label">
          <h2>Best Score: {bestScore}</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;