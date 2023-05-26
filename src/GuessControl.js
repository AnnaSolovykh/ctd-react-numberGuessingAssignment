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
    <form onSubmit={onSubmitGuess}>
      <input
        type="number"
        min="0" 
        max="100" 
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button type="submit">Submit Guess</Button>
    </form>
  );
}

export default GuessControl;
