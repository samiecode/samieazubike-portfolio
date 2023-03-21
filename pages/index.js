import Head from "next/head";
import Image from "next/image";

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
				<div className="flex relative items-center justify-between after:content['Hello '] after:border-b-2 after:absolute after:border-violet-800 after:left-0 after:top-0 after:bg-violet-800">
					<a
						href="#"
						className="py-7 text-4xl font-bold no-underline relative xs:max-sm:text-[27px]">
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
					<div className="md:max-lg:hidden sm:max-lg:hidden xs:max-md:hidden">
						<a
							href="https://drive.google.com/file/d/1m-Q5CZCYU5Y0E4XAeajOC7UXhTUFpSHy/view?usp=sharing"
							className="border-2 rounded-[6px] border-violet-800 px-6 py-3 font-bold text-violet-800">
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
				<hr className="w-[100%] border-0 h-px bg-gray-200 absolute left-0 top-22" />

				{/* Hero */}
				<div
					className="flex relative top-[80px] justify-between   md:max-lg:flex-col 
				sm:max-lg:flex-col min-[320px]:max-lg:flex-col">
					{/* Description  */}
					<div className="w-[50%] md:max-lg:w-[100%] sm:max-lg:w-[100%] h-auto relative md:max-lg:top-[600px]  sm:max-lg:top-[500px] xs:max-md:w-[100%] xs:max-md:top-[300px]">
						<label className="font-bold text-[79px] leading-none pt-[40px] tracking-tight xs:max-md:text-[40px]">
							I&apos;m a{" "}
							<span className="text-violet-800">
								Software
								<br /> Developer
							</span>
						</label>
						<p className="text-[20px] font-medium relative top-[20px] font-medium xs:max-md:text-[18px]">
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
			</main>
		</>
	);
}

function Contact() {
	return (
		<div className="py-[70px] xs:max-sm:w-[100%] xs:max-lg:flex md:max-lg:flex flex-col">
			<a
				href="#"
				className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-4 px-8 rounded font-bold text-center text-md xs:max-sm:w-[100%] xs:max-sm:px-2 ">
				Contact Me
			</a>
			<a
				href="#"
				className="relative py-5 px-9 rounded font-bold text-xl text-violet-800 xs:max-sm:px-4 text-center mt-4">
				View Portfolio 
				<i class="bx bx-link-external md:max-lg:absolute bottom-6 right-16 ml-2"></i>
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
