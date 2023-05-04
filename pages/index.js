import Head from "next/head";
import Image from "next/image";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import About from "@/components/About";
import SocialLink from "@/components/SocialLink";
import PortFolio from "@/components/PortFolio";

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
			</Head>
			<main className="px-[100px] px-20 relative">
					
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



