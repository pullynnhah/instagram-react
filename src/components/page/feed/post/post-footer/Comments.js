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
    <div className="comments">
      <button className="all-comments">
        Ver todos os {counter.toLocaleString("pt-br")} comentários
      </button>

      <div className="comment">
        <p>{comment}</p>
        <ion-icon
          onClick={() => setIsLiked(!isLiked)}
          name={isLiked ? "heart" : "heart-outline"}></ion-icon>
      </div>

      <div className="new-comment">
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
