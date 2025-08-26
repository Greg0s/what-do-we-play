import { useState } from "react";
import "./App.scss";
import { Title, Games } from "./components/";

function App() {
  const [players, setPlayers] = useState(1);

  return (
    <>
      <Title />
      <div>
        We are{" "}
        <input
          type="number"
          min={1}
          value={players}
          onChange={(e) => setPlayers(Number(e.target.value))}
        />{" "}
        players
      </div>
      <Games players={players} />
    </>
  );
}

export default App;
