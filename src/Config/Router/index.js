import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Products } from '../../Pages'
const Index = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Products' element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index
