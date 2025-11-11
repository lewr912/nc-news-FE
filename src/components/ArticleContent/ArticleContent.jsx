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
      <div>
        <u>Votes</u> {votes}
      </div>
      <div>
        {" "}
        <u>Created</u> {created_at}
      </div>
      <div>
        {" "}
        <u>Comments</u> {comment_count}
      </div>
      <div>
        <u>Body</u> {body}
      </div>

      <img src={`${article_img_url}`} />
    </section>
  );
}
<u></u>;
export default ArticleContent;
