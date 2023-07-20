import React, { useEffect, useState } from "react";
// import { Square } from "../../components/squares";
import {
  DIMENSIONS,
  PLAYER_O,
  PLAYER_X,
  SQUARE_DIMS,
} from "../../components/constants";
import "./styles.scss";

type TProps = {
  setGame: any;
};
export const GamePage: React.FC<TProps> = ({ setGame }) => {
  const back = () => {
    setGame(false);
  };
  const emptyGrid = new Array(DIMENSIONS ** 2).fill(null);

  const [winner, setWinner] = useState("");
  const [grid, setGrid] = useState(emptyGrid);
  const [players, setPlayers] = useState({
    human: PLAYER_X,
    ai: PLAYER_O,
  });
  const [xo, setXO] = useState(true);

  const move = (index: number, player: number) => {
    if (grid[index] == null) {
      setGrid((grid) => {
        const gridCopy = grid.concat();
        gridCopy[index] = player;
        return gridCopy;
      });
    }
  };

  const humanMove = (index: number) => {
    if (xo) {
      move(index, players.human);
      setXO(false);
    } else {
      move(index, players.ai);
      setXO(true);
    }
  };

  const isWinner = (x: number, y: number, z: number) => {
    if (x == y && y == z && x != null) {
      x == 0
        ? setWinner("Player X is winner")
        : setWinner("Player O is winner");
    }
  };

  const winnerCheck = () => {
    isWinner(grid[0], grid[1], grid[2]);
    isWinner(grid[3], grid[4], grid[5]);
    isWinner(grid[6], grid[7], grid[8]);
    isWinner(grid[0], grid[4], grid[8]);
    isWinner(grid[2], grid[4], grid[6]);
    isWinner(grid[0], grid[3], grid[6]);
    isWinner(grid[1], grid[4], grid[7]);
    isWinner(grid[2], grid[5], grid[8]);
  };

  useEffect(() => {
    winnerCheck();
  }, [grid]);

  return (
    <div>
      {winner != "" ? (
        winner
      ) : (
        <div className="Container">
          {grid.map((value, index) => {
            const isActive = value !== null;

            return (
              <div
                className="Square"
                key={index}
                onClick={() => humanMove(index)}
              >
                {isActive && (
                  <div className="Marker">{value === PLAYER_X ? "X" : "O"}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div>
        <button onClick={back}>Back</button>
      </div>
    </div>
  );
};
