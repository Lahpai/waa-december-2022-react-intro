import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function UserDetail() {
    const params = useParams();
    const[userState, setUserState] = React.useState({
        id:0,
        firstname: "",
        lastname: "",
        age:null,
        email:"",
    })

    const getUser = async () => {
        const response = await axios.get("/users/"+params.idUser);
        setUserState(response.data);
    }

    useEffect(()=>{
        getUser();
    },[])


  return (
    <div>UserDetail
        Firstname: {userState.firstname}
        Lastname : {userState.lastname}
        Age : {userState.age}
        Email : {userState.email}
    </div>
  )
}

export default UserDetail;