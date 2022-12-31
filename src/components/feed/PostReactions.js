import { useState } from "react";

export default function PostReactions({
  isLiked,
  setIsLiked,
  likesCount,
  setLikesCount,
}) {
  const [isSaved, setIsSaved] = useState(false);

  function updateLikeBtn() {
    const update = isLiked ? -1 : 1;
    setIsLiked(!isLiked);
    setLikesCount(likesCount + update);
  }
  return (
    <div className="reactions">
      <ion-icon
        onClick={updateLikeBtn}
        name={isLiked ? "heart" : "heart-outline"}></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon
        onClick={() => setIsSaved(!isSaved)}
        name={isSaved ? "bookmark" : "bookmark-outline"}></ion-icon>
    </div>
  );
}
