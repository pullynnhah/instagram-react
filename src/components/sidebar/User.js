import { useState } from "react";

export default function User() {
  const defaults = { name: "Catana", image: "./assets/large/catanacomics.png" };
  const [name, setName] = useState(defaults.name);
  const [image, setImage] = useState(defaults.image);
  return (
    <div className="user">
      <img
        onClick={() => setImage(prompt("URL da imagem?") || defaults.image)}
        src={image}
        alt="catanacomics"
      />
      <div>
        <p className="username">catanacomics</p>
        <div className="name-box">
          <p className="name">{name}</p>
          <ion-icon
            onClick={() => setName(prompt("Qual o seu nome?") || defaults.name)}
            name="pencil"></ion-icon>
        </div>
      </div>
    </div>
  );
}
