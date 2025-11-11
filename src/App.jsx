import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainView from "./pages/MainView";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
      
    </div>
  );
}

export default App;
