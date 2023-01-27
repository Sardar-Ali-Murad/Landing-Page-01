import Checkbox from '@mui/material/Checkbox';
import "./Check.css"

//  Check is basically checkbox used in the page Front.js in pages folder
const Check = () => {
  return (
    <div className=' checkMain'>
      <Checkbox label='My checkbox' 
       style ={{
        color: "#1E1E1E",
      }}
/>
      <h2>I want to stay in a hotel</h2>
      
    </div>
  )
}

export default Check

