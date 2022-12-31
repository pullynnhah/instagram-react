import Feed from "./feed/Feed";
import Sidebar from "./sidebar/Sidebar";
import Stories from "./stories/Stories";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <main>
        <Stories />
        <Feed />
      </main>
      <Sidebar />
    </div>
  );
}
