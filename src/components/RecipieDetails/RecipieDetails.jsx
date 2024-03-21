import React, { useState, useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import axios from 'axios'
import './styles.css'
import { useParams } from 'react-router-dom'

const RecipieDetails = () => {
  const { id } = useParams;
  const url = `https://api.spoonacular.com/recipes/${id}/information`;
  const [recipeData, setRecipeData] = useState([]);
  
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(url);
        setRecipeData(response.results);
      } catch (error) {
        console.log(error);
      }
  };
  fetchRecipeDetails();
  });

  return (
    <div className='mainContainer'>
      <Container maxWidth="lg">
        <div className='container'>
          <Typography variant='h3' component="h4" gutterBottom>Recipie</Typography>
          <img 
            src='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
            alt='food'
            className='recipieImage'
          />
        </div>
        <div className='container'>
          <Typography gutterBottom variant='h4'>
              Summary
          </Typography>

          <Typography gutterBottom variant='body1'>
          Pasta is a type of starchy food that is made from flour,
          water, and eggs, and then formed into sheets or other
          shapes. The dough is usually made from semolina, which
          comes from the endosperm of durum wheat, and contains a
          lot of gluten.
          </Typography>

          <Typography gutterBottom variant='h4'>
            Ingredients
          </Typography>

          <Typography gutterBottom variant='body1'>
            <ul>
              <li>1 tbsp butter</li>
              <li>about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces</li>
              <li>2 tbsp grated cheese (I used romano)</li>
              <li>1-2 tbsp extra virgin olive oil</li>
              <li>5-6 cloves garlic</li>
              <li>6-8 ounces pasta (I used linguine)</li>
              <li>couple of pinches red pepper flakes, optional</li>
              <li>salt and pepper, to taste</li>
              <li>3 scallions, chopped, white and green parts separated</li>
              <li>1/4 cup whole wheat bread crumbs (I used panko)</li>
            </ul>
          </Typography>

          <Typography gutterBottom variant='h4'>
            Instructions
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default RecipieDetails