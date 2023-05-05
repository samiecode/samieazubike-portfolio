const Footer = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center mb-10">
				<span className="text-[20px] font-bold text-violet-800 xs:max-sm:text-[16px]">
					Collaborations are welcome
				</span>
				<span className="text-[36px] font-bold text-violet-900 xs:max-md:text-[24px]">
					Let&apos;s Work Together🤝
				</span>
				<p className="w-2/4 text-center text-violet-900 font-[500] xs:max-md:w-[80%] xs:max-md:text-[14px]">
					You can reach out to me via Email or any of the social media
					icon below you can stay in touch with me on Twitter and
					Github where I post my works
				</p>
			</div>

			<div className="grid grid-cols-12 h-[200px  bg-gradient-to-r from-violet-700 to-fuchsia-600 w-full xs:max-lg:h-auto gap-9 xs:max-sm:py-7">
				<div className="col-start-2 col-span-4 xs:max-sm:col-start-2 xs:max-sm:col-span-8 ">
					<div className="py-7 xs:max-sm:py-0">
						<h2 className="text-3xl font-bold text-white">
							Samie Azubike
						</h2>
						<label className="text-gray-100">
							Software Developer
						</label>
					</div>
				</div>

				<div className="col-start-6 py-7 xs:max-lg:col-start-8 xs:max-sm:col-start-2 xs:max-sm:py-0 xs:max-md:col-start-7">
					<h3 className="font-semibold text-gray-100">EMAIL</h3>
					<label className="font-bold text-gray-50 text-[20px]">
						codewithsamie@gmail.com
					</label>
				</div>

				<div className="relative -left-16 col-start-11 flex gap-5 py-7 xs:max-lg:col-start-9 xs:max-lg:col-span-3 xs:max-lg:order-last xs:max-sm:col-start-2 xs:max-sm:left-0  xs:max-sm:py-0 xs:max-md:col-start-8">
					<a href="https://www.twitter.com/samieteq" className="">
						<i className="bx bxl-twitter bx-rotate-270 text-5xl transform transition-all hover:scale-150  text-gray-50"></i>
					</a>
					<a href="https://www.linkedin.com/in/samieteq">
						<i className="bx bxl-linkedin-square bx-rotate-270 text-5xl transform transition-all hover:scale-150 hover:rotate-10 text-gray-50 "></i>
					</a>
					<a href="https://www.github.com/samieteq">
						<i className="bx bxl-github text-5xl transform transition-all rotate-270 hover:scale-150 s text-gray-50"></i>
					</a>
				</div>
				<div className="col-start-2 col-span-5 xs:max-lg:col-start-2 xs:max-sm:order-last">
					<span className="flex text-gray-200 mt-9 xs:max-sm:mt-0">
						&#169; Copyright 2023 Samieteq
					</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
