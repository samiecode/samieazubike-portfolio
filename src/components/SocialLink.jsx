export default function SocialLink() {
	return (
		<div className="flex flex-col text-violet-800 text-semibold items-center xs:max-md:absolute xs:max-md:-right-[50px] xs:max-md:-top-10">
			<div className="flex rotate-90 items-center xs:max-xm:hidden">
				<label className="text-sm ">Follow me on:</label>
				<hr className="w-12 border-0 h-px bg-violet-800 relative left-6" />
			</div>

			<div className="flex flex-col gap-4 relative top-[100px]">
				<a
					href="https://www.twitter.com/samiecode"
					className="xs:max-sm:bg-white xs:max-sm:rounded-full xs:max-sm:h-[35px] xs:max-sm:w-[35px] xs:max-sm:flex xs:max-sm:items-center xs:max-sm:justify-center xs:max-sm:opacity-90 xs:max-sm:drop-shadow-sm "
				>
					<i className="bx bxl-twitter bx-rotate-270 text-4xl transform transition-all hover:scale-150 xs:max-sm:text-2xl"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/samiecode"
					className="xs:max-sm:bg-white xs:max-sm:rounded-full xs:max-sm:h-[35px] xs:max-sm:w-[35px] xs:max-sm:flex xs:max-sm:items-center xs:max-sm:justify-center xs:max-sm:opacity-90 xs:max-sm:drop-shadow-sm"
				>
					<i className="bx bxl-linkedin-square bx-rotate-270 text-4xl transform transition-all hover:scale-150 xs:max-sm:text-2xl"></i>
				</a>
				<a
					href="https://www.github.com/samieocode"
					className="xs:max-sm:bg-white xs:max-sm:rounded-full xs:max-sm:h-[35px] xs:max-sm:w-[35px] xs:max-sm:flex xs:max-sm:items-center xs:max-sm:justify-center xs:max-sm:opacity-90 xs:max-sm:drop-shadow-sm "
				>
					<i className="bx bxl-github text-4xl transform transition-all rotate-270 hover:scale-150 xs:max-sm:text-2xl"></i>
				</a>
			</div>
		</div>
	);
}
