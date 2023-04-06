import PostFooter from "./post/PostFooter";
import PostHeader from "./post/PostHeader";

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
    <article className="post">
      <PostHeader creator={creator} />
      {isVideo ? (
        <video controls autoPlay muted>
          <source src={`./assets/posts/${post}.mp4`} type="video/mp4" />
          <source src={`./assets/posts/${post}.ogg`} type="video/ogg" />
        </video>
      ) : (
        <img src={`./assets/posts/${post}.png`} alt={postAlt} />
      )}
      <PostFooter
        likesImage={likesImage}
        likesUser={likesUser}
        likesCount={likesCount}
        commentsCount={commentsCount}
        lastComment={lastComment}
      />
    </article>
  );
}
