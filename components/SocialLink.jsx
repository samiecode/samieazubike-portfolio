export default function SocialLink() {
	return (
		<div className="col-start-10 col-end-13 absolute left-[160px] top-48 flex flex-col text-violet-800 text-semibold items-center xs:max-lg:col-start-7 xs:max-xm:col-start-6 xs:max-xm:top-24 xs:max-xml:left-[160px] xs:max-sm:left-[200px]">
			<div className="flex rotate-90 items-center xs:max-xm:hidden">
				<label className="text-sm ">Follow me on:</label>
				<hr className="w-12 border-0 h-px bg-violet-800 relative left-6" />
			</div>

			<div className="flex flex-col gap-4 relative top-[100px]">
				<a
					href="https://www.twitter.com/samieteq"
					className="xs:max-sm:bg-white xs:max-sm:rounded-full xs:max-sm:h-[35px] xs:max-sm:w-[35px] xs:max-sm:flex xs:max-sm:items-center xs:max-sm:justify-center xs:max-sm:opacity-90 xs:max-sm:drop-shadow-sm ">
					<i className="bx bxl-twitter bx-rotate-270 text-4xl transform transition-all hover:scale-150 xs:max-sm:text-2xl"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/samieteq"
					className="xs:max-sm:bg-white xs:max-sm:rounded-full xs:max-sm:h-[35px] xs:max-sm:w-[35px] xs:max-sm:flex xs:max-sm:items-center xs:max-sm:justify-center xs:max-sm:opacity-90 xs:max-sm:drop-shadow-sm">
					<i className="bx bxl-linkedin-square bx-rotate-270 text-4xl transform transition-all hover:scale-150 hover:rotate-10 xs:max-sm:text-2xl"></i>
				</a>
				<a
					href="https://www.github.com/samieteq"
					className="xs:max-sm:bg-white xs:max-sm:rounded-full xs:max-sm:h-[35px] xs:max-sm:w-[35px] xs:max-sm:flex xs:max-sm:items-center xs:max-sm:justify-center xs:max-sm:opacity-90 xs:max-sm:drop-shadow-sm ">
					<i className="bx bxl-github text-4xl transform transition-all rotate-270 hover:scale-150 xs:max-sm:text-2xl"></i>
				</a>
			</div>
		</div>
	);
}
