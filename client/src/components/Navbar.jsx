import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-white z-50 relative">
      {/* Inner Container for Alignment */}
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
          <Image src="Logo2.png" alt="volume9ine logo" w={200} h={200} />
        </Link>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="cursor-pointer text-2xl focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close Menu" : "Open Menu"}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg bg-[#e6fff8] transition-transform duration-300 z-[60] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-green-600"
          >
            Home
          </Link>
          <Link
            to="/trending"
            onClick={() => setOpen(false)}
            className="hover:text-green-600"
          >
            Trending
          </Link>
          <Link
            to="/popular"
            onClick={() => setOpen(false)}
            className="hover:text-green-600"
          >
            Most Popular
          </Link>
          <SignedOut>
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="py-2 px-4 rounded-3xl bg-green-600 text-white hover:bg-green-700">
                Login
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/posts?cat=what-is-new" className="hover:text-green-600">
            Trending
          </Link>
          <Link to="/posts?cat=new-releases" className="hover:text-green-600">
            Most Popular
          </Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-green-600 text-white hover:bg-green-700">
                Login
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
