import CommentFeed from "./CommentFeed/CommentFeed";
import NewCommentForm from "./NewCommentForm/NewCommentForm";
import "./CommentSection.css";
import { useEffect, useState } from "react";

function CommentSection({ article_id, onCommentSubmit }) {
  const [commentsForArticle, setCommentsForArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchCommentsForArticle() {
    setIsLoading(true);
    fetch(
      `https://newsit-xcqx.onrender.com/api/articles/${article_id}/comments`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const { comments } = data;
        setCommentsForArticle(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }
  useEffect(() => {
    fetchCommentsForArticle();
  }, []);

  function handleNewComment() {
    fetchCommentsForArticle();
  }

  if (isLoading) {
    return <div>Loading comments</div>;
  }

  return (
    <div id="commentSection">
      <NewCommentForm
        article_id={article_id}
        onSubmitSuccess={onCommentSubmit}
        onCommentRefetch={handleNewComment}
      />
      <CommentFeed commentsForArticle={commentsForArticle} onCommentDelete={onCommentSubmit}/>
    </div>
  );
}

export default CommentSection;
