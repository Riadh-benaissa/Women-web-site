import React from 'react'
import './Join.css'
function Join() {
  return (
    <div style={{display:"flex",border:"0.5px solid black",padding:"70px 0px",background:"rgba(122, 134, 122, 0.4)",alignItems:"center",justifyContent:"center"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <h1 style={{margin:"0 0 20px 0"}}>JOIN OUR COMMUNITY</h1>
            <p style={{margin:"5px 0"}}>Get 15% off your first order</p>
            <p style={{margin:"5px 0"}}>Plus exclusive access to new collections and special events</p>
             <div style={{marginTop:"35px"}}>
                 <input type="text" placeholder='Your email address' style={{padding:"15px 80px",border:"2px solid black",background:"white",fontSize:"16px"}}/>
                 <button style={{padding:"15px 80px",border:"2px solid rgba(48, 31, 31, 1)",background:"#2D1810",color:"white",fontSize:"16px",fontWeight:"bold"}}> SUBSCRIBE</button>
             </div>
        </div>
    </div>
  )
}

export default Join