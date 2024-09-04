import { FaUser } from "react-icons/fa6";
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

function Navbar() {
	return (
		<>
			<div className="w-full flex justify-between px-[5vw] items-center py-[5vh]">
				<h1 className="text-5xl font-inter text-primary font-bold">
					StampDeck
				</h1>
				<nav className="flex gap-x-14 justify-between text-accent text-xl font-inter font-semibold">
					<Link to="market">Buy Products</Link>
					<HashLink to="/#about">About</HashLink>
					<HashLink to="/#contact">Contact Us</HashLink>
					<Link to="profile" className="text-2xl"><FaUser/></Link>
				</nav>
			</div>
		</>
	);
}

export default Navbar;
