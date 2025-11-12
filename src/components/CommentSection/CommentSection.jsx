import CommentFeed from "./CommentFeed/CommentFeed";
import NewCommentForm from "./NewCommentForm/NewCommentForm";
import "./CommentSection.css";

function CommentSection({article_id}) {
  return (
    <section id="commentSection">
      <NewCommentForm article_id={article_id}/>
      <CommentFeed />
    </section>
  );
}

export default CommentSection;
