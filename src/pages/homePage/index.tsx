import { useState } from "react"
import { GamePage } from "../gamePage"

export const HomePage: React.FC =()=>{
    const [game, setGame] = useState(false)

    const gameStart=()=>{
        setGame(true);
    }
    return(
        <div className="home">
            {game ? <GamePage setGame={setGame}/>: <div>
            <h1>Welcome to XXX-OOO Game</h1>
            <button onClick={()=>gameStart()}>StartGame</button>
            </div>
    }
        </div>
    )

}