import React from 'react'
import { Route, Routes } from 'react-router';
import ProductDetail from '../components/Product/ProductDetail';
import Products from '../components/Product/Products';
import User from '../components/User/User';
import UserDetail from '../components/User/UserDetail';
import Login from './Login'

function Dashboard() {

  return (
    <div>Dashboard
        <Routes>
            <Route path='/users' element={<User />} />
            <Route path='/users-detail/:idUser' element= {<UserDetail />}/>
            <Route path='/products' element={<Products />} />
            <Route path='/products-detail/:idProduct' element= {<ProductDetail />} />
            <Route path='/login' element={<Login />} />   
        </Routes>
    </div>

  )
}

export default Dashboard;