import React, {  useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    const newGuess  = event.target.value;
    setCurrentGuess(Number(newGuess))
  };
  
  const onSubmitGuess = (event) => {
    event.preventDefault();
    onGuess(currentGuess);
    setCurrentGuess("");
  };

  return (
    <div>
      <input
        type="number"
        min="0" 
        max="100" 
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
