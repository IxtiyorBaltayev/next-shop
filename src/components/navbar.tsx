import Link from "next/link";

const Navbar = () => {
	return (
		<header className="text-gray-600 body-font shadow">
			<div className="container mx-auto flex flex-wrap px-10 py-3 flex-col md:flex-row items-center">
				<Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Next Shop</span>
				</Link>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<Link href={"/"} className="mr-10 font-medium hover:text-indigo-500 hover:cursor-pointer">
						Home
					</Link>
					<Link href={"/products"} className="mr-10 font-medium hover:text-indigo-500 hover:cursor-pointer">
						All products
					</Link>
					<Link href={"/contacts"} className="mr-10 font-medium hover:text-indigo-500 hover:cursor-pointer">
						Contacts
					</Link>
				</nav>
				<Link href={"/shopping-cart"}>
					<button className="inline-flex items-center bg-indigo-500 text-white border-transparent border py-1 px-3 focus:outline-none hover:bg-transparent hover:text-black hover:border-black rounded text-base mt-4 md:mt-0 transition duration-200">
						My bag
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
