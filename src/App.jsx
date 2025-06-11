import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/Search";
import ResultPage from "./components/Result";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route
          path="/result"
          element={<ResultPage foodData={foodData} setFoodData={setFoodData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
