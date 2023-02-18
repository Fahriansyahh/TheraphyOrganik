import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Products, Admin } from '../../Pages'
const Index = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/Admin' element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index
