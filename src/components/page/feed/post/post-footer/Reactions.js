import { useState } from "react";

export default function Reactions() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="reactions">
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon
        onClick={() => setIsBookmarked(!isBookmarked)}
        className="right-icon"
        name={isBookmarked ? "bookmark" : "bookmark-outline"}></ion-icon>
    </div>
  );
}
