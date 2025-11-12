function DownVote( {onVote, isDisabled} ) {
    return <button className="voteButton" id="downVote" onClick={onVote} disabled={isDisabled}></button>
}

export default DownVote;