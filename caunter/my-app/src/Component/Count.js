import  React ,{useState}from 'react'
import"./Count.css"
function Count(){
    const [count,setCount]=useState(0);
    return(
        <div className='body'>
           <div className='b_child'>
           <h3 className='h3'>Counter</h3>
            <h1>{count}</h1>
            <button  style={{backgroundColor:"bisque"}} disabled={count ==0}  onClick={()=>setCount(count-1)} >Decrement</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{backgroundColor:" lightyellow"}} onClick={()=>setCount(0)}>Reset</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{backgroundColor:"darkgoldenrod"}} onClick={()=>setCount(count+1)}>increment</button>

           </div>
            
        </div>
        
    )
}
export default Count;