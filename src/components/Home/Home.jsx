import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  let apiKey = "3377c9f5c068421e8be1db3fa95328ac";
  //let apiKey = "47fd5871843f405c83c87c213a10a0ab";
  //let apiKey = "9677c1771941430a9319adec0aaeb4f5";
  //let apiKey = "b08a4cbb4d494eac81a0a5aa8fa2a505";

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
