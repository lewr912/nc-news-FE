function VoteButton( {onVote, id} ) {
    return <button className="voteButton" id={id} onClick={onVote}></button>
}
export default VoteButton;