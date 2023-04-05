export default function PostHeader({ creator }) {
  return (
    <div class="post-header">
      <img src={`./assets/small/${creator}.png`} alt={creator} />
      <h2>{creator}</h2>
      <ion-icon class="right-icon" name="ellipsis-horizontal"></ion-icon>
    </div>
  );
}
