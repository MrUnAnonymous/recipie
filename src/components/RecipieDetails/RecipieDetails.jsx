import React, { useState, useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import axios from 'axios'
import './styles.css'
import { useParams } from 'react-router-dom'

const RecipieDetails = () => {
  const { id } = useParams;
  const [recipeData, setRecipeData] = useState([]);
  
  useEffect(() => {
    console.log("ID", id);
    //const fetchRecipeDetails = async () => {
      // try {
        // const url = `https://api.spoonacular.com/recipes/${id}/information`;
        // const response = await axios.get(url);
        // setRecipeData(response.data.results);
      // } catch (error) {
      //   console.log(error);
      // }
  //};
  //fetchRecipeDetails();
  }, [id]);

  useEffect(() => {
    console.log(id);
  console.log( "Result", recipeData) 
  },[id])

  return (
    <div className='mainContainer'>
      <Container maxWidth="lg">
      {/* {recipeData && ( */}
        <div className='container'>
          <Typography variant='h3' component="h4" gutterBottom>Recipie</Typography>
          <img 
            src='{recipeData.image}'
            alt='food'
            className='recipieImage'
          />
        </div>
        <div className='container'>
          <Typography gutterBottom variant='h4'>
              Summary
          </Typography>

          <Typography gutterBottom variant='body1'>
            '{recipeData.summary}'
          </Typography>

          <Typography gutterBottom variant='h4'>
            Ingredients
          </Typography>

          <Typography gutterBottom variant='body1'>
          {/* <ul>
            {recipeData.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul> */}
          </Typography>

          <Typography gutterBottom variant='h4'>
            Instructions
          </Typography>
        </div>
        {/* )} */}
      </Container>
    </div>
  )
}

export default RecipieDetails