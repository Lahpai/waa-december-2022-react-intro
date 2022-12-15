import axios from 'axios';
import React, { useEffect } from "react";
import Product from './Product';

export default function Products() {
    const[products, setProducts] = React.useState([]);

    const getProducts = async () => {
        const response = await axios.get("/products");
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts();
    }, []);

  return (

    products.map((item) => {
        return (
            <Product 
                id = {item.id}
                name = {item.name}
                price = {item.price}
                rating = {item.rating}
            />
        )
    })
    
  )
}
