import { useState } from "react";

import SidebarFooter from "./SidebarFooter";
import Suggestions from "./Suggestions";
import User from "./User";

export default function Sidebar() {
  const [image, setImage] = useState("./assets/large/catanacomics.png");
  const [user, setUser] = useState("Catana");

  return (
    <aside>
      <User
        username="catanacomics"
        image={image}
        setImage={setImage}
        user={user}
        setUser={setUser}
      />
      <Suggestions />
      <SidebarFooter />
    </aside>
  );
}
