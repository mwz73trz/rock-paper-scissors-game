import React from "react";
import { useGlobalContext } from "../context";
import { Button } from "@mui/material";

function Main() {
  const { gameStart, gameEnd } = useGlobalContext();
  return (
    <div>
      <h1>Welcome to Rock, Paper, Scissors -- Shoot Game</h1>
      <p>Would you like to play a new game?</p>
      <Button variant="outlined" sx={{ m: 2 }} onClick={gameStart}>
        Yes
      </Button>
      <Button variant="outlined" sx={{ m: 2 }} onClick={gameEnd}>
        No
      </Button>
    </div>
  );
}

export default Main;
