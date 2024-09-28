import { HashLink } from "react-router-hash-link"
import {FlipWords} from "./ui/flip-words"


function Footer() {
  const words = ["stamps", "posts", "cancellations"];
  return (
    <footer className="h-[40vh] grid grid-cols-3 items-center bg-accent">
      <div className="flex flex-col items-center relative pb-5">
        <h1  className="text-5xl font-inter font-bold text-background">StampDeck</h1>
        <div className="flex flex-col text-xl font-worksans items-center font-medium">
        <h2 className="mt-4 text-background">Your go-to destination for </h2>
        <FlipWords words={words} duration={4000} className={"absolute bottom-0 text-background"}/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-4/5 gap-y-5">
        <h2 className="text-xl font-worksans font-medium text-background">Get updates for new releases</h2>
        <form className="flex flex-col h-3/5 justify-between items-center w-3/5">
          <input className="bg-transparent outline-none border-b border-b-secondary placeholder:text-background text-background w-full placeholder:font-worksans" type="text" name="name" id="name" placeholder="First Name" autoComplete="off"/>
          <input className="bg-transparent outline-none border-b border-b-secondary placeholder:text-background text-background w-full placeholder:font-worksans" type="email" name="email" id="email" placeholder="Email Address" autoComplete="off"/>
          <button type="submit" className="bg-background hover:bg-[#ffedb5df] text-accent font-semibold px-2 py-1 rounded-sm w-2/5 cursor-pointer font-worksans" disabled>Submit</button>
        </form>
      </div>
      <div className="flex flex-col items-center text-background justify-between h-2/3">
        <h2 className="text-2xl font-inter font-semibold">Explore</h2>
        <nav className="flex flex-col items-center font-worksans h-2/3 justify-around text-lg mb-4">
          <HashLink to="/#navbar" className="relative after:bg-secondary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer">Home</HashLink>
          <HashLink to="/market" className="relative after:bg-secondary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer">Buy Products</HashLink>
          <HashLink to="/#about" className="relative after:bg-secondary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer">Community</HashLink>
          <HashLink to="/#contact" className="relative after:bg-secondary after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer">Contact Us</HashLink>
        </nav>
      </div>
    </footer>
  )
}

export default Footer