import { useState } from "react";

export default function Reactions({ isLiked, updateIsLiked }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="reactions">
      <ion-icon onClick={updateIsLiked} name={isLiked ? "heart" : "heart-outline"}></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>

      <ion-icon
        onClick={() => setIsBookmarked(!isBookmarked)}
        name={isBookmarked ? "bookmark" : "bookmark-outline"}></ion-icon>
    </div>
  );
}
