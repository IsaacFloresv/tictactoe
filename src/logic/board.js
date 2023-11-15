import { WINNER_COMBOS } from "../contants.js";

export const checkWinnerFrom = (boardToCheck) => {
    //Revision de todas las combinaciones ganadoras
    
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        //Si hay ganador
        return boardToCheck[a];
      }      
    }
    //si no hay ganador
    return null;
  }

  export const checkEndGame = (newBoard) => {
    //revisamos que no hay espacios vacios
    //si no hay un empate
    return newBoard.every((square) => square !== null)
  }