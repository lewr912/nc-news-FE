import "./VoteButtons.css"

function UpVote({ onVote, isDisabled }) {
    return <button className="voteButton" id="upVote" onClick={onVote} disabled={isDisabled}></button>
}

export default UpVote;

