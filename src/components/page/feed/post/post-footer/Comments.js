import { useState } from "react";

export default function Comments({ commentsCount, lastComment }) {
  const [counter, setCounter] = useState(commentsCount);
  const [comment, setComment] = useState(lastComment);
  const [isLiked, setIsLiked] = useState(false);
  const [input, setInput] = useState("");

  function addComment() {
    setComment(input);
    setInput("");
    setCounter(counter + 1);
    setIsLiked(false);
  }
  return (
    <div class="comments">
      <button class="all-comments">
        Ver todos os {counter.toLocaleString("pt-br")} comentários
      </button>

      <div class="comment">
        <p>{comment}</p>
        <ion-icon
          onClick={() => setIsLiked(true)}
          name={isLiked ? "heart" : "heart-outline"}></ion-icon>
      </div>

      <div class="new-comment">
        <ion-icon name="happy-outline"></ion-icon>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          placeholder="Adicione um comentário"
        />
        <button onClick={addComment}>Publicar</button>
      </div>
    </div>
  );
}
