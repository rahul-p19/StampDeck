import products from "./../assets/products"
import ProductCard from "./ProductCard"

function Market() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <h1 className="text-4xl font-inter font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
          Buy Products
        </h1>
      </div>
      <div className="grid grid-cols-3 px-[5vmin] gap-[5vmin]">
        {products.map((prod,ind)=><div key={ind} className="p-[2vmin]"><ProductCard  props={prod}/></div>)}
      </div>
      </div>
  )
}

export default Market