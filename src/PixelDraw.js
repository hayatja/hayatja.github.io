// PixelDraw.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const gridSize = 50; // Larger grid size
const createEmptyGrid = () => Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => "#ffffff"));

const PixelDraw = ({ isDarkMode, backToMain }) => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [currentColor, setCurrentColor] = useState('#000000');
  const colors = ['#000000', '#ffffff', '#00FF00', '#0000FF', '#FFFF00', '#666']; // Example color choices

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={backToMain} style={{ backgroundColor: 'transparent', border: 'none' }}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {colors.map(color => (
          <button
            key={color}
            onClick={() => setCurrentColor(color)}
            style={{
              backgroundColor: color,
              width: '25px',
              height: '25px',
              margin: '0 5px',
              border: currentColor === color ? '2px solid #FFF' : '1px solid #000',
            }}
          />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 20px)`, gap: '1px' }}>
        {grid.map((rows, rowIndex) => rows.map((cellColor, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => {
              const newGrid = JSON.parse(JSON.stringify(grid));
              newGrid[rowIndex][colIndex] = currentColor;
              setGrid(newGrid);
            }}
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: cellColor,
              border: '1px solid',
              borderColor: isDarkMode ? '#666' : '#e4ddeb',
            }}
          />
        )))}
      </div>
    </div>
  );
};

export default PixelDraw;
