import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AiOutlineArrowRight}  from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"
import "./Search.css"

// Part of Front.js in pages and third part of the front.js
const Search = () => {
  return (
    <div className='div-center-50 searchMain'>
       <TextField label="Origin" color="secondary" focused />
       <TextField label="destination" color="secondary" focused />
       <div>
       <AiOutlineArrowRight/>
       <AiOutlineArrowLeft/>
       </div>
       <Button variant="contained">Contained</Button>
    </div>
  )
}

export default Search
