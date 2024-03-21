import React from 'react'
import { AppBar, Typography, Link } from '@material-ui/core'
import useStyles from './styles'

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' style={{ backgroundColor: "#A8DF8EFF" }} className={classes.appBar}>
      <Typography style={{ color: "black", fontWeight: "bold" }} variant="h5" component="h2">Recipie Book</Typography>
      <Link href='/' underline='hover'>
        <Typography variant='body1' style={{ color: "black", fontWeight: "bold" }} className={classes.link}>
          Home
        </Typography>
      </Link>
    </AppBar>
  )
}

export default Navbar