import { useEffect, useState } from "react";
import ArticleContent from "../components/ArticleContent/ArticleContent";
import { useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection/CommentSection";


function ArticlePage() {
  const [articleData, setArticleData] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetch(`https://newsit-xcqx.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { article } = data;
        setArticleData(article);
      });
  }, []);

  return (
    <main>
      article page
      <ArticleContent articleData={articleData} />
      <CommentSection />
    </main>
  );
}

export default ArticlePage;
