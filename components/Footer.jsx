const Footer =()=> {
	return (
		<>
			<div className="flex flex-col justify-center items-center mb-10">
				<span className="text-[20px] font-bold text-violet-800">
					Collaborations are welcome
				</span>
				<span className="text-[36px] font-bold text-violet-900">
					Let&apos;s Work Together🤝
				</span>
				<p className="w-2/4 text-center text-violet-900 font-[500]">
					You can reach out to me via Email or any of the social media
					icon below you can stay in touch with me on Twitter and
					Github where I post my works
				</p>
			</div>
			<hr className="w-fullborder-0 h-px bg-gray-200 " />
			<div className="px-12">
				<div className="h-[200px] bg-gradient-to-r from-violet-700 to-fuchsia-600 absolute left-0 w-full px-[80px]">
					<div className=" flex justify-between">
						<div className="py-7">
							<h2 className="text-3xl font-bold text-white">
								Samie Azubike
							</h2>
							<label className="text-gray-100">
								Software Developer
							</label>
						</div>
						<div className="py-7">
							<h3 className="font-semibold text-gray-100">
								EMAIL
							</h3>
							<label className="font-bold text-gray-50 text-[20px]">
								codewithsamie@gmail.com
							</label>
						</div>

						<div className="flex gap-5 py-7 ">
							<a
								href="https://www.twitter.com/samieteq"
								className="">
								<i className="bx bxl-twitter bx-rotate-270 text-3xl transform transition-all hover:scale-150 sm:max-lg:text-5xl xs:max-md:text-2xl text-gray-50"></i>
							</a>
							<a href="https://www.linkedin.com/in/samieteq">
								<i className="bx bxl-linkedin-square bx-rotate-270 text-3xl transform transition-all hover:scale-150 hover:rotate-10 sm:max-lg:text-5xl xs:max-md:text-2xl text-gray-50 "></i>
							</a>
							<a href="https://www.github.com/samieteq">
								<i className="bx bxl-github text-3xl transform transition-all rotate-270 hover:scale-150 sm:max-lg:text-5xl xs:max-md:text-2xl text-gray-50"></i>
							</a>
						</div>
					</div>
					<span className="flex text-gray-200 mt-9">
						&#169; Copyright 2023 Samieteq
					</span>
				</div>
			</div>
		</>
	);
};

export default Footer