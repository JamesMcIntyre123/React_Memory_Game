import React, { useState, useEffect } from "react";
import "./styles/card.css";

// Card should accept a prop that lets it know which character
// that instance of the card should be
// API
function Card({ characterName, shuffleFunction, pointsFunction }) {
  const url = `https://starwars-databank-server.vercel.app/api/v1/characters/name/${characterName}`;
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleClick() {
    // this function will handle when a card is clicked
    shuffleFunction();
    console.log(name);
    pointsFunction(name);
  }

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(
            "API call in the card component can't find the pokemon! That Poke-sucks!"
          );

        const data = await response.json();
        const charName = data[0].name;
        setName(charName);
        setImageUrl(data[0].image);
      } catch (error) {
        console.error("Error fetching the Pokemon:", error);
      }
    };
    fetchCharacter();
  }, [url]);

  return (
    <div className="pokemon-card" onClick={handleClick}>
      {imageUrl && <img src={imageUrl} alt={name} />}
      <p>{name}</p>
    </div>
    // the html part of the code
  );
}

export default Card;