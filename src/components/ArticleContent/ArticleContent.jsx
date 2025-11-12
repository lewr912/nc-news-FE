import "./ArticleContent.css";

function ArticleContent({ articleData }) {
  const {
    article_img_url,
    author,
    body,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = articleData;
  return (
    <section id="articleContent">
      <h3>{title}</h3>
      <div>
        <u>User</u> {author}
      </div>
      <ul className="bottomRow"> <li>
        <u>Votes</u> {votes}
      </li>
      <li>
        {" "}
        <u>Created</u> {created_at}
      </li>
      <li>
        {" "}
        <u>Comments</u> {comment_count}
      </li> </ul>
      
      <div>
        <u>Body</u> {body}
      </div>

      <img className="image" src={`${article_img_url}`} />
    </section>
  );
}
<u></u>;
export default ArticleContent;
