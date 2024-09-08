function Contact() {
	return (
		<div className="h-[70vh] max-w-full bg-background flex flex-col items-center" id="contact">
								<div className="text-center">
									<h2 className="text-5xl font-inter font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
										Contact Us
									</h2>
								</div>
						<form className="w-1/4 h-1/2 mt-10 text-lg">
							<div className="flex flex-col justify-around h-full">

								<div className="name">
									<div className="mt-2.5 ">
										<input
											type="text"
											name=""
											id=""
											placeholder="Name"
											className="w-full px-2 py-1 font-worksans placeholder:font-worksans text-primary placeholder-primary outline-none border-b border-b-primary bg-transparent"
											rows="2"
										/>
									</div>
								</div>

									<div className="mt-2.5 ">
										<input
											type="text"
											name=""
											id=""
											placeholder="Email Address"
											className="w-full px-2 py-1 text-primary placeholder-primary font-worksans placeholder:font-worksans outline-none border-b border-b-primary bg-transparent"
											rows="2"
										/>
									</div>

									<div className="feedback">
										<div className="mt-2.5">
											<textarea
												name=""
												placeholder="Send a Message"
												className="w-full px-4 py-4
                       text-primary placeholder-primary font-worksans placeholder:font-worksans outline-none bg-transparent border-b border-b-primary"
												rows="4"></textarea>
										</div>

									<div className="sm:col-span-2 flex justify-center mt-10">
										<button
											type="submit"
                      disabled
											className="text-lg px-2 py-1 text-white
                    bg-accent rounded-sm cursor-pointer font-worksans">
											Submit
										</button>
									</div>
								</div>
							</div>
						</form>
		</div>
	);
}

export default Contact;
