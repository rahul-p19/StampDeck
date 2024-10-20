/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { FlipWords } from "./ui/flip-words";

export default function Hero() {
	const words = ["An online platform", "A web community"];
	return (
		<div className="bg-background pb-8 sm:pb-12 lg:pb-12">
			<div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
				<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
					<div>
						<div className="mt-20">
							<div>
								<a href="#" className="inline-flex space-x-4">
									<span className="rounded bg-[#facc71] px-2.5 py-1 text-xs font-semibold text-primary tracking-wide uppercase font-worksans">
										What&apos;s new
									</span>
									<span className="inline-flex items-center text-sm font-medium text-primary font-worksans space-x-1">
										<span>Moving your Philatelic Deposit Account online</span>
									</span>
								</a>
							</div>
							<div className="mt-6 sm:max-w-xl">
								<h1 className="text-4xl font-extrabold text-primary tracking-tight sm:text-5xl font-inter relative">
									<div className="relative h-12">
										<FlipWords
											words={words}
											duration={4000}
											className="text-primary absolute"
										/>
									</div>
									for philatelists
								</h1>

								<ul className="flex flex-col gap-y-1 p-8  font-worksans text-accent font-semibold list-disc">
									<li>Buy Products</li>
									<li>Connect with fellow philatelists</li>
									<li>Access information</li>
									<li>Manage your Philatelic Deposit Account</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="sm:mx-auto sm:max-w-3xl sm:px-6">
					<div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<div className="hidden sm:block">
							<div className="absolute inset-y-0 left-1/2 w-screen bg-background rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
							<svg
								className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
								width={404}
								height={392}
								fill="none"
								viewBox="0 0 404 392">
								<defs>
									<pattern
										id="837c3e70-6c3a-44e6-8854-cc48c737b659"
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse">
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className="text-[#c32f27a0]"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width={404}
									height={392}
									fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
								/>
							</svg>
						</div>
						<div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
							<img
								className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none object-fill"
								src="/assets/screenshot.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
