import { useState } from 'react';
import './App.css';
import Post from './component/post';

function App() {
  const [data,setdata] = useState ([])



  const handledata = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>setdata(data))
    .catch((err)=>console.log(err))
  }

  //
    

  return (
    <div className="App"style={{textAlign:"center"}}>
      <button onClick={handledata} style={{padding:"10px 20px",backgroundColor:"lightgreen",marginTop:"20px"}}>GET POST</button>
    {data.map((el)=><Post id={el.id} title={el.title} body={el.body} />)}
    </div>
  );
}




export default App;