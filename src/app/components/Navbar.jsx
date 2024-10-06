"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  { title: "Accueil", path: "/" },  
  { title: "A propos de nous", path: "#about" },
  { title: "Demo", path: "#projects" },
  { title: "Contact", path: "#contact" },
];


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); 

  const handleScroll = () => {
    const sections = navLinks.map((link) =>
      link.path === "/" ? document.querySelector("body") : document.querySelector(link.path)
    );
    const scrollPosition = window.scrollY + 100;
  
    sections.forEach((section, index) => {
      if (
        section &&
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setActiveLink(navLinks[index].path);
      }
    });
  
    if (window.scrollY === 0) {
      setActiveLink("/");
    }
  };
  


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#071b2c] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <img src="/logo.svg" width={58} height={58} alt="" />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={activeLink === link.path} 
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
