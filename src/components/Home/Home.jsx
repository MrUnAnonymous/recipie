import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  let apiKey = process.env.REACT_APP_API_KEY;


  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
  const [recipes, setRecipes] = useState([]);

  const openDetails = (id) => {
    navigate(`/${id}/information`);
  };

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(url);
        setRecipes(response.data.results);
        console.log("Response", response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, [url]);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <div className="mainContainer">
      {recipes &&
        recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <div
              style={{ cursor: "pointer" }}
              className="actionContainer"
              onClick={() => openDetails(recipe.id)}
            >
              <div className="cardMedia">
                <img src={recipe.image} alt="Dish" className="cardImage" />
              </div>
              <div className="cardTitle">
                <h2 className="title">{recipe.title}</h2>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
