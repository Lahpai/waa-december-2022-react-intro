import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function ProductDetail() {

    const params = useParams();

    const [productState, setProducts] = React.useState({
        id: 0,
        name: "",
        price: "",
        rating: 1
    })

    const getProducts = async () => {
        const response = await axios.get("/products/" + params.idProduct);
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts();
    },[])

  return (
    <div>ProductDetail
        id: {productState.id}
        name: {productState.name}
        price: {productState.price}
        rating: {productState.rating}
    </div>
  )
}

export default ProductDetail