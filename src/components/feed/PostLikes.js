export default function PostLikes({ userLikesSrc, userLikes, likesCount }) {
  return (
    <div className="likes">
      <img src={`./assets/micro/${userLikesSrc}.png`} alt={userLikes} />
      <p>
        Curtido por <strong>{userLikes}</strong> e
        <strong>outras {likesCount.toLocaleString("pt-br")} pessoas</strong>
      </p>
    </div>
  );
}
