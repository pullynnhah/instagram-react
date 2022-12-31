import SidebarFooter from "./SidebarFooter";
import Suggestions from "./Suggestions";
import User from "./User";

export default function Sidebar() {
  return (
    <aside>
      <User />
      <Suggestions />
      <SidebarFooter />
    </aside>
  );
}
