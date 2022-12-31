export default function NavbarDesktop() {
  return (
    <nav className="desktop">
      <div>
        <ion-icon name="logo-instagram"></ion-icon>
        <div className="border"></div>
        <img src="./assets/logo.png" alt="logo do Instagram" />
      </div>
      <input type="text" placeholder="Pesquisar" />
      <div className="icons">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </nav>
  );
}
