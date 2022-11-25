import { Routes, Route, Navigate } from "react-router-dom";
import Product from "../pages/Product/Product";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Store from "../pages/Store/Store";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/product/:id" element={<Product />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
