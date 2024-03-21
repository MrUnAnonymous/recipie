import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import useStyles from '../styles'

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' style={{ backgroundColor: "#A8DF8EFF" }} className={classes.appBar}>
      <Typography style={{ color: "black", fontWeight: "bold" }} gutterBottom variant="h5" component="h2">Recipie Book</Typography>

    </AppBar>
  )
}

export default Navbar