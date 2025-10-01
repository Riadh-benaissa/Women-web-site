import React from 'react'
import Items from '../Item/Items'
import pearl from '../Create Next App_files/pearl-earrings.jpg'
import stackable from '../Create Next App_files/stackable-rings.jpg'
import charms from '../Create Next App_files/charm-bracelet.jpg'
import layered from '../Create Next App_files/layered-necklace.jpg'
function TrendingProduct() {
    let produit=[
        {
        Id:5,
        name:"Pearl Drop Earrings",
        img:pearl,
        price:"$95.00"
        }
        ,
        {
        Id:6,
        name:"Steackable Rings Set",
        img:stackable,
        price:"$110.00"
        }
        ,
        {
        Id:7,
        name:"charms Bracelet",
        img:charms,
        price:"$85.00"
        }
        ,
        {
        Id:8,
        name:"Layered Necklace Set",
        img:layered,
        price:"$120.00"
        }
    ]
  return (
    <div style={{display:"flex", justifyContent:"center",gap:"20px"}}>
        {produit.map((item,i)=>{
            return <Items key={i} id={item.Id} name={item.name} img={item.img} price={item.price}/>
        })}
    </div>
  )
}

export default TrendingProduct