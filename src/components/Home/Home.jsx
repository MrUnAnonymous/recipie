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
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // let apiKey = "9677c1771941430a9319adec0aaeb4f5";
  // const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
  const [recipies, setRecipies] = useState({
    id: '',
    title: '',
    image: ''
  });
  
  const openDetails = () => {
    navigate('/recipie');
  };

  // useEffect(() => {
  //   const data = async () => {
  //     try { 
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error: Status ${response.status}`);
  //       }
  //       let data = await response.json();
  //       setRecipies(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   data();
  //   console.log(recipies);
  // }, []);
 
  return (
    <div className={classes.mainContainer}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid spacing={3} className={classes.mainGrid}>
          {/* {recipies.map(({recpie, id}) => ( */}
            <Grid item xs={12} sm={12} md={6} lg={3} className={classes.cardGrid}>
              
            <ButtonBase component="span" name="test" onClick={openDetails}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
                    className={classes.media}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pasta
                    </Typography>
                    <Typography variant="subtitle2">
                      Pasta is a type of starchy food that is made from flour,
                      water, and eggs, and then formed into sheets or other
                      shapes. The dough is usually made from semolina, which
                      comes from the endosperm of durum wheat, and contains a
                      lot of gluten.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>

              <ButtonBase component="span" name="test" onClick={openDetails}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
                    className={classes.media}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pasta
                    </Typography>
                    <Typography variant="subtitle2">
                      Pasta is a type of starchy food that is made from flour,
                      water, and eggs, and then formed into sheets or other
                      shapes. The dough is usually made from semolina, which
                      comes from the endosperm of durum wheat, and contains a
                      lot of gluten.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>

              <ButtonBase component="span" name="test" onClick={openDetails}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
                    className={classes.media}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pasta
                    </Typography>
                    <Typography variant="subtitle2">
                      Pasta is a type of starchy food that is made from flour,
                      water, and eggs, and then formed into sheets or other
                      shapes. The dough is usually made from semolina, which
                      comes from the endosperm of durum wheat, and contains a
                      lot of gluten.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>

              <ButtonBase component="span" name="test" onClick={openDetails}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
                    className={classes.media}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pasta
                    </Typography>
                    <Typography variant="subtitle2">
                      Pasta is a type of starchy food that is made from flour,
                      water, and eggs, and then formed into sheets or other
                      shapes. The dough is usually made from semolina, which
                      comes from the endosperm of durum wheat, and contains a
                      lot of gluten.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>

              <ButtonBase component="span" name="test" onClick={openDetails}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
                    className={classes.media}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pasta
                    </Typography>
                    <Typography variant="subtitle2">
                      Pasta is a type of starchy food that is made from flour,
                      water, and eggs, and then formed into sheets or other
                      shapes. The dough is usually made from semolina, which
                      comes from the endosperm of durum wheat, and contains a
                      lot of gluten.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>

              <ButtonBase component="span" name="test" onClick={openDetails}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
                    className={classes.media}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pasta
                    </Typography>
                    <Typography variant="subtitle2">
                      Pasta is a type of starchy food that is made from flour,
                      water, and eggs, and then formed into sheets or other
                      shapes. The dough is usually made from semolina, which
                      comes from the endosperm of durum wheat, and contains a
                      lot of gluten.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>

              <ButtonBase component="span" name="test" onClick={openDetails}>
                <Card className={classes.card} raised elevation={6}>
                  <CardMedia
                    image='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D'
                    className={classes.media}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pasta
                    </Typography>
                    <Typography variant="subtitle2">
                      Pasta is a type of starchy food that is made from flour,
                      water, and eggs, and then formed into sheets or other
                      shapes. The dough is usually made from semolina, which
                      comes from the endosperm of durum wheat, and contains a
                      lot of gluten.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>
          {/* ))} */}
        
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
