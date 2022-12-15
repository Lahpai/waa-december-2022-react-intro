import React from 'react'
import { useNavigate } from 'react-router'


function Product(props) {

    const navigate = useNavigate();

    const onShowDetailClicked = (id) => {
        navigate('/products-detail/' + id);
    }

  return (
    <div>Product
        <div>
            Name: {props.name}
        </div>

        <div>
            Price: {props.price}
        </div>

        <div>
            Rating: {props.rating}
        </div>

        <input 
                type="button" 
                value="Show Detail" 
                onClick={() => { onShowDetailClicked(props.id)}} />

            ======
    </div>
  )
}

export default Product;