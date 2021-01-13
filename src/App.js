import {useState} from 'react'
import StepTwo from './components/StepTwo';
import StepOne from './components/StepOne';
import StepThree from './components/StepThree';
import FinalStep from './components/FinalStep';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Container,Box, Typography } from '@material-ui/core';
const App=() =>{
    
    const [step,setStep]=useState(0);
    const [form,setForm]=useState({name:"",password:"",email:"",gender:"Female",company:"Infosys",role:"System Engineer",date:"1999-12-31",movie:"",sport:""});
    const handleChange=e=>{
        setForm(form =>({...form,[e.target.name]:e.target.value}));
    }
    const nextStep=(e)=>{
        e.preventDefault();
        setStep(step+1);
    }
    const prevStep=(e)=>{
        e.preventDefault();

        setStep(step-1);
    }
    function getLabels() {
        return ['Personal Info', 'Professional Info', 'Hobbies '];
      }
    const labels = getLabels();
    return(
 
        <Container maxWidth="sm">
            <Box textAlign="center" >
            <Typography variant="h4" gutterBottom style={{color:"#3f51b5"}}>Let's Be Friends</Typography>
 
    <Stepper  activeStep={step} >
    {labels.map((label) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
 
<br></br>
  {step===0?(<StepOne  handleChange={handleChange} nextStep={nextStep} form={form}></StepOne>):
    step===1?(<StepTwo handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}  form={form}  ></StepTwo>):
    step===2?(<StepThree handleChange={handleChange} form={form} prevStep={prevStep} nextStep={nextStep} ></StepThree>):
<FinalStep form={form} prevStep={prevStep} ></FinalStep>  

  }

 </Box>
 </Container>

    )

}

export default App
