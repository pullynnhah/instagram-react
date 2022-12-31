import { useState } from "react";

export default function PostComments({ comments, comment }) {
  const [commentText, setCommentText] = useState(comment);
  const [commentCount, setCommentCount] = useState(comments);
  const [input, setInput] = useState("");

  const [isLiked, setIsLiked] = useState(false);

  function updateComment() {
    setCommentText(input);
    setCommentCount(commentCount + 1);
    setInput("");
    setIsLiked(false);
  }

  return (
    <div className="comments">
      <button>
        Ver todos os {commentCount.toLocaleString("en-us")} comentários
      </button>
      <div className="old-comment">
        <p>{commentText}</p>
        <ion-icon
          onClick={() => setIsLiked(!isLiked)}
          name={isLiked ? "heart" : "heart-outline"}></ion-icon>
      </div>
      <div className="new-comment">
        <ion-icon name="happy-outline"></ion-icon>
        <input
          type="text"
          onChange={e => setInput(e.target.value)}
          value={input}
          placeholder="Adicione um comentário"
        />
        <button onClick={updateComment}>Publicar</button>
      </div>
    </div>
  );
}
