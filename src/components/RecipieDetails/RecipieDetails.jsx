import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import "./styles.css";
import { useParams } from "react-router-dom";

const RecipieDetails = () => {
  let apiKey = "47fd5871843f405c83c87c213a10a0ab";
  //let apiKey = "9677c1771941430a9319adec0aaeb4f5";
  // let apiKey = "b08a4cbb4d494eac81a0a5aa8fa2a505";
  const { id } = useParams;
  const [recipeData, setRecipeData] = useState(null);
  const ID = window.location.pathname.split("/")[1];

  useEffect(() => {
    console.log("ID", id);
    const fetchRecipeDetails = async () => {
      try {
        const url = `https://api.spoonacular.com/recipes/${ID}/information?apiKey=${apiKey}`;
        const response = await axios.get(url);
        console.log("RESPONSE_------>", response.data);
        setRecipeData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  useEffect(() => {
    console.log("Result", recipeData);
  });

  return (
    <div className="mainContainer">
      <h1 className="merriweather-black">Recipie</h1>
      {recipeData && (
        <div className="container">
          <img src={recipeData.image} alt="food" className="recipieImage" />
          <div className="dataContainer">
            <h4 className="merriweather-regular">Summary</h4>
            <Typography
              gutterBottom
              variant="body1"
              dangerouslySetInnerHTML={{ __html: recipeData.summary }}
              className="poppins-light"
            />
            
            <h4 className="merriweather-regular">Ingredients</h4>
            <p>
              <ul>
                {recipeData.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className="poppins-light">
                    {ingredient.original}
                  </li>
                ))}
              </ul>
            </p>

            <h4 className="merriweather-regular">Instructions</h4> 
            <Typography
              gutterBottom
              variant="body1"
              dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
              className="poppins-light"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipieDetails;
