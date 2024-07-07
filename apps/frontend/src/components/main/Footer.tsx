interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <main>
    <footer className="flex flex-col space-y-5 justify-center m-10 px-auto py-10  rounded-2xl ">

      <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3 className="font-bold text-3xl text-rose-400">fuddie.</h3>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-rose-400 font-bold">Download</div>
          <a className="my-3 block" href="/#">
            Documentation 
          </a>
          <a className="my-3 block" href="/#">
            Tutorials 
          </a>
          <a className="my-3 block" href="/#">
            Support 
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-rose-400 font-bold">Support</div>
          <a className="my-3 block" href="/#">
            Help Center
          </a>
          <a className="my-3 block" href="/#">
            Privacy Policy 
          </a>
          <a className="my-3 block" href="/#">
            Conditions 
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-rose-400 font-bold">Contact us</div>
          <a className="my-3 block" href="/#">
            Bug_Busters Tech, Burdwan, West Bengal-713104
          </a>
          <a className="my-3 block" href="/#">
            contact@company.com <span className="text-teal-600 text-xs p-1">New</span>
          </a>
        </div>
      </div>

      <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
        </a>
      </div>

      <p className="text-center text-gray-700 font-medium">&copy; 2024 Fuddie Ltd || All rights reserved.</p>
    </footer>
    
    </main>
  );
};

export default Footer;
