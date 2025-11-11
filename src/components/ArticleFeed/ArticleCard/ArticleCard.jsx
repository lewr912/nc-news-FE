import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ articleDetails }) {
  const {
    title,
    author,
    topic,
    votes,
    comment_count,
    created_at,
    article_img_url,
    article_id,
  } = articleDetails;
  

  return (
    <li className="articleCard">
        <Link to={`/articles/${article_id}`}>Expand</Link>
        <section>
      
      <h3>{title}</h3>
      <div>
        <u>User</u> {author}{" "}
      </div>
      <div>{topic} </div>
      </section>
       <ul className="bottomRow">
        <li>
          <u>Votes</u> {votes}
        </li>
        <li>
          <u>Comments</u> {comment_count}
        </li>
        <li>
          <u>Created</u> {created_at}
        </li>
      </ul>
      <img className="image" src={`${article_img_url}`} />
    </li>
  );
}

export default ArticleCard;
