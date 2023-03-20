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
			</Head>
			<main className="px-[120px] md:max-lg:px-20 sm:max-lg:px-12 relative">
				{/* Nav - Header */}
				<div className="flex relative items-center justify-between after:content['Hello '] after:border-b-2 after:absolute after:border-violet-800 after:left-0 after:top-0 after:bg-violet-800">
					<a
						href="#"
						className="py-7 text-4xl font-bold no-underline relative">
						Samie Azubike
					</a>
					<div className="md:max-lg:hidden sm:max-lg:hidden">
						<a
							href="#"
							className="no-underline px-4 py-1 font-bold hover:border-b-2">
							About
						</a>
						<a
							href="#"
							className="no-underline px-4 py-1 font-bold hover:border-b-2">
							Skills
						</a>
						<a
							href="#"
							className="no-underline px-4 py-1 font-bold hover:border-b-2 hover: ">
							Portfolio
						</a>
					</div>
					<div className="">
						<a
							href="https://drive.google.com/file/d/1m-Q5CZCYU5Y0E4XAeajOC7UXhTUFpSHy/view?usp=sharing"
							className="border-2 rounded-[6px] border-violet-800 px-6 py-3 font-bold text-violet-800">
							Resume
						</a>
					</div>
				</div>
				<hr className="w-[100%] border-0 h-px bg-gray-200 absolute left-0 top-22" />

				{/* Hero */}
				<div
					className="flex relative top-[80px] justify-between   md:max-lg:flex-col 
				sm:max-lg:flex-col min-[320px]:max-lg:flex-col">
					<div className="w-[50%] md:max-lg:w-[100%] sm:max-lg:w-[100%] h-auto">
						<label className="font-bold text-[80px] leading-none pt-[40px] tracking-tight">
							I&apos;m a{" "}
							<span className="text-violet-800">
								Software
								<br /> Developer
							</span>
						</label>
						<p className="text-[17px] font-medium relative top-[20px]">
							I have a year of experience building and designing
							software, Currently, I love to work on web
							application using technologies like, Java,
							Javascript, SpringBoot, MySQL and PostgreSQL.
						</p>
					</div>
					<div className="relative md:max-lg:top-[200px] sm:max-lg:top-[170px] md:max-lg:left-12 sm:max-lg:left-12">
						<div className="w-[350px] h-[350px] relative rounded before:content-[''] before:absolute  before:w-[340px] before:h-[325px] before:border-4 before:border-[#000] before:-left-[30px] before:top-[50px] before:rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 md:max-lg:w-[500px] md:max-lg:h-[500px] md:max-lg:before:h-[460px] md:max-lg:before:w-[500px] md:max-lg:before:-left-12 md:max-lg:before:top-20">
							<Image
								alt="samie azubike | software developer"
								src="/MAT_6779.png"
								className="z-20 absolute bottom-[0] w-[500px]"
								width={350}
								height={300}
							/>
						</div>
					</div>
				</div>
				<SocialLink />
			</main>
		</>
	);
}

function SocialLink() {
	return (
		<div className="absolute rotate-90 right-[-105px] top-[350px]  text-violet-800 text-semibold flex items-center md:max-lg:hidden sm:max-lg:hidden ">
			<div className="flex items-center">
				<label className="px-5">Follow me on:</label>
				<hr className="w-12 border-0 h-px bg-violet-800" />
			</div>

			<div className="px-5 flex gap-4">
				<a href="https://www.twitter.com/samieteq" className="">
					<i class="bx bxl-twitter bx-rotate-270 text-3xl"></i>
				</a>
				<a href="https://www.linkedin.com/in/samieteq">
					<i class="bx bxl-linkedin-square bx-rotate-270 text-3xl"></i>
				</a>
				<a href="https://www.github.com/samieteq">
					<i class="bx bxl-github bx-rotate-270 text-3xl"></i>
				</a>
			</div>
		</div>
	);
}
