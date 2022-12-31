import Stories from "./stories/Stories";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <main>
        <Stories />
      </main>
      <aside></aside>
    </div>
  );
}
