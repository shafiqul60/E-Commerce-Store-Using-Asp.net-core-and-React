import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./productlist";


export default function Catalog(){
    
    const[products, setProducts] = useState<Product[]>([]);

    useEffect(()=> {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])
    
    return(      
        <>
         <ProductList products={products}></ProductList>           
        </> 
        
    )
}