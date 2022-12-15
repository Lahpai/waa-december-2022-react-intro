import React from 'react'
import { useNavigate } from 'react-router'

function category(props) {

    const navigate = useNavigate();

    const onShowDetailClicked = (id) => {
        navigate('/category-detail/' + id);
    }

  return (
    <div>category
        <div>
            id: {props.id}
        </div>

        <div>
            name: {props.name}
        </div>
    </div>
  )
}
