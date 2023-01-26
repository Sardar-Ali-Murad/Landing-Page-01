import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./Check.css"

//  Check is basically checkbox used in the page Front.js in pages folder
const Check = () => {
  return (
    <div className=' checkMain'>
      <FormGroup>
         <FormControlLabel control={<Checkbox defaultChecked />} label="I want to stay in a hotel" />
      </FormGroup>
    </div>
  )
}

export default Check
