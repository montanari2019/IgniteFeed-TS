import stylesComments from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";


interface CommentProps{
  comment: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ comment, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment() {
      onDeleteComment(comment);
  }

  function handleLikeCount() {
    setLikeCount((state) =>{
      return state + 1
    });
  }

  return (
    <div className={stylesComments.comment}>
      <Avatar hasBorder={false} src="https://github.com/montanari2019.png" />

      <div className={stylesComments.commentBox}>
        <div className={stylesComments.commentContent}>
          <header>
            <div className={stylesComments.authorAndTime}>
              <strong>Ikaro Montanari</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>

          </header>

          <p>{comment}</p>

        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20} /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
