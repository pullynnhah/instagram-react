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
  const [id, setId] = useState("hidden-white-heart");
  console.log(id);
  return (
    <article className="post">
      <PostHeader user={user} />
      <div className="post-item">
        <PostItem
          isVideo={isVideo}
          post={post}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          likesCount={likesCount}
          setLikesCount={setLikesCount}
          setId={setId}
        />
        <ion-icon id={id} name="heart"></ion-icon>
      </div>
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
