import { BsArrowUpLeft } from "react-icons/bs";

type GameProps = {
  name: string;
  description: string;
  playLink: string;
};

export function Game({ name, description, playLink }: GameProps) {
  return (
    <a target="_blank" href={playLink} className="game">
      <h2>{name}</h2>
      <p>{description}</p>
      <BsArrowUpLeft className="game__icon" />
    </a>
  );
}
