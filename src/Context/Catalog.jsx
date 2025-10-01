import React, { useContext } from 'react';
import Items from '../Item/Items';
import { ShopContext } from '../ShopContext/ShopContext';

function Catalog() {
  const products = useContext(ShopContext);

  if (!Array.isArray(products)) {
    return <div className="catalog">Aucun produit trouvé.</div>;
  }

  return (
    <div style={{backgroundColor:"rgba(162, 158, 158, 0.2)"}}>
      <div className="titre_barriere" style={{display:"flex",gap:"800px",alignItems:"center"}}>
        <div>
          <h1 style={{fontSize:"25px",marginLeft:"45px",marginTop:"30px"}} >OUR CATALOG </h1>
          <hr style={{width:"80px",height:"4px",background:"black",borderRadius:"10px",marginLeft:"45px"}}/> 
        </div>
        <div style={{display:"flex",gap:"20px",marginRight:"40px",marginTop:"10px"}}>
          <button style={{padding:"8px 17px",color:"gray",fontSize:"17px"}} >All Products</button>
          <button style={{padding:"8px 17px",color:"gray",fontSize:"17px"}}>Featured</button>
        </div>
      </div>
      <div className="catalog" style={{display:"grid",margin:"0px 40px",gap:"15px",gridTemplateColumns:"repeat(4, 1fr)"}}>
              {products.map((product) => (
              <Items key={product.id} product={product}/>
        ))}
      </div>
      <div style={{background: "#1B4D3E",padding: "110px 0px",marginTop:"70px",justifyContent:"center"}}>
        <h1 style={{color:"white"}}>STAY CONNECTED</h1>
        <p>Subscribe to our newsletter for exclusive offers, new arrivals, and styling inspiration</p>
      </div>
    </div>
  );
}


export default Catalog;

