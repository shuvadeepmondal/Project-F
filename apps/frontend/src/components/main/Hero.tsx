import "@repo/ui/main.css";
import img1 from "../../../public/food1.png";
import img2 from "../../../public/food2.png";
import img3 from "../../../public/food3.png";
import d1 from "../../../public/dialog-1.svg";
import d2 from "../../../public/dialog-2.svg";
import c1 from "../../../public/circle.svg";
import r1 from '../../../public/ring.svg'
const Hero = () => {
  return (
    <div className="rubik flex justify-center items-center flex-col sm:flex-row gap-[10rem] mt-[4rem] ">
      <div className="flex flex-col gap-8 ">
        <div className="flex items-start flex-col gap-3">
          <h1 className="text-7xl font-semibold text-rose-400">
            Tasty <span className="text-cyan-400">Food</span>
          </h1>
          <p className="text-xl ">
            Try The Best and Cheap food in <br /> Your Area, Get your first
            order with{" "}
            <span className="text-rose-400 font-semibold text-2xl">fuddie</span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <button className="px-3 py-2 bg-rose-400 hover:bg-rose-500 rounded-lg poppins-regular">
            Get App
          </button>
          <button className="px-3 py-2 bg-cyan-400 hover:bg-cyan-500 rounded-lg poppins-regular">
            Rate us
          </button>
        </div>
      </div>
      <div className="home-right ">
             <img src={img1} alt="food image" className="absolute w-[58%] food-1" width="200" loading="lazy"/>
          <img src={img2} alt="food image" className="absolute w-[58%] food-2" width="200" loading="lazy"/>
          <img src={img3} alt="food image" className="absolute w-[58%] food-3" width="200" loading="lazy"/>

          <img src={d1} alt="dialog" className="dialog dialog-1" width="170"/>
          <img src={d2} alt="dialog" className="dialog dialog-2" width="170"/>

          <img src={c1} alt="circle shape" className="shape shape-1" width="25"/>
          <img src={c1} alt="circle shape" className="shape shape-2" width="15"/>
          <img src={c1} alt="circle shape" className="shape shape-3" width="30"/>
          <img src={r1} alt="ring shape" className="shape shape-4" width="60"/>
          <img src={r1} alt="ring shape" className="shape shape-5" width="40"/>
      </div>
    </div>
  );
};

export default Hero;
