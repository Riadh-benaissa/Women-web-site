import React from 'react'
import TrendingProduct from '../TrendingProduct/TrendingProduct'

function Trending() {
  return (
    <div style={{width:"100%",height:"600px",marginTop:"0"}}>
        <div style={{paddingTop:"50px"}}>
            <h1 style={{display:"flex",justifyContent:"center",marginTop:"0"}}>TRENDING NEW</h1>
            <hr style={{width:"90px",height:"2px",borderRadius:"10px",background:"brown",border:"none",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}} />
        </div>
        <TrendingProduct/>
    </div>
  )
}

export default Trending