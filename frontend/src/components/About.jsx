function About() {
	return (
		<div id="about" className="h-screen">
			<div className="w-full flex justify-center my-10">
				<h1 className="text-5xl font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
					About Us
				</h1>
			</div>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2 lg:p-1 ">
					<div className="flex items-center justify-center">
						<img
							className="rounded-lg "
							src="/about.jpg"
							alt="image of a card"
						/>
					</div>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-primary font-inter">Welcome to StampDeck!</h2>
						<p className="my-2 leading-9 max-w-xl px-3  flex  text-accent text-xl font-worksans font-semibold">
							We feature a vibrant online platform for philatelists across
							India. Discover, connect, and trade with fellow collectors while
							managing your Philately Deposit Account (PDA) seamlessly online.
							Our platform simplifies access to information, enhances your
							collecting experience, and brings the joy of philately to your
							fingertips.
						</p>
				</div>
			</div>
		</div>
	);
}

export default About;
