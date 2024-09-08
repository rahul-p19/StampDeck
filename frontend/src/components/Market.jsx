import products from "./../assets/products";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { Suspense, useState } from "react";

function Market() {
	const productsPerPage = 6;
	const [pageNum, setPageNum] = useState(1);
	return (
		<div className="flex flex-col items-center py-10">
			<div className="w-full flex justify-center">
				<h1 className="text-4xl font-inter font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
					Buy Products
				</h1>
			</div>
      <Suspense fallback={<Loader />}>
			<div className="grid grid-cols-3 px-[5vmin] gap-[5vmin]">
				{products
					.filter(
						(prod, ind) =>
							ind >= productsPerPage * (pageNum - 1) &&
							ind < productsPerPage * pageNum
					)
					.map((prod, ind) => (
						<div key={ind} className="p-[2vmin]">
							<ProductCard props={prod} />
						</div>
					))}
			</div>
      </Suspense>
			<nav
				className="flex items-center justify-between border-t border-gray-200 sm:px-6 w-2/5"
				aria-label="Pagination">
				<div className="hidden sm:block font-worksans">
					<p className="text-lg text-primary font-medium">
						Showing <span className="font-semibold">{productsPerPage*(pageNum-1)+1}</span> to{" "}
						<span className="font-semibold">{productsPerPage*pageNum}</span> of{" "}
						<span className="font-semibold">{products.length}</span> results
					</p>
				</div>
				<div className="flex justify-around w-2/5">
					<button
						onClick={()=>{setPageNum(prev=>prev-1)}}
						className="bg-accent text-background px-2 py-1 rounded-sm"
            >
						Previous
					</button>
					<button
						onClick={()=>{setPageNum(prev=>prev+1)}}
						className="bg-accent px-3 py-1 rounded-sm text-background">
						Next
					</button>
				</div>
			</nav>
		</div>
	);
}

export default Market;
