import Project from "./Project";

const PortFolio = () => {
	return (
		<>
			<div className="my-[100px] flex flex-col px-4 py-4 h-auto gap-10">
				<h1 className="z-20 text-black relative before:-bottom-1 font-bold text-6xl before:z-10 before:content-[''] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:absolute before:w-[245px] before:h-[7px] before:bottom-0 before:left-0 ">
					Portfolio
				</h1>
				<div className="flex w-full">
					<Project
						link="https://github.com/samieteq/bobfi"
						image="bobfi-splash-screen"
					/>
				</div>
			</div>
		</>
	);
};

export default PortFolio