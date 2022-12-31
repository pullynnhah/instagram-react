import { useState } from "react";

export default function PostComments({ comments, comment }) {
  const [comment, setComment] = useState(comment);
  const [commentInput, setCommentInput] = useState("");
  const [commentCount, setCommentCount] = useState(comments);

  function updateComment() {
    setComment(input);
    setCommentCount(commentCount + 1);
  }

  return (
    <div className="comments">
      <button>
        Ver todos os {commentCount.toLocaleString("en-us")} comentários
      </button>
      <div className="old-comment">
        <p>{comment}</p>
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="new-comment">
        <ion-icon name="happy-outline"></ion-icon>
        <input
          type="text"
          onChange={e => setComment(e.target.value)}
          value={comment}
          placeholder="Adicione um comentário"
        />
        <button onClick={updateComment}>Publicar</button>
      </div>
    </div>
  );
}
