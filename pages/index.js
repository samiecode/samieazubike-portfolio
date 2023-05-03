import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Samie Azubike | Software Developer</title>
				<meta
					name="description"
					content="Samie Azubike Portfolio | Software Developer"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
					rel="stylesheet"></link>
				{/* <script
					src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
					async></script> */}
				<script
					src="https://kit.fontawesome.com/07e60f2f11.js"
					crossorigin="anonymous"
					async></script>
			</Head>
			<main className="px-[120px] md:max-lg:px-20 sm:max-lg:px-12 xs:max-md:px-7 relative">
				{/* Nav - Header */}
				<div className="px-[120px] z-50 bg-white border-b-[2px] opacity-95 border-gray-100 w-full fixed flex items-center justify-between left-0">
					<a
						href="#"
						className="py-7 text-2xl font-bold no-underline relative xs:max-sm:text-[27px]">
						Samie Azubike
					</a>
					<div className="md:max-lg:hidden sm:max-lg:hidden xs:max-md:hidden">
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
					<div className="md:max-lg:hidden sm:max-lg:hidden xs:max-md:hidden transform transition-all hover:scale-105">
						<a
							href="https://drive.google.com/file/d/1m-Q5CZCYU5Y0E4XAeajOC7UXhTUFpSHy/view?usp=sharing"
							className="border-2 rounded-[6px] border-violet-800 px-6 py-3 font-bold text-violet-800 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 hover:text-white hover:border-violet-500">
							Resume
						</a>
					</div>
					<div className="absolute right-0 lg:hidden">
						<Image
							className="text-slate-900 xs:max-sm:w-[30px]"
							src="/bars.svg"
							alt="Menu Bar"
							height={40}
							width={40}
						/>
					</div>
				</div>
				{/* <hr className="w-[100%] border-0 h-px bg-gray-200 absolute left-0 top-22" /> */}

				{/* Hero */}
				<div
					className="flex relative top-[80px] justify-between   md:max-lg:flex-col 
				sm:max-lg:flex-col min-[320px]:max-lg:flex-col pt-[90px]">
					{/* Description  */}
					<div className="w-[50%] md:max-lg:w-[100%] sm:max-lg:w-[100%] h-auto relative md:max-lg:top-[600px]  sm:max-lg:top-[500px] xs:max-md:w-[100%] xs:max-md:top-[300px]">
						<label className="font-bold text-[70px] leading-none pt-[40px] tracking-tight xs:max-md:text-[40px]">
							I&apos;m a{" "}
							<span className="text-violet-800">
								Software
								<br /> Developer
							</span>
						</label>
						<p className="text-[18px] font-medium relative top-[20px] font-medium xs:max-md:text-[18px]">
							I have a year of experience building and designing
							software, Currently, I love to work on web
							application using technologies like, Java,
							Javascript, SpringBoot, MySQL and PostgreSQL.
						</p>
						<Contact />
					</div>

					{/*=========== Description End =========== */}

					{/* ==== Image ===== */}
					<div
						className="relative items-center 
					md:max-lg:flex md:max-lg:justify-center  md:max-lg:w-[100%]   md:max-lg:absolute md:max-lg:left-12 md:max-lg:top-10 sm:max-lg:absolute
					sm:max-lg:flex
					sm:max-lg:justify-center
					sm:max-lg:w-[100%] sm:max-lg:top-[10px]  sm:max-lg:left-12 xs:max-lg:absolute xs:max-lg:flex xs:max-lg:justify-center xs:max-lg:w-[100%]">
						<div
							className="w-[350px] h-[350px] relative top-[30px] rounded before:content-[''] before:absolute  before:w-[340px] before:h-[325px] before:border-4 before:border-[#000] before:-left-[30px] before:top-[50px] before:rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 
						
						md:max-lg:w-[400px] md:max-lg:h-[400px] md:max-lg:before:h-[360px] md:max-lg:before:w-[370px] md:max-lg:before:-left-8 md:max-lg:before:top-[70px] xs:max-sm:w-[210px] xs:max-sm:h-[210px] xs:max-sm:before:h-[185px] xs:max-sm:before:w-[200px]  xs:max-sm:before:border-[2px] xs:max-sm:before:top-[40px] xs:max-sm:before:-left-5 xs:max-sm:before:rounded">
							<Image
								alt="samie azubike | software developer"
								src="/MAT_6779.png"
								className="z-20 absolute bottom-[0] w-[500px]"
								width={350}
								height={300}
							/>
						</div>
					</div>
					{/*======= Image End =========== */}
				</div>
				<SocialLink />
				<About />
				<PortFolio />
				<Technology />
				<Footer />

				{/* About Section */}
			</main>
		</>
	);
}

function Contact() {
	return (
		<div className="py-[70px] xs:max-sm:w-[100%] xs:max-lg:flex md:max-lg:flex flex-col">
			<a
				href="#"
				className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-4 px-8 rounded font-bold text-center text-md xs:max-sm:w-[100%] xs:max-sm:px-2 hover:bg-gradient-to-r hover:from-violet-700 hover:to-fuchsia-600">
				Contact Me
			</a>
			<a
				href="#"
				className="relative py-5 px-9 rounded font-bold text-xl text-violet-800 xs:max-sm:px-4 text-center mt-4">
				View Portfolio
				<i class="bx bx-link-external md:max-lg:absolute bottom-6 right-16 ml-2 transform transition-all hover:scale-110"></i>
			</a>
		</div>
	);
}

function SocialLink() {
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

const Technology = () => {
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
const About = () => {
	return (
		<>
			<div className="my-[200px] flex flex-col px-4 py-4 h-auto">
				<h1 className="z-20 text-black relative before:-bottom-1 font-bold text-6xl before:z-10 before:content-[''] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:absolute before:w-[170px] before:h-[7px] before:bottom-0 before:left-0 ">
					About
				</h1>
				<p className="text-[20px] mt-10">
					I am a life long learning , determined and passion-driven
					Software Engineer, building Tech Communities around Tech
					Products and increasing engagement through user adoption by
					working closely with the Marketing, Product, and Engineering
					Team to come up with a clear-cut strategy to level-up user
					onboarding. I have special interest in back-end program
					development using Java and Javascript. Experienced in
					designing interfaces,developing, testing and debugging
					codes. At the moment i am building projects with Springboot
					and React
				</p>
			</div>
		</>
	);
};

const PortFolio = () => {
	return (
		<>
			<div className="my-[200px] flex flex-col px-4 py-4 h-auto gap-10">
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

const Footer = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center mb-10">
				<span className="text-[20px] font-bold text-violet-800">
					Collaborations are welcome
				</span>
				<span className="text-[36px] font-bold text-violet-900">
					Let&apos;s Work Together🤝
				</span>
				<p className="w-2/4 text-center text-violet-900 font-[500]">
					You can reach out to me via Email or any of the social media
					icon below you can stay in touch with me on Twitter and
					Github where I post my works
				</p>
			</div>
			<hr className="w-fullborder-0 h-px bg-gray-200 " />
			<div className="px-12">
				<div className="h-[200px] bg-gradient-to-r from-violet-700 to-fuchsia-600 absolute left-0 w-full px-[80px]">
					<div className=" flex justify-between">
						<div className="py-7">
							<h2 className="text-3xl font-bold text-white">
								Samie Azubike
							</h2>
							<label className="text-gray-100">
								Software Developer
							</label>
						</div>
						<div className="py-7">
							<h3 className="font-semibold text-gray-100">
								EMAIL
							</h3>
							<label className="font-bold text-gray-50 text-[20px]">
								codewithsamie@gmail.com
							</label>
						</div>

						<div className="flex gap-5 py-7 ">
							<a
								href="https://www.twitter.com/samieteq"
								className="">
								<i class="bx bxl-twitter bx-rotate-270 text-3xl transform transition-all hover:scale-150 sm:max-lg:text-5xl xs:max-md:text-2xl text-gray-50"></i>
							</a>
							<a href="https://www.linkedin.com/in/samieteq">
								<i class="bx bxl-linkedin-square bx-rotate-270 text-3xl transform transition-all hover:scale-150 hover:rotate-10 sm:max-lg:text-5xl xs:max-md:text-2xl text-gray-50 "></i>
							</a>
							<a href="https://www.github.com/samieteq">
								<i class="bx bxl-github text-3xl transform transition-all rotate-270 hover:scale-150 sm:max-lg:text-5xl xs:max-md:text-2xl text-gray-50"></i>
							</a>
						</div>
					</div>
					<span className="flex text-gray-200 mt-9">
						&#169; Copyright 2023 Samieteq
					</span>
				</div>
			</div>
		</>
	);
};

const Project = ({link, image}) => {
	return (
		<>
			<div className="w-[340px] rounded drop-shadow-md h-auto ">
				<div className="w-full h-[180px] bg-white px-2 py-2">
					<img
						className="w-full h-full"
						src={`/images/${image}.png`}
						alt="project image"
					/>
				</div>
				<div className="bg-white px-6 py-6 flex flex-col gap-3">
					<h1 className="text-center">
						A modern UI/UX restaurant website that can be utilized
						for commercial purposes.
					</h1>
					<div>
						<h2 className="text-center font-bold text-md">
							Stack:
						</h2>
						<ul className="flex justify-around font-semibold text-violet-900 py-2">
							<li>Core Java</li>
							<li>JavaFx</li>
							<li>MySQL</li>
						</ul>
					</div>
					<Link
						href={link}
						className="bg-gradient-to-r from-violet-500 to-fuchsia-500 self-start text-white font-semibold rounded-full px-4 py-2 text-[14px]">
						Source
					</Link>
				</div>
			</div>
		</>
	);
};
