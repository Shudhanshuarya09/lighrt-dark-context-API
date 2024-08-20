import React, { useContext } from 'react';
import {ThemeContext } from '../Context/themeContext';

const Posts = () => {

  const theme = useContext(ThemeContext);
  return (
   <div>
     <h4>My posts with {theme}</h4>
     <button className='btn btn-dark btn-lg'>Dark</button>
   </div>
  )
}

export default Posts