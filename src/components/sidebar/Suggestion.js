export default function Suggestion({ image, user, text }) {
  return (
    <div className="suggestion">
      <img src={`./assets/small/${image}.png`} alt={user} />

      <div>
        <strong>{user}</strong>
        <p>{text}</p>
      </div>
      <button>Seguir</button>
    </div>
  );
}
