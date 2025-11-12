import "./CommentCard.css";

function CommentCard({ commentDetails }) {
  const { body, votes, author, created_at } = commentDetails;
  return (
    <li className="commentCard">
      <u> Author </u>{author}
      <u> Body </u>{body}
      <ul className="bottomRow">
        <li><u> Votes</u> {votes}</li>
        <li><u> Created</u> {created_at}</li>

      </ul>
      
      
    </li>
  );
}

export default CommentCard;
