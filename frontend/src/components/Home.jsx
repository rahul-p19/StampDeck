import { Link } from "react-router-dom";
import Hero from "./Hero";
import Releases from "./Releases";
import {FaArrowRightLong} from "react-icons/fa6";

const resources = [
	{
	text: "ePostOffice",
	link: "https://www.epostoffice.gov.in/"
},
	{
	text: "India Post - Philately Section",
	link: "https://www.indiapost.gov.in/Philately/Pages/Content/Stamps.aspx"
},
	{
	text: "Department of Posts - West Bengal Circle",
	link: "https://westbengalpost.gov.in/MYSTAMPS"
}
];

function CommunityDescription() {
	return (
		<div className="w-full mt-8 p-8 py-20 flex flex-col gap-y-10">
			<div className="w-full flex justify-center">
				<h1 className="text-5xl py-1 font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
					Community
				</h1>
			</div>
			<div className="grid grid-cols-3 gap-12 place-content-center">
				<div className="flex flex-col gap-y-2">
					<h2 className="font-inter text-primary font-semibold text-xl text-center">Create and Read Posts</h2>
					<p className="text-accent font-worksans font-medium p-4 pl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae quod cupiditate repudiandae necessitatibus eveniet ratione omnis repellat provident itaque quaerat vero, minus impedit sit!</p>
				</div>
				<div className="flex flex-col gap-y-2">
					<h2 className="font-inter text-primary font-semibold text-xl text-center">Follow different categories</h2>
					<p className="text-accent font-worksans font-medium p-4 pl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae quod cupiditate repudiandae necessitatibus eveniet ratione omnis repellat provident itaque quaerat vero, minus impedit sit!</p>
				</div>
				<div className="flex flex-col gap-y-2">
					<h2 className="font-inter text-primary font-semibold text-xl text-center">Trade stamps</h2>
					<p className="text-accent font-worksans font-medium p-4 pl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae quod cupiditate repudiandae necessitatibus eveniet ratione omnis repellat provident itaque quaerat vero, minus impedit sit!</p>
				</div>
			</div>
		</div>
	);
}

function Home() {
	return (
		<>
			<Hero />
			<div className="h-[83vh] flex justify-center px-[10vw] mb-16 w-full">
				<div className="w-full grid grid-cols-2 justify-items-center">
					<h1 className="text-5xl font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
						Featured Releases
					</h1>
					<h1 className="text-5xl font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
						Resources
					</h1>
					<div className="h-[70vh] w-[30vw] flex justify-center items-center mt-16">
						<Releases />
					</div>
					<div className="px-12 py-8">
						<ul className="text-background font-worksans flex flex-col gap-y-6">
							{resources.map((item,ind)=>(
								<li className="flex items-center gap-4 bg-accent px-3 py-1 w-fit rounded-md" key={ind}>
								<Link
									to={item.link}
									target="_blank">
									{item.text}
								</Link>
									<FaArrowRightLong />
							</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<CommunityDescription />
		</>
	);
}

export default Home;
