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
			<main className="lg:px-[120px px-12 relative">
				<div className="flex items-center justify-between">
					<a
						href="#"
						className="py-7 text-4xl font-bold no-underline relative">
						Samie Azubike
					</a>
					<div className="hidden lg:flex">
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
					<div className="lg:flex hidden" >
						<a
							href="https://drive.google.com/file/d/1m-Q5CZCYU5Y0E4XAeajOC7UXhTUFpSHy/view?usp=sharing"
							className="border-2 rounded-[6px] border-violet-800 px-6 py-3 font-bold text-violet-800">
							Resume
						</a>
					</div>
				</div>
				<div className="flex relative top-[80px] justify-between sm:flex-col lg:flex-row min-[320px]:flex-col">
					<div className="lg:w-[50%] sm:w-[100%] ">
						<label className="font-bold lg:text-[80px] leading-none pt-[40px] tracking-tight text-[45px]">
							I&apos;m a{" "}
							<span className="text-violet-800">
								Software
								<br /> Developer
							</span>
						</label>
						<p className="text-[17px] font-medium relative top-[20px] lg:w-[100%] min-[900px]:w-[80%]">
							I have a year of experience building and designing
							software, Currently, I love to work on web
							application using technologies like, Java,
							Javascript, SpringBoot, MySQL and PostgreSQL.
						</p>
					</div>
					<div className=" ">
						<div className="lg:top-0 top-44 w-[350px] h-[350px] relative rounded before:content-[''] before:absolute  before:w-[335px] before:h-[325px] before:border-4 before:border-[#000] before:-left-[30px] before:top-[50px] before:rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500">
							<Image
								alt="samie azubike | software developer"
								src="/MAT_6779.png"
								className="z-20 absolute bottom-[0]"
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
		<div className="absolute rotate-90 right-[-105px] top-[350px]  text-violet-800 text-semibold flex items-center">
			<div className="flex items-center">
				<label className="px-5">Follow me on:</label>
				<hr className="w-12 border-0 h-px bg-violet-800" />
			</div>

			<div className="px-5 flex gap-4">
				<a href="#" className="">
					<i class="bx bxl-twitter bx-rotate-270 text-3xl"></i>
				</a>
				<a href="#">
					<i class="bx bxl-linkedin-square bx-rotate-270 text-3xl"></i>
				</a>
				<a href="#">
					<i class="bx bxl-github bx-rotate-270 text-3xl"></i>
				</a>
			</div>
		</div>
	);
}
