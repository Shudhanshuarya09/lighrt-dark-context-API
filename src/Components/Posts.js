import React, { useContext } from 'react';
import {ThemeContext } from '../Context/themeContext';

const Posts = () => {

  const {theme, handleOnClick} = useContext(ThemeContext);
  return (
   <div>
     <h4>My posts with {theme}</h4>
     <button className={`btn ${theme === "dark" ? "btn-light" : "btn-dark "}`}  onClick={handleOnClick}>
      {theme === "dark" ? "light" : "dark"}
      </button>
   </div>
  )
}

export default Posts