import React, { useState, useRef } from "react";

// Sanaristikon sanat ja niiden sijainnit
const crosswordData = [
  { word: "JYTY", clue: "Jyväskylän teekkarien yhdistys (lyhenne)" },
  { word: "WAPPU", clue: "Teekkareiden tärkein juhla" },
  { word: "FUKSI", clue: "Ensimmäisen vuoden opiskelija" },
  { word: "HAALARIT", clue: "Teekkareiden tunnusomainen asu" },
  { word: "SAUNA", clue: "Teekkareiden suosima ajanviettopaikka" },
  { word: "JALLU", clue: "Usein teekkarihuumoriin liittyvä juoma" },
  { word: "TEEKKARILAKKI", clue: "Lakki mitä teekkarit käyttävät vappuna" },
];

const Crossword = () => {
  const gridSize = 10; // Ruudukon koko
  const [answers, setAnswers] = useState(
    Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(""))
  );

  const inputRefs = useRef([]); // Viitteet syöttökentille

  const handleChange = (row, col, value) => {
    const newAnswers = [...answers];
    newAnswers[row][col] = value.toUpperCase();
    setAnswers(newAnswers);

    // Siirry seuraavaan ruutuun
    if (value && inputRefs.current[row][col + 1]) {
      inputRefs.current[row][col + 1].focus();
    }
  };

  const renderGrid = () => {
    const grid = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(null));

    const numbers = {}; // Tallennetaan numerot solujen koordinaatteihin

    crosswordData.forEach(({ word }, rowIndex) => {
      const startCol = 0; // Jokainen sana alkaa ensimmäisestä sarakkeesta
      numbers[`${rowIndex}-${startCol}`] = rowIndex + 1; // Numerointi rivin alkuun

      for (let colIndex = 0; colIndex < word.length; colIndex++) {
        grid[rowIndex][startCol + colIndex] = ""; // Jätä solu tyhjäksi vastaukselle
      }
    });

    // Alustetaan viitteet
    inputRefs.current = grid.map((row) => row.map(() => React.createRef()));

    return (
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className="cell-container">
              {numbers[`${rowIndex}-${colIndex}`] && (
                <span className="cell-number">{numbers[`${rowIndex}-${colIndex}`]}</span>
              )}
              <input
                ref={(el) => (inputRefs.current[rowIndex][colIndex] = el)} // Asetetaan viite
                maxLength={1}
                value={answers[rowIndex][colIndex]}
                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                className={cell !== null ? "cell" : "empty"}
                disabled={cell === null}
              />
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <div className="crossword-container">
      <h2>Sanaristikko</h2>
      <p>Täytä sanaristikko alla olevien vihjeiden perusteella:</p>
      <div className="grid">{renderGrid()}</div>
      <ul className="clues">
        {crosswordData.map((item, index) => (
          <li key={index}>
            {index + 1}. {item.clue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crossword;
