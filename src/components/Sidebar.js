import Disclamer from "./sidebar/Disclamer";
import User from "./sidebar/User";

export default function Sidebar() {
  return (
    <aside>
      <User />
      <div className="suggestions">
        <div className="suggestions-header">
          <p>Sugestões para você</p>
          <button>Ver tudo</button>
        </div>

        <div className="suggestion">
          <img src="./assets/small/badvibesmemes.png" alt="bad.vibes.memes" />
          <div>
            <p className="username">bad.vibes.memes</p>
            <small>Segue você</small>
          </div>
          <button>Seguir</button>
        </div>

        <div className="suggestion">
          <img src="./assets/small/chibirdart.png" alt="chibirdart" />
          <div>
            <p className="username">chibirdart</p>
            <small>Segue você</small>
          </div>
          <button>Seguir</button>
        </div>

        <div className="suggestion">
          <img src="./assets/small/razoesparaacreditar.png" alt="razoesparaacreditar" />
          <div>
            <p className="username">razoesparaacreditar</p>
            <small>Novo no Instagram</small>
          </div>
          <button>Seguir</button>
        </div>

        <div className="suggestion">
          <img src="./assets/small/adorableanimals.png" alt="adorable_animals" />
          <div>
            <p className="username">adorable_animals</p>
            <small>Segue você</small>
          </div>
          <button>Seguir</button>
        </div>

        <div className="suggestion">
          <img src="./assets/small/chibirdart.png" alt="chibirdart" />
          <div>
            <p className="username">chibirdart</p>
            <small>Segue você</small>
          </div>
          <button>Seguir</button>
        </div>
      </div>
      <Disclamer />
    </aside>
  );
}
