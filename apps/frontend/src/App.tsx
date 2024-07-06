import { Route, Routes } from "react-router-dom";
import Home from "./components/admin/Home";
import MHome from "./components/main/MHome";
import Login from "./components/admin/Login";
function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<MHome />} />
        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
