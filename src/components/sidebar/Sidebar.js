import SidebarFooter from "./SidebarFooter";
import Suggestions from "./Suggestions";
import User from "./User";

export default function Sidebar() {
  return (
    <aside>
      <User
        userImage="./assets/large/catanacomics.png"
        username="catanacomics"
        name="Catana"
      />
      <Suggestions />
      <SidebarFooter />
    </aside>
  );
}
