import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Products, Home } from '../../../Pages'
const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/:id" element={<Home />} />
            <Route path="/Products/:id" element={<Products />} />
        </Routes>
    )
}

export default AdminRoutes
