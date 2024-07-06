import '@repo/ui/main.css'
const Navbar = () => {
  return (
    <header className='py-8 shadow-lg'>
      <nav className="flex justify-between w-[80%] mx-auto">
        <h1 className="font-bold text-2xl open-sans text-rose-400"> fuddie .</h1>
        <ul className="items-center justify-center gap-10 hidden sm:flex">
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
