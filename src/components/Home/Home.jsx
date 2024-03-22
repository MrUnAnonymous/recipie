import React, { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Typography, Grid, ButtonBase } from "@mui/material";
import useStyles from "./styles";
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios";

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  //let apiKey = "9677c1771941430a9319adec0aaeb4f5";

  let apiKey = "b08a4cbb4d494eac81a0a5aa8fa2a505";

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
    <div className={classes.mainContainer}>
      <Container maxWidth="xl" className={classes.container}>
        <Grid className={classes.mainGrid}>
          {recipes && recipes.map((recipe) => (
            <Grid key={recipe.id} item xs={12} sm={12} md={6} lg={3} className={classes.cardGrid}>
            <ButtonBase component="span" name="test" onClick={() => openDetails(recipe.id)}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image={recipe.image}
                    className={classes.media}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {recipe.title}
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>
          ))} 
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
