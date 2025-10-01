import React from 'react'
import Product from '../Products/Product'
function Collection() {
  return (
    <div style={{background:"rgba(162, 158, 158, 0.2)",width:"100%",height:"600px",marginTop:"0"}}>
        <div style={{paddingTop:"50px"}}>
            <h1 style={{display:"flex",justifyContent:"center",marginTop:"0"}}>ENJOY COLLECTION</h1>
            <hr style={{width:"90px",height:"2px",borderRadius:"10px",background:"brown",border:"none",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}} />
        </div>
        <Product/>
    </div>
  )
}

export default Collection