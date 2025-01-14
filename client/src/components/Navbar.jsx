import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="Logo2.png" alt="volume9ine logo" w={200} h={200} />
      </Link>

      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "="}
        </div>

        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out bg-[#e6fff8] ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-green-600 text-white">
                Login
              </button>
            </Link>
          </SignedOut>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-green-600 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
