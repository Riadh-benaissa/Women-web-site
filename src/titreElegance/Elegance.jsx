import React ,{useState, useContext } from 'react'
import logo_shop from '../Create Next App_files/cart_icon.png'
import './Elegance.css'
import { Link } from 'react-router-dom'
function Elegance() {
  const [menu,setmenu]=useState("Home")
  return (
    <div className="elegance-container" style={{display:"flex",padding:"20px 0px",background:"rgba(122, 134, 122, 0.4)",alignItems:"center"}}>
        <div style={{fontSize:"12px",color:"black",marginLeft:"20px"}}>
            <h1 className="elegance-title" style={{marginLeft:"10px"}}>Elegance</h1>
        </div>
        <ul className="nav-menu" style={{display:"flex",gap:"45px",marginLeft:"25%",listStyle:"none",cursor:"pointer",fontSize:"17px"}}>
            <li onClick={()=>{setmenu("Home")}}> <Link to='/' style={{color:"black"}}>HOME </Link> </li>
            <li onClick={()=>{setmenu("Catalog")}}> <Link to='/catalog' style={{color:"black"}}>  CATALOG</Link> </li>
            <li onClick={()=>{setmenu("About")}}> <Link to='/About' style={{color:"black"}}>ABOUT </Link> </li>
            <li onClick={()=>{setmenu("Contact")}}> <Link to='/Contact' style={{color:"black"}}>CONTACT </Link></li>
        </ul>
        <div className="image" style={{marginLeft:"auto", marginRight:"20px"}}>
            <img src={logo_shop} alt="" style={{width:"30px", height:"30px", cursor:"pointer"}}/>
        </div>
    </div>
  )
}

export default Elegance;