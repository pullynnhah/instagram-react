import { useState } from "react";
import PostComments from "./PostComments";

import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostItem from "./PostItem";

export default function Post({
  likes,
  user,
  isVideo,
  post,
  userLikesSrc,
  userLikes,
  comments,
  comment,
}) {
  const [likesCount, setLikesCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <article className="post">
      <PostHeader user={user} />
      <PostItem
        isVideo={isVideo}
        post={post}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        likesCount={likesCount}
        setLikesCount={setLikesCount}
      />
      <PostFooter
        userLikesSrc={userLikesSrc}
        userLikes={userLikes}
        likesCount={likesCount}
        setLikesCount={setLikesCount}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
      <PostComments comments={comments} comment={comment} />
    </article>
  );
}
