import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-zinc-900 text-zinc-100 p-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white rounded-md p-2">Muffin Forum</Link>
          <ul className="flex space-x-6">
            <li><Link href="/#features" className="hover:text-white transition duration-300 rounded-md p-2">Features</Link></li>
            <li><Link href="/#about" className="hover:text-white transition duration-300 rounded-md p-2">About Us</Link></li>
            <li><Link href="/#contact" className="hover:text-white transition duration-300 rounded-md p-2">Contact</Link></li>
            <li><Link href="/auth/signup" className="bg-white text-zinc-900 px-4 py-2 rounded-full font-semibold hover:bg-zinc-200 transition duration-300">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
    )
}