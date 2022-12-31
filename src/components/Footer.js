export default function Footer() {
  const icons = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline",
  ];

  return (
    <footer>
      {icons.map(icon => (
        <ion-icon name={icon} key={icon}></ion-icon>
      ))}
    </footer>
  );
}
