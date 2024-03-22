import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import "./styles.css";
import { useParams } from "react-router-dom";

const RecipieDetails = () => {
  //let apiKey = "9677c1771941430a9319adec0aaeb4f5";

  let apiKey = "b08a4cbb4d494eac81a0a5aa8fa2a505";
  const { id } = useParams;
  const [recipeData, setRecipeData] = useState(null);
  const ID = window.location.pathname.split("/")[1];

  useEffect(() => {
    console.log("ID", id);
    const fetchRecipeDetails = async () => {
      try {
        const url = `https://api.spoonacular.com/recipes/${ID}/information?apiKey=${apiKey}`;
        const response = await axios.get(url);
        console.log("RESPONSE_------>" ,response.data);
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
      <Container maxWidth="lg">
        {recipeData &&
          <div>
            <div className="container">
              <Typography variant="h3" component="h4" gutterBottom>
                Recipie
              </Typography>
              <img
                src={recipeData.image}
                alt="food"
                className="recipieImage"
              />
            </div>
            <div className="container">
              <Typography gutterBottom variant="h4">
                Summary
              </Typography>

              <Typography gutterBottom variant="body1">
                {recipeData.summary}
              </Typography>

              <Typography gutterBottom variant="h4">
                Ingredients
              </Typography>

              <Typography gutterBottom variant="body1">
                <ul>
                  {recipeData.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.original}</li>
                  ))}
                </ul>
              </Typography>

              <Typography gutterBottom variant="h4">
                Instructions
              </Typography>

              <Typography gutterBottom variant="body1">
                  {recipeData.instructions}
              </Typography>
            </div>
          </div>
        }
      </Container>
    </div>
  );
};

export default RecipieDetails;
