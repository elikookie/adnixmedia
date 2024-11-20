import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-blue pb-4">
    <hr className="pt-4"/>
      <div className="flex justify-center space-x-10 mb-4">
        <Link href="/" className="hover:underline transition duration-500">Home</Link>
          <Link href="/services" className="hover:underline transition duration-500">Services</Link>
          <Link href="/about" className="hover:underline transition duration-500">About</Link>
          <Link href="/contact" className="hover:underline transition duration-500">Contact</Link>
      </div>
      <div className="text-center text-gray-400 text-sm">
        © Adnix Media 2024
      </div>
    </footer>
  );
}