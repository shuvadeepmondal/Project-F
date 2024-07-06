import '@repo/ui/main.css'
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between w-[80%] mx-auto">
        <h1 className="font-bold text-xl open-sans text-rose-400">fuddie .</h1>
        <ul className="flex items-center justify-center gap-10">
          <li className="font-medium rubik cursor-pointer hover:text-cyan-400">Home</li>
          <li className="font-medium rubik cursor-pointer hover:text-cyan-400">About</li>
          <li className="font-medium rubik cursor-pointer hover:text-cyan-400">Download</li>
          <li className="font-medium rubik cursor-pointer hover:text-cyan-400">Admin</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
