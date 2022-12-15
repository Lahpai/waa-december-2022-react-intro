import axios from 'axios';
import React, { useInsertionEffect } from 'react'
import React, {useState} from "react";
import React, { useEffect } from "react";
import UserDetail from './UserDetail';

export default function Users() {

    const[user, setUser] = React.useState([]);

    const getUser = async () => {
        const response = await axios.get("/users");
        setUser(response.data);
    }

    useEffect (() => {
        getUser();
    }, []);

  return (
    
    users.map((item) => {
        return(
            <User
                id= {item.id}
                firstname = {item.firstname}
                lastname = {item.lastname}
            />
        )
    })
  )
}
