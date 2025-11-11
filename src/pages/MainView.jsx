import { useEffect, useState } from "react";
import ArticleFeed from "../components/ArticleFeed/ArticleFeed";
import TopicsBar from "../components/TopicsBar/TopicsBar";
import "./MainView.css";

function MainView() {
  return (
    <main>
      <TopicsBar />
      <ArticleFeed />
    </main>
  );
}

export default MainView;
