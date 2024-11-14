import { useState } from "react";
import Card from "./Card.jsx";
import Board from "./Board.jsx";
import Header from "./Header.jsx";
// import "./App.css"

// app should be responsible for
// 1) shuffling the cards(reordering the list of cards/names)
function App() {
  const [characterList, setCharacterList] = useState([
    "Plo%20Koon",
    "Maul",
    "Mace%20Windu",
    "General%20Grievous",
    "Darth%20Vader",
    "Boba%20Fett ",
    "Padmé%20Amidala",
    "Han%20Solo"
  ]);

  const [points, setPoints] = useState(0);
  const [clickedList, setClickedList] = useState([]);
  const [bestScore, setBestScore] = useState([0]);

  function shuffle(array = characterList) {
    //Fisher-Yates Shuffle algorithm, to shuffle the cards
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    setCharacterList([...array]);
  }

  function calculatePoints(clickedCharacter, array = clickedList) {
    if (array.includes(clickedCharacter)) {
      if (points >= bestScore) {
        setBestScore(points);
      }
      setPoints(0);
      setClickedList([]);
    } else {
      setPoints(points + 1);
      setClickedList([...array, clickedCharacter]);
    }
    console.log(points);
  }

  return (
    <>
      <div className="page">
        <Header currentScore={points} bestScore={bestScore} />
        <p className="description">
          Get points by clicking on an image, but don't click on any more than
          once!
        </p>
        <Board
          characterList={characterList}
          shuffleFunction={shuffle}
          pointsFunction={calculatePoints}
        />
      </div>
    </>
  );
}

export default App;