export default function Post({
  creator,
  isVideo,
  post,
  postAlt,
  likesImage,
  likesUser,
  likesCount,
  commentsCount,
  lastComment
}) {
  return (
    <article class="post">
      <div class="post-header">
        <img src={`./assets/small/${creator}.png`} alt={creator} />
        <h2>{creator}</h2>
        <ion-icon class="right-icon" name="ellipsis-horizontal"></ion-icon>
      </div>

      {isVideo ? (
        <video controls autoPlay muted>
          <source src={`./assets/posts/${post}.mp4`} type="video/mp4" />
          <source src={`./assets/posts/${post}.ogg`} type="video/ogg" />
        </video>
      ) : (
        <img src={`./assets/posts/${post}.png`} alt={postAlt} />
      )}

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

        <div class="comments">
          <button class="all-comments">
            Ver todos os {commentsCount.toLocaleString("pt-br")} comentários
          </button>

          <div class="comment">
            <p>{lastComment}</p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>

          <div class="new-comment">
            <ion-icon name="happy-outline"></ion-icon>
            <input type="text" placeholder="Adicione um comentário" />
            <button>Publicar</button>
          </div>
        </div>
      </div>
    </article>
  );
}
