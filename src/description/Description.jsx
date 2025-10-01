import React from 'react'

function Description() {
  return (
    <div style={{padding:"80px 0px"}}>
      <div style={{marginTop:"-25px",marginBottom:"50px"}}>
        <h1 style={{display:"flex",justifyContent:"center",marginTop:"0"}}>WHY CHOOSE US</h1>
        <hr style={{width:"90px",height:"2px",borderRadius:"10px",background:"brown",border:"none",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}} />
      </div>
      <div style={{display :"flex",justifyContent:"center",gap:"60px",fontSize:"12px",marginTop:"155px"}}>
        <div className="Ethically">
          <h1 style={{marginLeft:"55px"}}>ETHICALLY SOURCED</h1>
          <div style={{marginTop:"20px"}}>
              <p style={{fontSize:"20px"}}>All materials are responsibly sourced with </p>
              <p style={{marginLeft:"35px",fontSize:"20px"}}>minimal environmental impact.</p>
          </div>
        </div>
        <div className="free_shipping">
          <h1 style={{marginLeft:"55px"}}>FREE SHIPPING</h1>
          <div style={{marginTop:"20px"}}>
              <p style={{fontSize:"20px"}}>Enjoy free shipping on all orders over $100 </p>
              <p style={{marginLeft:"155px",fontSize:"20px"}}>worldwide.</p>
          </div>
        </div>
        <div className="liftime">
          <h1 style={{marginLeft:"55px"}}>LIFETIME WARRANTY</h1>
          <div style={{marginTop:"20px"}}>
              <p style={{fontSize:"20px"}}>All our jewelry comes with a lifetime </p>
              <p style={{marginLeft:"55px",fontSize:"20px"}}>craftsmanship warranty.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description