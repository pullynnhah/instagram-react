export default function PostItem({
  isVideo,
  post,
  isLiked,
  setIsLiked,
  likesCount,
  setLikesCount,
  setId,
}) {
  function likePost() {
    if (!isLiked) {
      setIsLiked(true);
      setLikesCount(likesCount + 1);
      setId("white-heart");
      setTimeout(() => setId("hidden-white-heart"), 500);
    }
  }

  return (
    <>
      {isVideo ? (
        <video controls autoPlay muted onDoubleClick={likePost}>
          <source src={`./assets/posts/${post}.mp4`} type="video/mp4" />
          <source src={`./assets/posts/${post}.ogg`} type="video/ogg" />
        </video>
      ) : (
        <img
          src={`./assets/posts/${post}.png`}
          alt={post}
          onDoubleClick={likePost}
        />
      )}
    </>
  );
}
