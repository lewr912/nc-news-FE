function DownVote( {onVote, isDisabled} ) {
    return <button className="downVote" onClick={onVote} disabled={isDisabled}></button>
}

export default DownVote;