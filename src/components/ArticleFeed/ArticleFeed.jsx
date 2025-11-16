import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard/ArticleCard";
import { convertTimeStamp } from "../../utils/utils";
import { Link, useSearchParams } from "react-router-dom";
import "./ArticleFeed.css";

function ArticleFeed() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const apiEndpoint = new URL(
      `https://newsit-xcqx.onrender.com/api/articles`
    );
    searchParams.forEach((value, key) => {
      apiEndpoint.searchParams.append(key, value);
    });
    fetch(apiEndpoint.toString())
      .then((response) => {
        if (!response.ok) {
          setError(`This page does not exist.`);
          setIsLoading(false);
          return;
        }
        return response.json();
      })
      .then((data) => {
        const { articles } = data;
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  function handleSelect(userQuery) {
    const [category, order] = userQuery.split(",");
    setSearchParams({ sort_by: category, order: order });
  }

  if (isLoading) {
    return <div>Loading content</div>;
  }

  if (error) {
    return (
      <div className="error-section">
        {error} Please click{" "}
        <Link className="topic-highlight" to="/">
          here
        </Link>{" "}
        to return to the homepage{" "}
      </div>
    );
  }

  return (
    <ul className="articleFeed">
      <label>
        {" "}
        Sort Articles
        <select
          name="sort_by"
          defaultValue={"created_at,DESC"}
          onChange={(event) => handleSelect(event.target.value)}
        >
          <option value="created_at,DESC">Most Recent</option>
          <option value="votes,DESC">Most Voted</option>
          <option value="votes,ASC">Least Voted</option>
          <option value="comment_count,DESC">Most Commented</option>
          <option value="comment_count,ASC"> Least Commented</option>
          <option value="created_at,ASC">Oldest</option>
        </select>
      </label>
      {articleList.map((article) => {
        return (
          <ArticleCard key={article.article_id} article_id={article.article_id}>
            {" "}
            <div className="topic-highlight">{article.topic}</div>{" "}
            <h3>{article.title}</h3>
            <div className="bottomRow">
              <u>Votes</u> {article.votes}
              <u>Comments</u> {article.comment_count}
              <u>Created</u> {convertTimeStamp(article.created_at)}
            </div>
            <u>User </u> {article.author}
            <img className="image" src={`${article.article_img_url}`} />{" "}
          </ArticleCard>
        );
      })}
    </ul>
  );
}

export default ArticleFeed;
