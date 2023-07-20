import React, { useState } from "react";
// import { Square } from "../../components/squares";
import { DIMENSIONS, PLAYER_O, PLAYER_X, SQUARE_DIMS } from "../../components/constants";
import "./styles.scss";


const emptyGrid = new Array(DIMENSIONS ** 2).fill(null);
type TProps={
    setGame:any
}
export const GamePage: React.FC<TProps>=({setGame})=>{

const back=()=>{
    setGame(false);
}

//     return(
//         <div >
//             {/* for (let index = 0; index < 10 ; index++) {
//                 const element = array[index];
                
//             } */}
//             <h2>Game page</h2>
//             {<Square/>}
//             <button onClick={back}>Back</button>
//         </div>
//     )


    const [grid, setGrid] = useState(emptyGrid);
    const [players, setPlayers] = useState({
      human: PLAYER_X,
      ai: PLAYER_O,
    });
   
    const move = (index: number, player: number) => {
      setGrid((grid) => {
        const gridCopy = grid.concat();
        gridCopy[index] = player;
        return gridCopy;
      });
    };
   
    const humanMove = (index: number) => {
      if (!grid[index]) {
        move(index, players.human);
      }
    };
   
    return (
      <div className="Container">
        {grid.map((value, index) => {
          const isActive = value !== null;
   
          return (
            <div className="Square" key={index} onClick={() => humanMove(index)}>
              {isActive && <div  className="Marker">{value === PLAYER_X ? "X" : "O"}</div>}
            </div>
          );
        })}
           <button onClick={back}>Back</button>

      </div>
    );
  }
   
 



