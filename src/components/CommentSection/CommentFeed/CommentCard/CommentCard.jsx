import { convertTimeStamp } from "../../../../utils/utils";
import "./CommentCard.css";

function CommentCard({ commentDetails }) {
  const { body, votes, author, created_at } = commentDetails;
  return (
    <li className="commentCard">
      <u> Author </u>
      {author}
      <u> Body </u>
      {body}
      <div className="bottomRow">
        <u> Votes</u> {votes}
        <u> Created</u> {convertTimeStamp(created_at)}
      </div>
    </li>
  );
}

export default CommentCard;
