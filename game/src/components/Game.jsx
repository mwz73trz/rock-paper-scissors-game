import React from "react";
import { useGlobalContext } from "../context";
import { Button } from "@mui/material";
import HardwareIconSharp from "@mui/icons-material/HardwareSharp";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import ContentCutSharpIcon from "@mui/icons-material/ContentCutSharp";

function Game() {
  const {
    rockSelection,
    paperSelection,
    scissorsSelection,
    choice,
    winnerLoser,
  } = useGlobalContext();
  return (
    <div>
      <div>
        <h3>Select a choice:</h3>
      </div>
      <Button
        sx={{ m: 2 }}
        onClick={() => {
          rockSelection();
          winnerLoser();
        }}
      >
        <HardwareIconSharp />
      </Button>
      <Button
        sx={{ m: 2 }}
        onClick={() => {
          paperSelection();
          winnerLoser();
        }}
      >
        <ReceiptLongSharpIcon />
      </Button>
      <Button
        sx={{ m: 2 }}
        onClick={() => {
          scissorsSelection();
          winnerLoser();
        }}
      >
        <ContentCutSharpIcon />
      </Button>
      <h4>User Picks: {choice}</h4>
    </div>
  );
}

export default Game;
