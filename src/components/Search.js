import React from 'react'
import TextField from '@mui/material/TextField';
import {AiOutlineArrowRight}  from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"
import "./Search.css"
import styled from "styled-components";
import arrows from "../img/arrows.png"

// Part of Front.js in pages and third part of the front.js
const Search = () => {

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#E88B71',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E88B71',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E88B71',
      },
      '&:hover fieldset': {
        borderColor: '#E88B71',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E88B71',
      },
    },

    '& input:valid + fieldset': {
      borderColor: '#E88B71',
      borderWidth: 2,
      borderRadius:"20px"
    },
    '& input + fieldset': {
      borderColor: '#E88B71',
      borderWidth: 2,
    },
    '& input + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  });

  return (
    <div className='div-center-70 searchMain'>
         <CssTextField label="Origin" id="custom-css-outlined-input" 
          defaultValue="Berlin, Germany" focused />
       <img src={arrows} className="arrow"/>
       <CssTextField label="Destination" id="custom-css-outlined-input" 
          defaultValue="Cologne, Germany" focused/>
       <button className='searchBtn'>Search</button>

    </div>
  )
}

export default Search
