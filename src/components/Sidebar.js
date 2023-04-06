import Disclamer from "./sidebar/Disclamer";
import Suggestions from "./sidebar/Suggestions";
import User from "./sidebar/User";

export default function Sidebar() {
  return (
    <aside>
      <User name="Catana" username="catanacomics" image="./assets/large/catanacomics.png" />
      <Suggestions />
      <Disclamer />
    </aside>
  );
}
