import React from 'react'

function Contact() {
  return (
    <div style={{marginTop:"0",paddingTop:"0"}}>
        <div style={{backgroundColor:"#c9bbbbff",height:"250px",paddingTop:"80px"}}>
            <h1 style={{fontSize:"55px",textAlign:"center",color:"white",marginTop:"0",fontWeight:"bold",letterSpacing:"2px",textShadow:"2px 2px 4px rgba(0,0,0,0.3)"}}>CONNECT WITH US</h1>
            <p style={{fontSize:"22px",textAlign:"center",color:"white",marginTop:"20px",fontStyle:"italic",textShadow:"1px 1px 2px rgba(0,0,0,0.3)"}}>We'd love to hear from you</p>
        </div>
        <div style={{marginTop:"50px"}}>
            <h1 style={{display:"flex",justifyContent:"center",marginTop:"0"}}>SEND US A MESSAGE</h1>
            <hr style={{width:"90px",height:"2px",borderRadius:"10px",background:"brown",border:"none",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}} />
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"25px",marginTop:"60px",padding:"0 20px"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                <label style={{fontSize:"18px",fontWeight:"bold",color:"#333"}}>Subject</label>
                <input type="text" style={{width:"850px",height:"55px",fontSize:"20px",border:"2px solid #ddd",borderRadius:"8px",padding:"0 15px",outline:"none",transition:"border-color 0.3s"}}/>
            </div>
            <div style={{display:"flex",gap:"20px"}}>
                <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                    <label style={{fontSize:"18px",fontWeight:"bold",color:"#333"}}>Full Name</label>
                    <input style={{width:"415px",height:"55px",fontSize:"20px",border:"2px solid #ddd",borderRadius:"8px",padding:"0 15px",outline:"none",transition:"border-color 0.3s"}} type="text"/>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                    <label style={{fontSize:"18px",fontWeight:"bold",color:"#333"}}>Email Address</label>
                    <input style={{width:"415px",height:"55px",fontSize:"20px",border:"2px solid #ddd",borderRadius:"8px",padding:"0 15px",outline:"none",transition:"border-color 0.3s"}} type="email"/>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                <label style={{fontSize:"18px",fontWeight:"bold",color:"#333"}}>Description</label>
                <textarea style={{width:"850px",height:"355px",fontSize:"20px",border:"2px solid #ddd",borderRadius:"8px",padding:"15px",outline:"none",transition:"border-color 0.3s",resize:"vertical"}}></textarea>
            </div>
            <button style={{padding:"18px 40px",background:"linear-gradient(135deg, #8B4513, #A0522D)",color:"white",border:"none",borderRadius:"25px",fontSize:"18px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 4px 15px rgba(139, 69, 19, 0.3)",transition:"all 0.3s"}}>SEND MESSAGE</button>
        </div>
        <div style={{marginTop:"120px",marginBottom:"50px",background:"linear-gradient(135deg, rgba(162, 158, 158, 0.1), rgba(139, 69, 19, 0.1))", padding:"80px 0"}}>
            <h1 style={{display:"flex",justifyContent:"center",marginTop:"0",fontSize:"35px",fontWeight:"bold",color:"#333",letterSpacing:"1px"}}>OTHER WAYS TO REACH US</h1>
            <hr style={{width:"120px",height:"3px",borderRadius:"10px",background:"linear-gradient(90deg, #8B4513, #A0522D)",border:"none",marginTop:"15px",marginLeft:"auto",marginRight:"auto"}} />
            <div style={{display:"flex",justifyContent:"center",gap:"120px",marginTop:"60px",fontSize:"18px",fontWeight:"bold"}}>
            <div style={{textAlign:"center",padding:"20px",background:"rgba(255,255,255,0.7)",borderRadius:"15px",boxShadow:"0 4px 15px rgba(0,0,0,0.1)"}}>
                <div style={{fontSize:"24px",marginBottom:"10px"}}>📧</div>
                <p style={{color:"#8B4513",fontSize:"20px",marginBottom:"10px"}}>EMAIL</p>
                <p style={{color:"#666",marginTop:"10px",fontSize:"16px"}}>riadh.benaissa05@gmail.com</p>
            </div>
            <div style={{textAlign:"center",padding:"20px",background:"rgba(255,255,255,0.7)",borderRadius:"15px",boxShadow:"0 4px 15px rgba(0,0,0,0.1)"}}>
                <div style={{fontSize:"24px",marginBottom:"10px"}}>📱</div>
                <p style={{color:"#8B4513",fontSize:"20px",marginBottom:"10px"}}>PHONE</p>
                <p style={{color:"#666",marginTop:"10px",fontSize:"16px"}}>0558241544</p>
            </div>
            <div style={{textAlign:"center",padding:"20px",background:"rgba(255,255,255,0.7)",borderRadius:"15px",boxShadow:"0 4px 15px rgba(0,0,0,0.1)"}}>
                <div style={{fontSize:"24px",marginBottom:"10px"}}>📍</div>
                <p style={{color:"#8B4513",fontSize:"20px",marginBottom:"10px"}}>VISIT US</p>
                <p style={{fontSize:"16px",marginTop:"10px",color:"#666"}}>ALGERIE, ALGER, STAOUELI</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact