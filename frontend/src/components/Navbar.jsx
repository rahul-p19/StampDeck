import { FaUser } from "react-icons/fa6";
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

function Navbar() {
	return (
		<>
			<div className="flex justify-between mx-[5vw] items-center pt-[5vh] pb-[2vh]">
				<Link to="/" className="text-5xl font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
					StampDeck
				</Link>
				<nav className="flex gap-x-14 justify-between text-accent text-xl font-inter font-semibold">
					<Link to="market" className="relative after:bg-secondary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700 cursor-pointer">Buy Products</Link>
					<HashLink to="/#about" className="relative after:bg-secondary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer">About</HashLink>
					<HashLink to="/#contact" className="relative after:bg-secondary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700 cursor-pointer">Contact Us</HashLink>
					<Link to="profile" className="text-2xl hover:text-primary"><FaUser/></Link>
				</nav>
			</div>
		</>
	);
}

export default Navbar;
