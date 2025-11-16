import { NavLink } from "react-router-dom";
import "./TopicTab.css";

function TopicTab({ topicName, children }) {
  return (
    <NavLink
      to={`/topic/${topicName}`}
      className={({ isActive }) =>
        isActive ? "topicTab active-tab" : "topicTab"
      }
    >
      {children}
    </NavLink>
  );
}

export default TopicTab;
