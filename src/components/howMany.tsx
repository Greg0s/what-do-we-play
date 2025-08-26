export function HowMany() {
  return (
    <header>
      We are{" "}
      <input type="number" min={1} defaultValue={1} style={{ width: 40 }} />{" "}
      players
    </header>
  );
}
