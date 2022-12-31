export default function PostHeader({ user }) {
  return (
    <div className="post-header">
      <img src={`./assets/small/${user}.png`} alt={user} />
      <p>{user}</p>
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  );
}
