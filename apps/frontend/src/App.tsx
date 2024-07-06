import { Route, Routes } from "react-router-dom";
import Home from "./components/admin/Home";
import MHome from "./components/main/MHome";
import Login from "./components/admin/Login";
import OTP from "./components/admin/OTP";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<MHome />} />
        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/otp" element={<OTP />} />
      </Routes>
    </div>
  );
}

export default App;
