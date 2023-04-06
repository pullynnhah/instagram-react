import Disclamer from "./sidebar/Disclamer";
import Suggestions from "./sidebar/Suggestions";
import User from "./sidebar/User";

export default function Sidebar() {
  return (
    <aside>
      <User />
      <Suggestions />
      <Disclamer />
    </aside>
  );
}
