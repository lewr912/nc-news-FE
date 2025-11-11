import "./ArticleContent.css"

function ArticleContent({articleData}) {
    const { article_img_url, author, body, comment_count, created_at, title, topic, votes } = articleData;
    return <section id="articleContent">
        <h3>{title}</h3>
        <div>User - {author}</div>
        <div>Votes - {votes}</div>
        <div>Created - {created_at}</div>
        <div>Comments - {comment_count}</div>
        <div>Body - {body}</div>

        <img src={`${article_img_url}`}/>
        </section>
}

export default ArticleContent;