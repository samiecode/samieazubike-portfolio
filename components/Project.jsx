import React from "react";
import Image from "next/image";

function Project({link, bgcolor, image, name, stack, des, visit, url}) {
	return (
		<>
			<div className="drop-shadow-sm w-[370px] h-auto bg-gray-100 rounded-xl px-4 py-4">
				<div
					className={`w-full bg-white h-[150px] flex items-center justify-center ${bgcolor} py-5 rounded-md`}
				>
					<Image
						className="w-[100%] h-[100%] rounded-md drop-shadow-sm object-contain"
						src={`/images/${image}`}
						height={300}
						width={300}
						alt="project image"
					/>
				</div>

				<div className="bg-white flex flex-col h-auto px-6 pb-6 gap-3">
					<h1 className="font-bold text-2xl text-violet-900">
						{name}
					</h1>
					<div>
						<ul className="flex flex-wrap font-semibold text-violet-900 w-full gap-5">
							{stack.map((item, key) => (
								<>
									<li
										key={key}
										className="flex items-center gap-2 self-start"
									>
										<span className="block bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[7px] w-[7px] rounded-full"></span>
										{item}
									</li>
								</>
							))}
						</ul>
					</div>
					<div className="flex flex-col justify-between h-[150px]">
						<h1 className=" text-[14px]">{des}</h1>
						<div className="flex gap-5">
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
								className={`${!visit? 'hidden': null} self-start text-gray-600  border hover:border-violet-500 font-semibold rounded-full px-6 py-2 text-[14px] transform transition-all  ease-in-out duration-500 hover:text-violet-500`}
							>
								Visit
							</a>
						</div>
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
