import SocialLink from "./SocialLink";
import Image from "next/image";
import Contact from "./Contact";

function Hero() {
	return (
		<>
			<div
				id="home"
				className="mt-36 flex w-full max-w-7xl items-center justify-between px-12 xs:max-sm:px-5 xs:max-lg:flex-col"
			>
				{/* Description  */}
				<div className="relative h-auto w-1/2  xs:max-lg:order-last xs:max-lg:top-[100px] xs:max-lg:self-start xs:max-lg:w-full ">
					<div>
						<h1 className="font-semibold text-[60px] text-gray-700 leading-none pt-[40px] tracking-tight xs:max-lg:block xs:max-xm:text-[40px]">
							Hi, I&apos;m{" "}
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
								Samie
							</span>
						</h1>
						<h2 className="text-2xl font-bold text-gray-700">
							Java Backend & Full Stack Engineer
						</h2>
					</div>
					<p className="text-[18px] font-medium relative top-[20px] font-medium xs:max-md:text-[18px] mt-5">
						I have a year of experience building and designing
						software, Currently, I love to work on web application
						using technologies like, Java, Javascript, SpringBoot,
						MySQL and PostgreSQL.
					</p>
					<Contact />
				</div>

				{/*=========== Description End =========== */}

				{/* ==== Image ===== */}
				<div className="relative flex items-center justify-center">
					<div className="w-[350px] h-[350px] relative top-[10px] rounded before:content-[''] before:absolute  before:w-[340px] before:h-[325px] before:border-4 before:border-[#000] before:-left-[30px] before:top-[50px] before:rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 xs:max-xm:w-[290px] xs:max-xm:h-[290px] xs:max-xm:before:w-[280px] xs:max-xm:before:h-[265px]   xs:max-xml:w-[240px] xs:max-xml:h-[240px] xs:max-xml:before:w-[230px] xs:max-xml:before:h-[215px] xs:max-xml:border-[1px] xs:max-xml:before:-left-5 xs:max-xml:before:top-11">
						<Image
							alt="samie azubike | software developer"
							src="/MAT_6779.png"
							className="z-20 absolute bottom-[0] w-[500px]"
							width={350}
							height={300}
						/>
					</div>
					<SocialLink />
				</div>
				{/*======= Image End =========== */}
			</div>
		</>
	);
}

export default Hero;
