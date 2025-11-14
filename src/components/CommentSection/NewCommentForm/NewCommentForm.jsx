import { useState } from "react";
import "./NewCommentForm.css";

function NewCommentForm({ article_id, onSubmitSuccess, onCommentRefetch }) {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newComment.trim() === "") {
      setError("Please enter a comment");
      return;
    }
    if (newComment.length < 4) {
      setError("Minimum comment length is 4 characters 🙂");
      return;
    }
    setError("");
    fetch(
      `https://newsit-xcqx.onrender.com/api/articles/${article_id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "grumpy19", body: `${newComment}` }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setNewComment("");
        onSubmitSuccess();
        onCommentRefetch();
      });
  }
  function handleChange(event) {
    setNewComment(event.target.value);
    if (error) setError("");
  }

  return (
    <form id="commentForm" onSubmit={handleSubmit}>
      <label htmlFor="userComment">Leave a comment</label>
      <input
        type="text"
        name="userComment"
        id="userComment"
        value={newComment}
        onChange={handleChange}
      />
      {error && <p role="alert"> {error} </p>}
      <button className="submitButton" type="submit">
        Submit Comment
      </button>
    </form>
  );
}

export default NewCommentForm;
