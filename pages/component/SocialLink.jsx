export default function SocialLink() {
	return (
		<div className="absolute right-0 flex flex-col top-[270px]  text-violet-800 text-semibold items-center">
			<div className="flex rotate-90 items-center xs:max-md:hidden md:max-lg:hidden">
				<label className="text-sm">Follow me on:</label>
				<hr className="w-12 border-0 h-px bg-violet-800 relative left-6" />
			</div>

			<div className="flex flex-col gap-4 relative top-[100px] xs:max-md:-top-[20px] xs:max-lg:-left-[30px] sm:max-lg:top-[50px] md:max-lg:top-[80px]  md:max-lg:-left-[50px] ">
				<a href="https://www.twitter.com/samieteq" className="">
					<i class="bx bxl-twitter bx-rotate-270 text-3xl transform transition-all hover:scale-150 sm:max-lg:text-5xl xs:max-md:text-2xl"></i>
				</a>
				<a href="https://www.linkedin.com/in/samieteq">
					<i class="bx bxl-linkedin-square bx-rotate-270 text-3xl transform transition-all hover:scale-150 hover:rotate-10 sm:max-lg:text-5xl xs:max-md:text-2xl "></i>
				</a>
				<a href="https://www.github.com/samieteq">
					<i class="bx bxl-github text-3xl transform transition-all rotate-270 hover:scale-150 sm:max-lg:text-5xl xs:max-md:text-2xl"></i>
				</a>
			</div>
		</div>
	);
}
