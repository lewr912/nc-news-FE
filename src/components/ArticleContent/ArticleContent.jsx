import { useEffect, useState } from "react";
import VoteButton from "../VoteButtons/VoteButton";
import "./ArticleContent.css";
import "../VoteButtons/VoteButtons.css";
import { convertTimeStamp } from "../../utils/utils";

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
    article_id,
  } = articleData;

  const [currentVotes, setCurrentVotes] = useState(votes);
  const [userVoteDirection, setUserVoteDirection] = useState("none");

  useEffect(() => {
    setCurrentVotes(votes);
  }, [votes]);

  function handleVote(voteDirection) {
    let userVote = 0;
    if (userVoteDirection === voteDirection) {
      userVote = voteDirection === "up" ? -1 : 1;
      setUserVoteDirection("none");
    } else {
      if (userVoteDirection === "none") {
        userVote = voteDirection === "up" ? 1 : -1;
      } else {
        userVote = voteDirection === "up" ? 2 : -2;
      }
      setUserVoteDirection(voteDirection);
    }

    const newVotes = currentVotes + userVote;
    setCurrentVotes(newVotes);

    fetch(`https://newsit-xcqx.onrender.com/api/articles/${article_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: userVote }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setCurrentVotes(data.article.votes);
      });
  }

  return (
    <section id="articleContent">
      <u>Author</u> {author}
      <h3>{title}</h3>
      <u>Body</u>
      {body}
      <div className="bottomRow">
        <div>
          <VoteButton id={"upVote"} onVote={() => handleVote("up")} />
          <u>Votes</u> {currentVotes}
          <VoteButton id={"downVote"} onVote={() => handleVote("down")} />
        </div>
        <u>Comments</u> {comment_count}
        <u>Created</u>
        {convertTimeStamp(created_at)}
      </div>
      <img className="image" src={`${article_img_url}`} />
    </section>
  );
}

export default ArticleContent;
