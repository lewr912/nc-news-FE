import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard/ArticleCard"
import "./ArticleFeed.css"

function ArticleFeed() {
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
        fetch(`https://newsit-xcqx.onrender.com/api/articles`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const { articles } = data;
            setArticleList(articles);
        })
    }, [])
    
    return <ul id="articleFeed">
        {articleList.map((article) => {
            return <ArticleCard key={article.article_id} articleDetails={article}/>
        })}
    </ul>
}

export default ArticleFeed