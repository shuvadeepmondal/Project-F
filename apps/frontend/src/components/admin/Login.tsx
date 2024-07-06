import '@repo/ui/main.css'
import { useState } from "react";
import log_img from "../../assets/login.png";





export default function Login(): JSX.Element {

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
      <div className="grid grid-cols-1  md:grid-cols-2 m-auto h-[350px] sm:max-w-[800px] rounded-2xl">
        <div className="w-full h-[300px] hidden md:block">
          <img className="" src={log_img} alt="efef" />
        </div>
        <div className="p-4 flex flex-col justify-around">
        <h1 className="text-5xl ml-14 font-semibold poppins-medium text-rose-400">Welcome!</h1>
        <p className="font-medium rubik text-indigo-300 ">Welcome back Chief ! Please enter Your details.</p>
            <div>
              <input
                className="border p-2 w-full rounded-xl bg-slate-100 focus:ring-1 focus:border-none ring-rose-700"
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <input
                className="border p-2 w-full rounded-xl bg-slate-100 focus:ring-1 focus:border-none ring-rose-700"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <button
              className=" ml-16 w-[230px] active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2.5 rounded-3xl bg-cyan-400 text-white text-lg font-semibold poppins-extrabold"
              key="1"
            ><p>Login</p>
            </button>
            </div>

      </div>
    </main>
  );
}


