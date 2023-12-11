import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products, PagesAdmin, AdminHome } from "../../../Pages";
import { CheckUsers } from "../../../Components";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/AdminHome/:id" element={<AdminHome />} />
      <Route path="/AdminHome/:id/CheckUsers/:id" element={<CheckUsers />} />
      <Route path="/Products/:id" element={<Products />} />
      <Route path="/AdminPages/:id" element={<PagesAdmin />} />
    </Routes>
  );
};

export default AdminRoutes;
