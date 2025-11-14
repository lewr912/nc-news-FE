import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ children, article_id }) {
 
  return (
    <li className="articleCard">
      <Link to={`/articles/${article_id}`}>{children}</Link>
    </li>
  );
}

export default ArticleCard;
