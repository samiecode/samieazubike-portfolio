import Link from "next/link";

const Project = ({link, image, name, stack, des, bgcolor}) => {
	return (
		<>
			<div className="project w-[370px] drop-shadow-md h-auto rounded-[10px] xs:max-md:w-[90%]">
				<div
					className={`w-full h-[200px] bg-white flex items-center justify-center bg-${bgcolor}`}
					style={{background: bgcolor}}>
					<img
						className="w-[60%] h-[60%] rounded-md drop-shadow-md object-contain"
						src={`/images/${image}`}
						alt="project image"
					/>
				</div>
				<div className="bg-white px-6 py-6 flex flex-col gap-3">
					<h1 className="relative font-bold text-2xl text-violet-900">
						{name}
					</h1>
					<div>
						<ul className="flex flex-wrap gap-5 font-semibold text-violet-900 py-2 h-[50px] leading-[7px]  xs:max-sm:h-auto">
							{stack.map((item, key) => (
								<>
									<li
										key={key}
										className="flex items-center gap-2 self-start">
										<span className="block bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[10px] w-[10px] rounded-full"></span>
										{item}
									</li>
								</>
							))}
						</ul>
					</div>

					<h1 className=" text-[14px] h-[80px] xs:max-sm:h-auto">{des}</h1>

					<Link
						href={link}
						className="bg-gradient-to-r from-violet-500 to-fuchsia-500 self-start text-white font-semibold rounded-full px-4 py-2 text-[14px] transform transition-all  ease-in-out duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-500">
						Source
					</Link>
				</div>
			</div>
		</>
	);
};

export default Project;
