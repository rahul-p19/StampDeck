import About from "./About"
import Trending from "./Trending"
import Contact from "./Contact"
import Releases from "./Releases"
function Home() {
  return (
    <>
    <div className="h-[78vh] flex justify-between px-[10vw] mt-[5vh]">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-2xl font-inter text-primary font-semibold">Latest Releases</h1>
        <div className="h-[70vh] w-[30vw] flex justify-center items-center">
          <Releases />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
      <h1 className="text-2xl font-inter text-primary font-semibold">Trending Products</h1>
        <div className="h-[70vh] w-[40vw] p-10 flex justify-center items-center">
          <Trending />
        </div>
      </div>
    </div>
    <About/>
    <Contact />
    </>
  )
}

export default Home