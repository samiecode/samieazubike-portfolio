import Image from "next/image";
export default function Technology() {
	return (
		<>
			<div className="my-[100px] flex flex-col px-4 py-4 h-auto">
				<h1 className="z-20 text-black relative before:-bottom-1 font-bold text-6xl before:z-10 before:content-[''] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:absolute before:w-[170px] before:h-[7px] before:bottom-0 before:left-0 ">
					Technologies
				</h1>
				<p className="text-[22px] mt-10">
					Here are some of the design software packages, programming
					languages and frameworks that I use frequently. I&apos;m
					always looking to learn new things everyday!
				</p>
				<div className="mt-10 grid grid-cols-5 gap-6 items-center">
					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#7fa4ec]">
						<div className="w-[80px] h-[80px] border-[#7fa4ec] border-2 rounded-full flex justify-center items-center flex-col">
							<Image
								src="/images/java.png"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							JAVA
						</label>
					</div>

					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#8bc24a]">
						<div className="w-[80px] h-[80px] border-[#8bc24a] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/spring.svg"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							SPRINGBOOT
						</label>
					</div>

					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#ffd600]">
						<div className="w-[80px] h-[80px] border-[#ffd600] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/javascript-39395.png"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							JAVASCRIPT
						</label>
					</div>

					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center flex-col hover:border-2 hover:border-[#00d8ff] transform transition-all hover:scale-110">
						<div className="w-[80px] h-[80px] border-[#00d8ff] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/reacct.png"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							REACT JS
						</label>
					</div>

					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#ec5c28]">
						<div className="w-[80px] h-[80px] border-[#ec5c28] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/html-5.png"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							HTML
						</label>
					</div>
					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#2b78c8]">
						<div className="w-[80px] h-[80px] border-[#2b78c8] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/css-3.png"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							CSS
						</label>
					</div>
					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#07b6d5]">
						<div className="w-[80px] h-[80px] border-[#07b6d5] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/tailwind-css-icon.svg"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							TAILWINDCSS
						</label>
					</div>
					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-black">
						<div className="w-[80px] h-[80px] border-black border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/github.png"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							GITHUB
						</label>
					</div>
					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#1f90f4]">
						<div className="w-[80px] h-[80px] border-[#1f90ff] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/MySQL.png"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							MYQSL
						</label>
					</div>
					<div className="px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#ec5c28]">
						<div className="w-[80px] h-[80px] border-[#ec5c28] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/postman.svg"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							POSTMAN
						</label>
					</div>
					<div className="self-center px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-center items-center transform transition-all hover:scale-110 flex-col hover:border-2 hover:border-[#2597ef]">
						<div className="w-[80px] h-[80px] border-[#2597ef] border-2 rounded-full flex justify-center items-center">
							<Image
								src="/images/docker.png"
								height={40}
								width={40}
								alt="icon"
							/>
						</div>
						<label className="font-bold text-[15px] mt-4">
							DOCKER
						</label>
					</div>
				</div>
			</div>
		</>
	);
};
