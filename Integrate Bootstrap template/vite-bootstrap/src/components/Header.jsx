import React from 'react'



function Header() {
  return (
    <div>
     <div className="container main">
      <div className="row">
        <div className="col-md-6">
        <h1 className="m-5">Hi, Hi,I'm Remo</h1>
        <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla. Beatae nobis fuga corporis earum hic dolore doloribus quisquam animi laboriosam cum qui accusantium, quaerat consectetur error atque laudantium voluptatum.</p>
        <button style={{backgroundColor:"blue",height:"60px",width:"160px",color:"white",border:"none",borderRadius:"20px",marginLeft:"40px"}}>I'M AVAILABLE</button>
        </div>
        <div className="col-md-6 img">
          <img src="https://st3.depositphotos.com/1778008/13524/i/450/depositphotos_135242792-stock-photo-student-reading-from-book.jpg" style={{height:"500px",width:"500px"}}></img>
        </div>
      </div>
     

     </div>

   
    </div>
  )
}

export default Header
{/* <Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>
  */}