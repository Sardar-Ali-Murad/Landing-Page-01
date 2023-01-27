import Checkbox from '@mui/material/Checkbox';
//  Check is basically checkbox used in the page Front.js in pages folder
import "./Check.css"

const Check = () => {
  return (
    <div className=' checkMain'>
      <div>
      <Checkbox label='My checkbox' 
       style ={{
         color: "#1E1E1E",
        }}
    />


        </div>
      <h2>I want to stay in a hotel</h2>
      
    </div>
  )
}

export default Check

