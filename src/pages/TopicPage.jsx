import { useParams, useSearchParams } from "react-router-dom";
import TopicsBar from "../components/TopicsBar/TopicsBar";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleFeed/ArticleCard/ArticleCard";
import { convertTimeStamp } from "../utils/utils";

function TopicPage() {
    const { topic } = useParams();
    const [articlesForTopic, setArticlesForTopic] = useState([])

    useEffect(() => {
            fetch(`https://newsit-xcqx.onrender.com/api/articles/?topic=${topic}`)
            .then((response) => {
                if(response.ok){
                return response.json();
                }
            })
            .then((data) => {
                const { articles } = data;
                setArticlesForTopic(articles)
               
            })
    }, [topic])
    useEffect(() => {
        fetch(`https://newsit-xcqx.onrender.com/api/topics`)

    })

  return (
    <main>
      <TopicsBar />
      <ul className="articleFeed">
        {articlesForTopic.map((article) => {
            return (
                <ArticleCard key={article.article_id} article_id={article.article_id}>
                    {" "}
                                <div>
                                   <div className="topic-highlight" >{article.topic}</div> <h3 >{article.title}</h3>
                                </div>
                                <div className="bottomRow">
                                  <u>Votes</u> {article.votes}
                                  <u>Comments</u> {article.comment_count}
                                  <u>Created</u> {convertTimeStamp(article.created_at)}
                                </div>
                                <div><u>Author</u> - {article.author}</div>
                                
                                <img className="image" src={`${article.article_img_url}`} />{" "}
                </ArticleCard>
            )
        })}
      </ul>


    </main>
  );
}

export default TopicPage;
