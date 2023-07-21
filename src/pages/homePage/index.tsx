import { useState } from "react";
import { GamePage } from "../gamePage";
import "./styles.scss";

export const HomePage: React.FC = () => {
  const [game, setGame] = useState(false);
  const [player1, setPlayer1] = useState("null");
  const [player2, setPlayer2] = useState("null");

  const hide = { display: "none" };
  const show = { display: "block" };

  const gameStart = () => {
    setGame(true);
  };
  return (
    <div className="home">
      {game ? (
        <GamePage setGame={setGame} player1={player1} player2={player2} />
      ) : (
        <div className="card">
          <h2>Welcome to XXX-OOO Game </h2>
          <form className="row">
            <div className="col">
              <div className="form-group">
                <label>Player-1 Name</label>
                <input
                  required
                  type="text"
                  onChange={(e) => setPlayer1(e.target.value)}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Player-2 Name</label>
                <input
                  required
                  type="text"
                  onChange={(e) => setPlayer2(e.target.value)}
                />
              </div>
            </div>

            <div
              className="col"
              style={player1 && player2 != "null" ? show : hide}
            >
              <button
                type="submit"
                onClick={() => gameStart()}
                className="glowing-btn"
              >
                <span className="glowing-txt">Start Game</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
