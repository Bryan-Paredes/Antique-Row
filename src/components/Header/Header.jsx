import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import SocialMedia from "../SocialMedia.astro";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container flex justify-between items-center p-4 my-10 mx-auto bg-transparent sm:px-10">
      <a href="/">
        <img
          src="/logo.webp"
          alt="logo"
          className="w-40 h-auto hidden sm:block"
        />
      </a>
      <NavBar isOpen={isOpen} />
      <div className="">
        <a
          className=" text-sm uppercase py-2.5 px-4 text-center bg-old-rose-700 text-white rounded-lg border-[1px]  hover:bg-transparent hover:text-old-rose-700 hover:border-old-rose-700 transition-all 2s ease hidden sm:block"
          href="/contact"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
