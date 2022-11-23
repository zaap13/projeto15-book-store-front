import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Store from "../pages/Store/Store";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
