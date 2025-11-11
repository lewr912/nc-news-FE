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


    return <ul id="topicsBar">
        {availableTopics.map(({slug}) => {
            return <TopicTab key={slug} topicName={slug}/>
        })}
        
    </ul>
}

export default TopicsBar;