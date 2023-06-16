import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [startGame, setStartGame] = useState(false);
  const [choice, setChoice] = useState(null);
  const [computer, setComputer] = useState(null);
  const [winner, setWinner] = useState(null);

  const genRandom = () => {
    var choices = ["Rock", "Paper", "Scissors"];
    setComputer(choices[Math.floor(Math.random() * choices.length)]);
  };

  const gameStart = () => {
    setStartGame(true);
  };

  const gameEnd = () => {
    setStartGame(false);
  };

  const rockSelection = () => {
    setChoice("Rock");
  };

  const paperSelection = () => {
    setChoice("Paper");
  };

  const scissorsSelection = () => {
    setChoice("Scissors");
  };

  const winnerLoser = () => {
    genRandom();
    if (
      (choice === "Rock" && computer === "Rock") ||
      (choice === "Paper" && computer === "Paper") ||
      (choice === "Scissors" && computer === "Scissors")
    ) {
      setWinner("--TIE--");
    } else if (
      (choice === "Rock" && computer === "Scissors") ||
      (choice === "Scissors" && computer === "Paper") ||
      (choice === "Paper" && computer === "Rock")
    ) {
      setWinner("YOU WIN!!!");
    } else {
      setWinner("COMPUTER WINS");
    }
  };

  return (
    <AppContext.Provider
      value={{
        gameStart,
        gameEnd,
        startGame,
        rockSelection,
        paperSelection,
        scissorsSelection,
        choice,
        computer,
        winnerLoser,
        winner,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
