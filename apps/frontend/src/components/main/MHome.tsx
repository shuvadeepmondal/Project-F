import Hero from "./Hero";
import Navbar from "./Navbar";
function MHome() {
  return (
    <div>
      <Navbar />
      <div className="w-[80%] mx-auto">
        <Hero/>
      </div>
    </div>
  );
}

export default MHome;
