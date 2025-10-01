import React from 'react'

function About() {
  return (
    <div style={{marginTop:"0",paddingTop:"0"}}>
      {/* Hero Section */}
      <div style={{backgroundColor:"#c9bbbbff",height:"300px",paddingTop:"100px"}}>
        <h1 style={{fontSize:"60px",textAlign:"center",color:"white",marginTop:"0",fontWeight:"bold",letterSpacing:"3px",textShadow:"2px 2px 4px rgba(0,0,0,0.3)"}}>ABOUT US</h1>
        <p style={{fontSize:"24px",textAlign:"center",color:"white",marginTop:"20px",fontStyle:"italic",textShadow:"1px 1px 2px rgba(0,0,0,0.3)"}}>Discover Our Story of Elegance & Beauty</p>
      </div>

      {/* Mission Section */}
      <div style={{padding:"80px 20px",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"60px"}}>
          <h2 style={{fontSize:"40px",fontWeight:"bold",color:"#8B4513",marginBottom:"20px",letterSpacing:"1px"}}>Our Mission</h2>
        </div>
        
        <div style={{display:"flex",gap:"60px",alignItems:"center",flexWrap:"wrap"}}>
          <div style={{flex:"1",minWidth:"300px"}}>
            <p style={{fontSize:"20px",lineHeight:"1.8",color:"#333",textAlign:"justify"}}>
              At our jewelry boutique, we believe that every woman deserves to feel extraordinary. Our mission is to create timeless pieces that celebrate your unique beauty and elegance. Each piece in our collection is carefully curated to bring out the confidence and grace that lies within every woman.
            </p>
          </div>
          <div style={{flex:"1",minWidth:"300px",background:"linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(162, 158, 158, 0.1))",padding:"40px",borderRadius:"20px",textAlign:"center"}}>
            <div style={{fontSize:"48px",marginBottom:"20px"}}>✨</div>
            <h3 style={{fontSize:"24px",color:"#8B4513",marginBottom:"15px"}}>Timeless Elegance</h3>
            <p style={{fontSize:"16px",color:"#666"}}>Creating jewelry that transcends trends</p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div style={{backgroundColor:"rgba(162, 158, 158, 0.1)",padding:"80px 20px"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:"60px"}}>
            <h2 style={{fontSize:"40px",fontWeight:"bold",color:"#8B4513",marginBottom:"20px",letterSpacing:"1px"}}>Our Story</h2>
          </div>
          
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"40px"}}>
            <div style={{background:"white",padding:"40px",borderRadius:"20px",boxShadow:"0 8px 25px rgba(0,0,0,0.1)"}}>
              <div style={{fontSize:"40px",marginBottom:"20px",textAlign:"center"}}>🎯</div>
              <h3 style={{fontSize:"24px",color:"#8B4513",marginBottom:"15px",textAlign:"center"}}>Founded with Passion</h3>
              <p style={{fontSize:"16px",color:"#666",lineHeight:"1.6"}}>
                Our journey began with a simple vision: to make luxury jewelry accessible to every woman. What started as a small boutique has grown into a trusted name in elegant jewelry.
              </p>
            </div>
            
            <div style={{background:"white",padding:"40px",borderRadius:"20px",boxShadow:"0 8px 25px rgba(0,0,0,0.1)"}}>
              <div style={{fontSize:"40px",marginBottom:"20px",textAlign:"center"}}>💎</div>
              <h3 style={{fontSize:"24px",color:"#8B4513",marginBottom:"15px",textAlign:"center"}}>Quality Craftsmanship</h3>
              <p style={{fontSize:"16px",color:"#666",lineHeight:"1.6"}}>
                Every piece is crafted with meticulous attention to detail, using only the finest materials. We work with skilled artisans who share our commitment to excellence.
              </p>
            </div>
            
            <div style={{background:"white",padding:"40px",borderRadius:"20px",boxShadow:"0 8px 25px rgba(0,0,0,0.1)"}}>
              <div style={{fontSize:"40px",marginBottom:"20px",textAlign:"center"}}>🌟</div>
              <h3 style={{fontSize:"24px",color:"#8B4513",marginBottom:"15px",textAlign:"center"}}>Customer First</h3>
              <p style={{fontSize:"16px",color:"#666",lineHeight:"1.6"}}>
                Your satisfaction is our priority. We're dedicated to providing exceptional service and ensuring every customer feels valued and beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div style={{padding:"80px 20px",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"60px"}}>
          <h2 style={{fontSize:"40px",fontWeight:"bold",color:"#8B4513",marginBottom:"20px",letterSpacing:"1px"}}>Our Values</h2>
        </div>
        
        <div style={{display:"flex",justifyContent:"center",gap:"80px",flexWrap:"wrap"}}>
          <div style={{textAlign:"center",flex:"1",minWidth:"200px"}}>
            <div style={{fontSize:"48px",marginBottom:"20px"}}>🎨</div>
            <h3 style={{fontSize:"22px",color:"#8B4513",marginBottom:"10px"}}>Creativity</h3>
            <p style={{fontSize:"16px",color:"#666"}}>Innovative designs that inspire</p>
          </div>
          
          <div style={{textAlign:"center",flex:"1",minWidth:"200px"}}>
            <div style={{fontSize:"48px",marginBottom:"20px"}}>🤝</div>
            <h3 style={{fontSize:"22px",color:"#8B4513",marginBottom:"10px"}}>Trust</h3>
            <p style={{fontSize:"16px",color:"#666"}}>Building lasting relationships</p>
          </div>
          
          <div style={{textAlign:"center",flex:"1",minWidth:"200px"}}>
            <div style={{fontSize:"48px",marginBottom:"20px"}}>💝</div>
            <h3 style={{fontSize:"22px",color:"#8B4513",marginBottom:"10px"}}>Excellence</h3>
            <p style={{fontSize:"16px",color:"#666"}}>Uncompromising quality standards</p>
          </div>
          
          <div style={{textAlign:"center",flex:"1",minWidth:"200px"}}>
            <div style={{fontSize:"48px",marginBottom:"20px"}}>🌍</div>
            <h3 style={{fontSize:"22px",color:"#8B4513",marginBottom:"10px"}}>Sustainability</h3>
            <p style={{fontSize:"16px",color:"#666"}}>Ethical and responsible practices</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{backgroundColor:"linear-gradient(135deg, #8B4513, #A0522D)",padding:"80px 20px",textAlign:"center",color:"white"}}>
        <h2 style={{fontSize:"36px",fontWeight:"bold",marginBottom:"20px",letterSpacing:"1px"}}>Ready to Find Your Perfect Piece?</h2>
        <p style={{fontSize:"20px",marginBottom:"30px",opacity:"0.9"}}>Explore our collection and discover jewelry that speaks to your soul</p>
        <button style={{padding:"18px 40px",background:"white",color:"#8B4513",border:"none",borderRadius:"25px",fontSize:"18px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 4px 15px rgba(0,0,0,0.2)",transition:"all 0.3s"}}>
          SHOP NOW
        </button>
      </div>
    </div>
  )
}

export default About