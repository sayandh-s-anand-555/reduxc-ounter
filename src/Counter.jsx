import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, reset, decrement, incrementByAmount} from './redux/slice/counterSlice'

function Counter() {
    const count = useSelector((state)=>state.counterReducer.count)
    const dispatch =useDispatch()
    const[amount,setAmount]=useState("")
    console.log(amount);

    const handleIncrement=()=>{
        if(amount==""){
            alert("Please provide values")
        }
        else{
            dispatch(incrementByAmount(Number(amount)))
            setAmount("")
        }
    }
    
  return (
    <div>
      <h1 className='text-danger fw-bolder text-center mt-5'>Counter - Application</h1>
      <div className="container border mt-3 p-5">
      <h1 className='fw-bolder text-center mt-5' style={{fontSize:'50px'}}>{count}</h1>

      <div className="d-flex justify-content-evenly align-items-center mt-5">
        <button className='btn btn-success'onClick={()=>dispatch(increment())}>Increment</button>
        <button className='btn btn-danger' onClick={()=>dispatch(reset())} >Reset</button>
        <button className='btn btn-warning'onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
      <div className='d-flex mt-5'>
        <input type="text" className='form-control' onChange={e=>setAmount(e.target.value)} placeholder='enter amount to be incremented' value={amount||""} />
        <button className="btn btn-primary ms-3 " onClick={handleIncrement}> Increment Amount</button>
      </div>
      </div>
    </div>
  )
}

export default Counter
