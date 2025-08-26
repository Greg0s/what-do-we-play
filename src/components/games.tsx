import { Game } from "./game";
import gamesData from "../games.json";

export function Games({ players }: { players: number }) {
  return (
    <div className="grid">
      {gamesData
        .filter(
          (game) =>
            (players >= game.minPlayers && players <= game.maxPlayers) ||
            game.maxPlayers === -1
        )
        .map((game, idx) => (
          <Game
            key={idx}
            name={game.name}
            description={game.description}
            playLink={game.link}
          />
        ))}
    </div>
  );
}
