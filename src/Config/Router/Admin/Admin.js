import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Products, PagesAdmin } from '../../../Pages'
const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/Products/:id" element={<Products />} />
            <Route path="/AdminPages/:id" element={<PagesAdmin />} />

        </Routes>
    )
}

export default AdminRoutes
