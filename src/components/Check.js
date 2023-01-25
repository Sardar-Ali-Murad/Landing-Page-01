import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./Checks.css"
const Check = () => {
  return (
    <div className='div-center'>
      <FormGroup>
         <FormControlLabel control={<Checkbox defaultChecked />} label="I want to stay in a hotel" />
      </FormGroup>
      <div className='components'>
        <p style={{textDecoration:"underline"}}>Entertainment</p>
        <p>Hotel</p>
        <p>Shops</p>
      </div>
    </div>
  )
}

export default Check
