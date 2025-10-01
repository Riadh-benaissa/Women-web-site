import React from 'react'
import Items from '../Item/Items'
import SellersProduct from '../SellersProduct/SellersProduct'
function Sellers() {
  return (
    <div style={{background:"rgba(162, 158, 158, 0.2)", padding:"50px 0"}}>
        <div>
            <h1 style={{display:"flex",justifyContent:"center",marginTop:"0"}}>BEST SELLERS</h1>
            <hr style={{width:"90px",height:"2px",borderRadius:"10px",background:"brown",border:"none",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}} />
        </div>
        <SellersProduct/>
    </div>
  )
}

export default Sellers