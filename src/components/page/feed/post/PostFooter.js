import Comments from "./post-footer/Comments";
import Reactions from "./post-footer/Reactions";

export default function PostFooter({
  likesImage,
  likesUser,
  likesCount,
  commentsCount,
  lastComment
}) {
  return (
    <div className="post-footer">
      <Reactions />

      <div className="likes-info">
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
