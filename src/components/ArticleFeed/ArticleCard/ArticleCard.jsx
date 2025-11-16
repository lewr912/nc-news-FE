import { Link, NavLink } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ children, article_id }) {
 
  return (
    <li className="articleCard">
      <NavLink to={`/articles/${article_id}`}>{children}</NavLink>
    </li>
  );
}

export default ArticleCard;