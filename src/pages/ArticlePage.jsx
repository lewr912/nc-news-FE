import { useEffect, useState } from "react";
import ArticleContent from "../components/ArticleContent/ArticleContent";
import { useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection/CommentSection";

function ArticlePage() {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  function fetchArticleData() {
    setIsLoading(true);
    fetch(`https://newsit-xcqx.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const { article } = data;
        setArticleData(article);
        setIsLoading(false);
      })
      .catch((error) => {
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
