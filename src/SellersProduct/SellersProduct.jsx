import React from 'react'
import Items from '../Item/Items'
import hoop from '../Create Next App_files/hoop-earrings.jpg'
import birthstone from '../Create Next App_files/birthstone-ring.jpg'
import name_necklace from '../Create Next App_files/name-necklace.jpg'
import bangelet from '../Create Next App_files/bangle-set.jpg'
function SellersProduct() {
      let produitSelles=[
        {
        Id:9,
        name:"Hoop Earrings",
        img:hoop,
        price:"$78.00"
        }
        ,
        {
        Id:10,
        name:"Birthstone Ring",
        img:birthstone,
        price:"$135.00"
        }
        ,
        {
        Id:11,
        name:"Name Necklace",
        img:name_necklace,
        price:"$99.00"
        }
        ,
        {
        Id:12,
        name:"Bangle Set",
        img:bangelet,
        price:"$150.00"
        }
    ]
  return (
    <div style={{display:"flex", justifyContent:"center", gap:"20px"}}>
        {produitSelles.map((item,i) => {
            return <Items key={i} id={item.Id} name={item.name} img={item.img} price={item.price}/>
        })}
    </div>
  )
}

export default SellersProduct