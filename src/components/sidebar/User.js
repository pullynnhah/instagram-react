export default function User({ image, setImage, user, setUser, username }) {
  function set(value, callback) {
    if (value) {
      callback(value);
    }
  }
  return (
    <div className="me">
      <img
        src={image}
        onClick={() => set(prompt("Qual a nova imagem?"), setImage)}
        alt="cananacomics"
      />
      <div>
        <strong>{username}</strong>
        <div className="edit-user">
          <p>{user}</p>
          <ion-icon
            onClick={() => set(prompt("Qual o nome de usuário?"), setUser)}
            name="pencil-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
