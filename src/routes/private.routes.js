import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import Sale from "../pages/Sale/Sale";
import Store from "../pages/Store/Store";
export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/sale" element={<Sale />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
