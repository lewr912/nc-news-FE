import { Link } from "react-router-dom";
import "./ArticleCard.css"

function ArticleCard({articleDetails}) {
    
    
    const {title, author, topic, votes, comment_count, created_at, article_img_url, article_id} = articleDetails;
    
    return  <li className="articleCard">
        <Link to={`/articles/${article_id}`}>EXPAND ARTICLE</Link>
        <h3>{title}</h3>
        <div>{author}  </div>
        <div>{topic} </div>
        <ul>  
            <li>{votes}</li>
            <li>{comment_count}</li>
            <li>{created_at}</li>
        </ul>
        
        <img src={`${article_img_url}`}/>
    </li>
}

export default ArticleCard;