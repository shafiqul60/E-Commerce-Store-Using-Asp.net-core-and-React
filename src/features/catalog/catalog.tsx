import { useState, useEffect } from "react";
import agent from "../../app/API/agent";
import { Product } from "../../app/models/product";
import ProductList from "./productlist";


export default function Catalog(){
    
    const[products, setProducts] = useState<Product[]>([]);

    useEffect(()=> {
      // fetch('https://fakestoreapi.com/products')
      agent.Catalog.list().then(products => setProducts(products) )
    }, [])
    
    return(      
        <>
         <ProductList products={products}></ProductList>           
        </> 
        
    )
}