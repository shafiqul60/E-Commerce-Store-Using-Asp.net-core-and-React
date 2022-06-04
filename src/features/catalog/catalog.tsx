import { useState, useEffect } from "react";
import agent from "../../app/API/agent";
import Lodder from "../../app/layout/Lodder";
import { Product } from "../../app/models/product";
import ProductList from "./productlist";


export default function Catalog(){
    
    const[products, setProducts] = useState<Product[]>([]);

    const[loadding, setloadding] = useState(true);

    useEffect(()=> {
      // fetch('https://fakestoreapi.com/products')
      agent.Catalog.list()
      .then(products => setProducts(products))
      .catch(error=> console.log(error))
      .finally( ()=> setloadding(false));
    }, [])

    if(loadding) return <Lodder message='Loading Products...'/>
    
    return(      
        <>
         <ProductList products={products}></ProductList>           
        </> 
        
    )
}