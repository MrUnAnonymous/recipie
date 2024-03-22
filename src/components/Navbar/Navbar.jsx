import React from 'react'
import './styles.css'

const Navbar = () => {
  return (
    <div className='navContainer'>
    <header className='appBar'>
      <h2 className='title'>Recipe Book</h2>
      <a href='/' className='link'>Home</a>
    </header>
    </div>
  )
}

export default Navbar