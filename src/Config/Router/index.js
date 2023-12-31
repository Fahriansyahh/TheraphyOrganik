import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Products, Admin, Theraphy, Order } from '../../Pages'
import { AuthPassword,ReplacePassword } from '../../Components'
import AdminRoutes from './Admin/Admin'
const Index = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route>
                    <Route path='/' element={<Home />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Admin' element={<Admin />} />
                    <Route path='/Theraphy' element={<Theraphy />} />
                    <Route path='/Theraphy/OrderNow' element={<Order />} />
                    <Route path='/Theraphy/OrderNow/KeyGmail' element={<AuthPassword/>}></Route>
                    <Route path='/Theraphy/OrderNow/KeyGmail/:id' element={<ReplacePassword/>}></Route>
                    <Route path='*' element={<AdminRoutes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index
