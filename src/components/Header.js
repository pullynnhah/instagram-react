export default function Header() {
  return (
    <header>
      <nav className="mobile">
        <ion-icon name="logo-instagram"></ion-icon>
        <img src="./assets/logo.png" alt="logo do Instagram" />
        <ion-icon name="paper-plane-outline"></ion-icon>
      </nav>

      <nav className="desktop">
        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <img src="./assets/logo.png" alt="logo do Instagram" />
        </div>

        <input type="text" placeholder="Pesquisar" />

        <div className="actions">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </nav>
    </header>
  );
}
