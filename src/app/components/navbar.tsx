"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-500 p-5 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-48">
          <Link href="/" className="">
          <img src="/logo.png" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-lg">
        <Link href="/">
        <p className="text-md hover:text-blue-400 transition">Home</p>
      </Link>
      <Link href="/services">
        <p className="text-md hover:text-blue-400 transition">Services</p>
      </Link>
      <Link href="/about">
        <p className="text-md hover:text-blue-400 transition">About</p>
      </Link>
      <Link href="/contact">
        <p className="text-md hover:text-blue-400 transition">Contact</p>
      </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white p-5 space-y-4">
          <Link href="/" className="hover:underline transition duration-200" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" className="hover:underline transition duration-200" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" className="hover:underline transition duration-200" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="hover:underline transition duration-200" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
