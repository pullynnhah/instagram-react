import PostLikes from "./PostLikes";
import PostReactions from "./PostReactions";

export default function PostFooter({
  userLikesSrc,
  userLikes,
  likesCount,
  setLikesCount,
  isLiked,
  setIsLiked,
}) {
  return (
    <div className="post-footer">
      <PostReactions
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        likesCount={likesCount}
        setLikesCount={setLikesCount}
      />
      <PostLikes
        userLikesSrc={userLikesSrc}
        userLikes={userLikes}
        likesCount={likesCount}
      />
    </div>
  );
}
