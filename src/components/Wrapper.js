import Feed from "./feed/Feed";
import Stories from "./stories/Stories";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <main>
        <Stories />
        <Feed />
      </main>
      <aside></aside>
    </div>
  );
}
