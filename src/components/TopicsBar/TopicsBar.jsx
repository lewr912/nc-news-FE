import { useEffect, useState } from "react";
import TopicTab from "./TopicTab/TopicTab";
import "./TopicsBar.css"

function TopicsBar() {
    const [availableTopics, setAvailableTopics] = useState([])

    useEffect(() => {
        fetch(`https://newsit-xcqx.onrender.com/api/topics`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const { topics } = data;
            setAvailableTopics(topics)
        })
    }, [])


    return <nav id="topicsBar">
        {availableTopics.map(({slug}) => {
            return <TopicTab key={slug} topicName={slug}><div>{slug}</div></TopicTab>
        })}
        
    </nav>
}

export default TopicsBar;