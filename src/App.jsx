import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainView from "./pages/MainView";
import ArticlePage from "./pages/ArticlePage";
import "./App.css";
import TopicPage from "./pages/TopicPage";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/topic/:topic" element={<TopicPage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
      
    </div>
  );
}

export default App;