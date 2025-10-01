
import React from 'react'
import Items from '../Item/Items'
import ring from "../Create Next App_files/ring.jpg"
import neck_ring from "../Create Next App_files/necklace.jpg"
import earring from "../Create Next App_files/earrings.jpg"
import bracelet from "../Create Next App_files/bracelet.jpg"
import pearl from '../Create Next App_files/pearl-earrings.jpg'
import stackable from '../Create Next App_files/stackable-rings.jpg'
import charms from '../Create Next App_files/charm-bracelet.jpg'
import layered from '../Create Next App_files/layered-necklace.jpg'
import hoop from '../Create Next App_files/hoop-earrings.jpg'
import birthstone from '../Create Next App_files/birthstone-ring.jpg'
import name_necklace from '../Create Next App_files/name-necklace.jpg'
import bangelet from '../Create Next App_files/bangle-set.jpg'
// Export a plain array of products, not a React component
const products = [
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
            },
        {
        id:5,
        name:"Pearl Drop Earrings",
        img:pearl,
        price:"$95.00"
        }
        ,
        {
        id:6,
        name:"Steackable Rings Set",
        img:stackable,
        price:"$110.00"
        }
        ,
        {
        id:7,
        name:"charms Bracelet",
        img:charms,
        price:"$85.00"
        }
        ,
        {
        id:8,
        name:"Layered Necklace Set",
        img:layered,
        price:"$120.00"
        },
        {
            id:9,
            name:"Hoop Earrings",
            img:hoop,
            price:"$78.00"
            }
            ,
            {
            id:10,
            name:"Birthstone Ring",
            img:birthstone,
            price:"$135.00"
            }
            ,
            {
            id:11,
            name:"Name Necklace",
            img:name_necklace,
            price:"$99.00"
            }
            ,
            {
            id:12,
            name:"Bangle Set",
            img:bangelet,
            price:"$150.00"
            }
]

export default products