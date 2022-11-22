import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Store from "../pages/Store/Store";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/store" element={<Store />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
