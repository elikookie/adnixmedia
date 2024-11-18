import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white text-blue-500 p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wide">Adnix Media</div>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:underline transition duration-200">Home</Link>
          <Link href="/services" className="hover:underline transition duration-200">Services</Link>
          <Link href="/about" className="hover:underline transition duration-200">About</Link>
          <Link href="/contact" className="hover:underline transition duration-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
