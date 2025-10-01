import React from 'react';

function Items(props) {
  const product = props.product || { img: props.img, name: props.name, price: props.price };
  const { img, name, price } = product || {};

  if (!img || !name) {
    return null;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "50px" }}>
      <img src={img} alt={name} style={{ width: "290px", height: "290px", objectFit: "cover" ,border:"1px solid black"}} />
      <h2>{name}</h2>
      <p>{price}</p>
      <button 
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={() => console.log("Ajouté au panier:", name)}
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default Items;
