type GameProps = {
  name: string;
  description: string;
  playLink: string;
};

export function Game({ name, description, playLink }: GameProps) {
  return (
    <div className="game">
      <h2>{name}</h2>
      <p>{description}</p>
      <button>
        <a target="_blank" href={playLink}>
          Play
        </a>
      </button>
    </div>
  );
}
