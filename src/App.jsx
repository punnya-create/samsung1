import { useState } from 'react'
import { TextField,Stack,Button} from '@mui/material';
import './App.css'

function App() {
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [result,setResult]=useState(0)

  const [isPrincipleInValid,setIsPrincipleInValid]=useState(false)
  const [isRateInValid,setIsRateInValid]=useState(false)
  const [isYearInValid,setIsYearInValid]=useState(false)
  

  const handleValidation=(input)=>{
    const {name,value}=input
    console.log(name,value)
    if(name=='principle'){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInValid(false):setIsPrincipleInValid(true)
    }else if(name=='rate'){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateInValid(false):setIsRateInValid(true)
    }else if(name=='years'){
      setYear(value)
      !!value.match(/^[1-9][0-9]*$/) ? setIsYearInValid(false):setIsYearInValid(true)
    }
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("Insent handle calculator")
    if(principle&&rate&&year){
      setResult((principle*rate*year)/100)
    }
    else{
      alert("Enter valid input!!")
    }
  }

  const handleReset=()=>
  {
    setIsPrincipleInValid(false)
    setIsRateInValid(false)
    setIsYearInValid(false)
    setPrinciple(0)
    setYear(0)
    setResult(0)
    setRate(0)
  }

  return (
    <>
     <div className="d-flex justify-content-center align-items-center bg-dark container-fluid" style={{height:'100vh'}}>
      <div className="w-75 p-4 bg-light border shadow">
        <h1 className="text-center my-2">Simple Interest Calculator</h1>
        <div className="w-75 d-flex justify-content-center mx-auto p-5 border rounded" style={{backgroundColor:'orange'}}>
          <h2>&#8377; {result}</h2>
        </div>
        <form action="" onSubmit={(e)=>(handleCalculate(e))} className='w-75 p-2 mx-auto text-center'>
          <div className="mb-3 w-100">
          <TextField id="outlined-basic"  label="Principle Amount ₹ (P)" onChange={(e)=>{handleValidation(e.target)}} className='w-100'name='principle' variant="outlined" />
            {
              isPrincipleInValid &&
              <div className="text-danger fw-blod">
              *Invalid Principle Amount
            </div>
            }  
          </div>
          <div className="mb-3 w-100">
          <TextField id="outlined-basic"  label="Rate in Interest % (r.a)" onChange={(e)=>{handleValidation(e.target)}} name='rate' className='w-100' variant="outlined" />
          {
            isRateInValid &&
            <div className="text-danger fw-blod">
            *Invalid Rate Interest
          </div>
          }
          </div>
          <div className="mb-3 w-100">
          <TextField id="outlined-basic"  label="Number of Years (Yr)" onChange={(e)=>{handleValidation(e.target)}} name='years' className='w-100' variant="outlined" />
          {
            isYearInValid &&
            <div className="text-danger fw-blod">
            *Invalid Number of Year
          </div>
          }
          </div>
          <Stack direction={'row'} spacing={2}>
          <Button variant="contained" type='submit' disabled={isPrincipleInValid || isRateInValid || isYearInValid} className='w-50 bg-dark' style={{height:'60px'}}>CALCULATE</Button>
          <Button variant="outlined" className='w-50 ' onClick={handleReset} style={{height:'60px'}}>RESET</Button>
          </Stack>
        </form>
      </div>
     </div>
    </>
  )
}

export default App
