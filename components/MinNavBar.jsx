const MinNavBar = ({isToggle}) => {
    return (
		<>
			<div
				className={`lg:hidden flex flex-col items-center h-[100vh] z-30 w-[300px] bg-white transition-all duration-500 ease-in-out ${
					isToggle
						? "right-0 transition-all duration-500 ease-in-out"
						: "-right-[300px]"
				} fixed top-0 `}>
				<div className="relative text-[24px] flex flex-col items-center top-28 gap-4 ">
					<a
						href="#"
						className="no-underline px-4 py-1 font-bold hover:text-violet-800">
						About
					</a>
					<a
						href="#"
						className="no-underline px-4 py-1 font-bold hover:text-violet-800">
						Skills
					</a>
					<a
						href="#"
						className="no-underline px-4 py-1 font-bold hover:text-violet-800 ">
						Portfolio
					</a>
				</div>
				<div className="relative top-[200px] text-xl transform transition-all  ease-in-out duration-500 hover:scale-105">
					<a
						href="https://drive.google.com/file/d/1m-Q5CZCYU5Y0E4XAeajOC7UXhTUFpSHy/view?usp=sharing"
						className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-white px-12 py-2 font-bold hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-500 hover:text-white hover:border-violet-500">
						Resume
					</a>
				</div>
			</div>
		</>
	);
}

export default MinNavBar