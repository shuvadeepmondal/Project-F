import '@repo/ui/main.css'
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between w-[80%] mx-auto open-sans">
        <h1 className="font-medium ">fuddie .</h1>
        <ul className="flex items-center justify-center gap-10">
          <li className="font-medium">Home</li>
          <li className="font-medium">About</li>
          <li className="font-medium">Download</li>
          <li className="font-medium">Admin</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
