import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

export default function ResultPage({ foodData, setFoodData }) {
  const navigate = useNavigate();
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "e9eb463b31cb4a3da017ded2c7439ad7";
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  useEffect(() => {
    async function fetchData() {
      console.log(query);
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchData();
  }, [query]);
  return (
    <div className="result-page">
      {foodData.map((food) => (
        <div key={food.id} className="result-individual">
          <h1>{food.title}</h1>
          <img src={food.image} alt="" />
        </div>
      ))}
    </div>
  );
}
