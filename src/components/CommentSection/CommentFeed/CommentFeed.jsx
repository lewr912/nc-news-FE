import CommentCard from "./CommentCard/CommentCard";
import "./CommentFeed.css";

function CommentFeed({ commentsForArticle }) {
  return (
    <ul id="commentFeed">
      {commentsForArticle.map((comment) => {
        return <CommentCard key={comment.comment_id} commentDetails={comment} />;
      })}
    </ul>
  );
}

export default CommentFeed;
