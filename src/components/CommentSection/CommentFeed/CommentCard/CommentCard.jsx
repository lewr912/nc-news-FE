import { convertTimeStamp } from "../../../../utils/utils";
import { CURRENT_USER } from "../../../../userStorage";
import { useState } from "react";
import "./CommentCard.css";

function CommentCard({ commentDetails, onCommentDelete }) {
  const { body, votes, author, created_at, comment_id } = commentDetails;
  const [deleteLoading, setDeleteLoading] = useState("")

  function deleteComment(commentToDelete){
    setDeleteLoading("Deleting Comment")
    if(CURRENT_USER === author){
      fetch(`https://newsit-xcqx.onrender.com/api/comments/${commentToDelete}`, 
        { method: "DELETE"})
        .then(() => {
          onCommentDelete()
          setDeleteLoading("")
        })
    }
  }

  if(CURRENT_USER === author){
    return (
    <li className="commentCard">
      <div><u> Author</u> - {author} </div>
      <u> Body </u>
      {body}
      <div className="bottomRow">
        <u> Votes</u> {votes}
        <u> Created</u> {convertTimeStamp(created_at)}
        <button type="button" className="deleteButton" onClick={() => deleteComment(comment_id)}>Delete Comment</button>
      </div>
    </li>
  );
    
  }


  return (
    <li className="commentCard">
      <u> Author </u>
      {author}
      <u> Body </u>
      {body}
      <div className="bottomRow">
        <u> Votes</u> {votes}
        <u> Created</u> {convertTimeStamp(created_at)}
      </div>
    </li>
  );
}

export default CommentCard;
