import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
