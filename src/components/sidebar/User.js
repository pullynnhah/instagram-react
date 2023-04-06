import { useState } from "react";

export default function User({ name, username, image }) {
  const [name, setName] = useState(name);
  const [image, setImage] = useState(image);
  return (
    <div className="user">
      <img
        onClick={() => setImage(prompt("URL da imagem?") || image)}
        src={image}
        alt="catanacomics"
      />
      <div>
        <p className="username">{username}</p>
        <div className="name-box">
          <p className="name">{name}</p>
          <ion-icon
            onClick={() => setName(prompt("Qual o seu nome?") || name)}
            name="pencil"></ion-icon>
        </div>
      </div>
    </div>
  );
}
