import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard/CommentCard";
import "./CommentFeed.css";

function CommentFeed() {
  const { article_id } = useParams();
  const [commentsForArticle, setCommentsForArticle] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsit-xcqx.onrender.com/api/articles/${article_id}/comments`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { comments } = data;
        setCommentsForArticle(comments);
      })
  }, []);

  return (
    <ul id="commentFeed">
      {commentsForArticle.map((comment) => {
        const { body, votes, author, created_at } = comment;
        return <CommentCard key={body} commentDetails={comment} />;
      })}
    </ul>
  );
}

export default CommentFeed;
