import React from "react";
import Image from "next/image";

function Project({link, bgcolor, image, name, stack, des, visit, url}) {
	return (
		<>
			<div className="drop-shadow-md rounded-xl px-2 py-2">
				<div className="h-auto bg-white flex flex-col justify-between rounded-xl">
					<div
						className={`w-full h-[11rem] flex items-center justify-center ${bgcolor} rounded-xl`}
					>
						<Image
							className="w-[100%] h-[100%] rounded-xl object-cover"
							src={`/images/${image}`}
							height={300}
							width={300}
							alt="project image"
						/>
					</div>
					<div className="flex flex-col px-6 gap-3 h-[15rem] py-4 xs:max-sm:h-auto">
						<h1 className="font-bold text-2xl text-violet-900">
							{name}
						</h1>
						<div>
							<ul className="flex flex-wrap font-semibold w-full gap-2 justify-cente leading-[10px]">
								{stack.map((item, key) => (
									<>
										<span
											key={key}
											className="flex tracking-tight items-center gap-2 self-start border bg-gray-50 py-2 px-4 text-[12px] rounded-full xs:max-xm:text-[10px] xs:max-xm:py-1 xs:max-xm:px-2"
										>
											{item}
										</span>
									</>
								))}
							</ul>
						</div>
						<div className="flex flex-col justify-between">
							<h1 className=" text-[14px] xs:max-xm:text-[13px] tracking-tight">{des}</h1>
						</div>
					</div>
					<div className="flex gap-5 py-4 px-6 justify-between">
						<a
							target="_blank"
							href={link}
							className="self-start bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-full px-4 py-2 text-[14px] transform transition-all  ease-in-out duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-500"
						>
							Source
						</a>
						<a
							href={url}
							target="_blank"
							className={`${
								!visit ? "hidden" : null
							} self-start text-gray-600  border hover:border-violet-500 font-semibold rounded-full px-8 py-2 text-[14px] transform transition-all  ease-in-out duration-500 hover:text-violet-500`}
						>
							Visit
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;

// import Link from "next/link";

// const Project = ({link, image, name, stack, des, bgcolor}) => {
// 	return (
// 		<>
// 			<div className="project w-[370px] drop-shadow-md h-auto rounded-xl xs:max-md:w-[90%]">
// 				<div
// 					className={`w-full h-[200px] bg-white flex items-center justify-center bg-${bgcolor}`}
// 					style={{background: bgcolor}}>
// 					<img
// 						className="w-[60%] h-[60%] rounded-md drop-shadow-md object-contain"
// 						src={`/images/${image}`}
// 						alt="project image"
// 					/>
// 				</div>
// 				<div className="bg-white px-6 py-6 flex flex-col gap-3">
// 					<h1 className="relative font-bold text-2xl text-violet-900">
// 						{name}
// 					</h1>
// 					<div>
// 						<ul className="flex flex-wrap gap-5 font-semibold text-violet-900 py-2 h-[50px] leading-[7px]  xs:max-sm:h-auto">
// 							{stack.map((item, key) => (
// 								<>
// 									<li
// 										key={key}
// 										className="flex items-center gap-2 self-start">
// 										<span className="block bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[10px] w-[10px] rounded-full"></span>
// 										{item}
// 									</li>
// 								</>
// 							))}
// 						</ul>
// 					</div>

// 					<h1 className=" text-[14px] h-[80px] xs:max-sm:h-auto">{des}</h1>

// 					<Link
// 						href={link}
// 						className="bg-gradient-to-r from-violet-500 to-fuchsia-500 self-start text-white font-semibold rounded-full px-4 py-2 text-[14px] transform transition-all  ease-in-out duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-500">
// 						Source
// 					</Link>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Project;
