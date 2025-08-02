"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full h-16 md:h-20 lg:h-24 bg-zinc-950 border-b border-zinc-800">
      <div className="flex items-center justify-between h-full px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-walaweh tracking-wider text-green-500 font-bold hover:text-green-400 transition-colors duration-300">
            Muffin Forum
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="nav-item text-base lg:text-lg"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* User Menu */}
          <div className="flex items-center">
            <Image
              src="/background.png"
              alt="User profile"
              width={40}
              height={40}
              className="rounded-full w-10 h-10 lg:w-12 lg:h-12 object-cover cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 hover:ring-2 hover:ring-green-500"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center">
            <Image
              src="/background.png"
              alt="User profile"
              width={32}
              height={32}
              className="rounded-full w-8 h-8 object-cover cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 hover:ring-2 hover:ring-green-500"
            />
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-zinc-800 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`md:hidden bg-zinc-900 border-t border-zinc-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  className="nav-item block text-lg py-3 px-4 rounded-lg hover:bg-zinc-800 transition-all duration-300 transform hover:translate-x-2"
                  href={item.href}
                  onClick={closeMenu}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen
                      ? "slideInFromTop 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
