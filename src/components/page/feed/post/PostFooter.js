import Comments from "./post-footer/Comments";

export default function PostFooter({
  likesImage,
  likesUser,
  likesCount,
  commentsCount,
  lastComment
}) {
  return (
    <div class="post-footer">
      <div class="reactions">
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon class="right-icon" name="bookmark-outline"></ion-icon>
      </div>

      <div class="likes-info">
        <img src={`./assets/micro/${likesImage}.png`} alt={likesUser} />
        <p>
          Curtido por <strong>{likesUser}</strong> e{" "}
          <strong>outras {likesCount.toLocaleString("pt-br")} pessoas</strong>
        </p>
      </div>

      <Comments commentsCount={commentsCount} lastComment={lastComment} />
    </div>
  );
}
