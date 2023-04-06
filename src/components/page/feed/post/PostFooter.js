import Comments from "./post-footer/Comments";
import Reactions from "./post-footer/Reactions";

export default function PostFooter({
  isLiked,
  updateIsLiked,
  likesImage,
  likesUser,
  likesCounter,
  commentsCount,
  lastComment
}) {
  return (
    <div className="post-footer">
      <Reactions isLiked={isLiked} updateIsLiked={updateIsLiked} />

      <div className="likes-info">
        <img src={`./assets/micro/${likesImage}.png`} alt={likesUser} />
        <p>
          Curtido por <strong>{likesUser}</strong> e{" "}
          <strong>outras {likesCounter.toLocaleString("pt-br")} pessoas</strong>
        </p>
      </div>

      <Comments commentsCount={commentsCount} lastComment={lastComment} />
    </div>
  );
}
