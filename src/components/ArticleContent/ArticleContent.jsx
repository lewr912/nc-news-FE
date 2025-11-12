import { useEffect, useState } from "react";
import DownVote from "../VoteButtons/DownVote";
import UpVote from "../VoteButtons/UpVote";
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
    article_id
  } = articleData;
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [userVoteDirection, setUserVoteDirection] = useState(null)
  useEffect(() => {
    setCurrentVotes(votes)
  }, [votes])


  function handleVote(userVote){
    (userVote === 1 ? setUserVoteDirection("up") : setUserVoteDirection("down"))
    const newVotes = currentVotes + userVote
    setCurrentVotes(newVotes)
    fetch(`https://newsit-xcqx.onrender.com/api/articles/${article_id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inc_votes: userVote }),
  }).then((response) => {
    if (response.ok) {
    return response.json();}
  })
  .then((data) => {
    setCurrentVotes(data.article.votes)
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });
  }

  return (
    <section id="articleContent">
      <div>
        <u>User</u> {author} <h3>{title}</h3>
      </div>

      <div>
        <u>Body</u> {body}
      </div>
      <ul className="bottomRow">
        {" "}
        <li>
          <UpVote onVote={() => handleVote(1)} isDisabled={userVoteDirection === "up"}/>
          <u>Votes</u> {currentVotes}
          <DownVote onVote={() => handleVote(-1) } isDisabled={userVoteDirection === "down"} />
        </li>
        <li>
          {" "}
          <u>Created</u> {created_at}
        </li>
        <li>
          {" "}
          <u>Comments</u> {comment_count}
        </li>{" "}
      </ul>

      <img className="image" src={`${article_img_url}`} />
    </section>
  );
}
<u></u>;
export default ArticleContent;
