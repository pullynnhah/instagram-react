import { useState } from "react";

export default function Reactions() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div class="reactions">
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon
        onClick={() => setIsBookmarked(!isBookmarked)}
        class="right-icon"
        name={isBookmarked ? "bookmark" : "bookmark-outline"}></ion-icon>
    </div>
  );
}
