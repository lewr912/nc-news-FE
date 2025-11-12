import "./CommentCard.css";

function CommentCard({ commentDetails }) {
  const { body, votes, author, created_at } = commentDetails;
  return (
    <li className="commentCard">
      <u> Author </u> {author}
      <u> Body </u>
      {body}
      <u> Votes</u> {votes}
      <u> Created</u> {created_at}
    </li>
  );
}

export default CommentCard;
