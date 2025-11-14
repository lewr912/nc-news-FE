import CommentCard from "./CommentCard/CommentCard";
import "./CommentFeed.css";

function CommentFeed({ commentsForArticle, onCommentDelete }) {
  return (
    <ul id="commentFeed">
      {commentsForArticle.map((comment) => {
        return <CommentCard key={comment.comment_id} commentDetails={comment} onCommentDelete={onCommentDelete} />;
      })}
    </ul>
  );
}

export default CommentFeed;
