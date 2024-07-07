import Link from "next/link";

export default function Navbar() {
  return(
	<nav className="w-32 h-screen bg-gray-800 text-white fixed">
	  <div className="p-4 text-lg font-semibold">
		<img src="/data.png" alt="logo" />
	  </div>
	  <ul className="flex flex-col space-y-2 p-4">
		<li>
		  <Link href="/" className="block p-2 rounded hover:bg-gray-700">All files</Link>
		</li>
		<li>
		  <Link href="/about" className="block p-2 rounded hover:bg-gray-700">About</Link>
		</li>
		<li>
		  <a className="block p-2 rounded hover:bg-gray-700">Services</a>
		</li>
		<li>
		  <a className="block p-2 rounded hover:bg-gray-700">Contact</a>
		</li>
	  </ul>
	</nav>
  )
}