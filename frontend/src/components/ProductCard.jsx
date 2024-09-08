/* eslint-disable react/prop-types */
"use client";
import { useState } from "react";
import { Lens } from "./ui/lens";
export default function ProductCard({ props }) {
	const [hovering, setHovering] = useState(false);
	const ind = props.denomination.indexOf("p");
	const price = parseFloat(props.denomination.substr(0, ind)) / 100;

	return (
		<div>
			<div className="w-full h-[70vh] relative rounded-sm overflow-hidden max-w-md mx-auto p-8 my-10 bg-secondary">
				<div className="relative z-10 flex flex-col justify-between h-full pt-6">
					<Lens hovering={hovering} setHovering={setHovering}>
						<img src={props.fdcImage} alt={props.name} width={500} />
					</Lens>
					<div className="py-2 relative z-20 flex flex-col gap-y-4">
						<h2 className="text-text text-3xl text-left font-bold font-worksans">
							{props.name}
						</h2>
						<div className="flex justify-between text-xl font-semibold">
							<p>&#8377;{price}</p>
							<p>{props.releaseDate}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
