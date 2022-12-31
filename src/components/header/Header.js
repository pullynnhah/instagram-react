import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Header() {
  return (
    <header>
      <NavbarMobile />
      <NavbarDesktop />
    </header>
  );
}
