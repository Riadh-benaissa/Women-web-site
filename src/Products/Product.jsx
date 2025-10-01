import React from 'react'
import ring from "../Create Next App_files/ring.jpg"
import neck_ring from "../Create Next App_files/necklace.jpg"
import earring from "../Create Next App_files/earrings.jpg"
import bracelet from "../Create Next App_files/bracelet.jpg"
import Items from '../Item/Items'

function Product() {
    let product=[
    {
        id:1,
        name:"Elegance ring",
        img:ring,
        price:"$129.00"
    },
        {
        id:2,
        name:"Minimalist Necklace",
        img:neck_ring,
        price:"$89.00"
    },
        {
        id:3,
        name:"Statement Earrings",
        img:earring,
        price:"$65.00"
    },
        {
        id:4,
        name:"Delicate Bracelet",
        img:bracelet,
        price:"$75.00"
    }
    ]
  return (
    <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
        {product.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} img={item.img} price={item.price}/>
        })}
    </div>
  )
}

export default Product