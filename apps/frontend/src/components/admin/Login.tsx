
import { Link } from "react-router-dom"
import { useState } from "react";
import log_img from "../../assets/login.png";




export default function Page(): JSX.Element {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <main className="w-full h-screen flex ">
      <div className="grid grid-cols-1  md:grid-cols-2 m-auto h-[350px] sm:max-w-[750px] rounded-2xl">
        <div className="w-full h-[300px] hidden md:block">
          <img className="" src={log_img} alt="efef" />
        </div>
        <div className="p-4 flex flex-col justify-around">
        <h1 className="text-5xl font-semibold ml-2">Welcome Back</h1>
        <p className="font-medium text-indigo-300 mt-2">Welcome back Chief ! Please enter Your details.</p>
            <div>
              <input
                className="border p-2 w-full rounded-xl bg-slate-100"
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <input
                className="border p-2 w-full rounded-xl bg-slate-100 "
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <button
              className="w-full  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 rounded-xl bg-blue-700 text-white text-lg font-bold"
              key="1"
            ><p>Login</p>
            </button>
            </div>

      </div>
    </main>
  );
}
export default Login

