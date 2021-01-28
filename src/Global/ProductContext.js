import React, {createContext, useState} from 'react';


import women from "../assets/women.jpg";
import womenfashion from "../assets/womenfashion.jpg";
import couple from "../assets/couple.jpg";
import mens from "../assets/mens.jpg";
import mencoat from "../assets/mencoat.jpg";
import menjeans from "../assets/menjeans.jpg";
import menshirt from "../assets/menshirt.jpg";
import mentshirt from "../assets/mentshirt.jpg";


export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {

const [products] = useState([
    {id: 1, name: "Ladies Fashion", price : 300, image: women, status: 'hot'},
    {id: 2, name: "Ladies Fashion", price : 300, image: womenfashion, status: 'new'},
    {id: 3, name: "Couple Fashion", price : 500, image: couple, status: 'hot'},
    {id: 4, name: "Mens Fashion", price : 250, image: mens, status: 'new'},
    {id: 5, name: "Mens Coat", price : 450, image: mencoat, status: 'hot'},
    {id: 6, name: "Mens Jeans", price : 200, image: menjeans, status: 'new'},
    {id: 3, name: "Mens Shirt", price : 150, image: menshirt, status: 'new'},
    {id: 3, name: "Mens Tshirt", price : 200, image: mentshirt, status: 'new'},
]) 

    return(
       <ProductsContext.Provider value={{products: [...products]}}>
          {props.children }
       </ProductsContext.Provider>
    )
}
export default ProductsContextProvider;