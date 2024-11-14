import Card from "./Card.jsx";
import './styles/board.css';

//Board component should
// 1) place cards on board
// 2) shuffle cards on board when cards are clicked
// 3) should it create cards to begin with?
function Board({ characterList, shuffleFunction, pointsFunction }) {
  return (
    <div className="board">
      {characterList.map((name, index) => (
        <Card
          key={name}
          characterName={name}
          shuffleFunction={shuffleFunction}
          pointsFunction={pointsFunction}
        />
      ))}
    </div>
  );
}

export default Board;