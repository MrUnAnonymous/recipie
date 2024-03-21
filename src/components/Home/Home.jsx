import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  ButtonBase,
} from "@mui/material";
import useStyles from "../styles";

const Home = () => {
  const classes = useStyles();
  let apiKey = "9677c1771941430a9319adec0aaeb4f5";
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
  const [recipies, setRecipies] = useState([]);
  
  const openDetails = () => {
    console.log("openDetails");
  };

  

  useEffect(() => {
    const data = async () => {
      try { 
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let data = await response.json();
        setRecipies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    data();
    console.log(recipies);
  }, []);
 
  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <Grid container spacing={1} className={classes.mainGrid}>
          {recipies.map(({recpie, id}) => (
            <Grid item xs={12} sm={6} md={9} className={classes.cardGrid} key={id}>
              <ButtonBase component="span" name="test" onClick={openDetails}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image={recpie.image}
                    className={classes.media}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {recpie.title}
                    </Typography>
                    {/* <Typography variant="subtitle2">
                      Pasta is a type of starchy food that is made from flour,
                      water, and eggs, and then formed into sheets or other
                      shapes. The dough is usually made from semolina, which
                      comes from the endosperm of durum wheat, and contains a
                      lot of gluten.
                    </Typography> */}
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
