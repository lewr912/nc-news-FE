import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard/ArticleCard";
import { convertTimeStamp } from "../../utils/utils";
import "./ArticleFeed.css";

convertTimeStamp;
function ArticleFeed() {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    fetch(`https://newsit-xcqx.onrender.com/api/articles`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { articles } = data;
        setArticleList(articles);
      });
  }, []);

  return (
    <ul id="articleFeed">
      {articleList.map((article) => {
        return (
          <ArticleCard key={article.article_id} article_id={article.article_id}>
            {" "}
            <div>
              <u>Topic</u> {article.topic} <h3>{article.title}</h3>
            </div>
            <div className="bottomRow">
              <u>Votes</u> {article.votes}
              <u>Comments</u> {article.comment_count}
              <u>Created</u> {convertTimeStamp(article.created_at)}
            </div>
            <u>User</u> {article.author}
            <img className="image" src={`${article.article_img_url}`} />{" "}
          </ArticleCard>
        );
      })}
    </ul>
  );
}

export default ArticleFeed;
