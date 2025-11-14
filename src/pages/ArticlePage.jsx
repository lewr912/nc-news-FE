import { useEffect, useState } from "react";
import ArticleContent from "../components/ArticleContent/ArticleContent";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection/CommentSection";

function ArticlePage() {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  function fetchArticleData() {
    setIsLoading(true);
    setError(null)
    fetch(`https://newsit-xcqx.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        if (!response.ok) {
          setError(`This article id is invalid.`)
        }
        return response.json();
      })
      .then((data) => {
        const { article } = data;
        setArticleData(article);
        setIsLoading(false);
      })
      .catch((message) => {
        setIsLoading(false);
      });
  }
  useEffect(() => {
    fetchArticleData();
  }, []);

  function handleSubmittedComment() {
    fetchArticleData();
  }

  if (isLoading) {
    return <div>Loading content</div>;
  }

  if(error){
    return ( <div>{error} Please click <Link to="/" >here</Link> to return to the homepage </div> )
  }

  return (
    <div>
      article page
      <ArticleContent articleData={articleData} />
      <CommentSection
        article_id={article_id}
        onCommentSubmit={handleSubmittedComment}
      />
    </div>
  );
}

export default ArticlePage;
