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
			<main className="relative">
				<div className="grid grid-cols-12 relative top-[80px] pt-[90px]">
					{/* Description  */}
					<div className="relative h-auto col-start-2 col-span-5 xs:max-lg:order-last xs:max-lg:col-start-2 xs:max-lg:col-span-10 xs:max-lg:top-[100px]">
						<label className="font-bold text-[70px] leading-none pt-[40px] tracking-tight xs:max-lg:block xs:max-xm:text-[40px]">
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
					<div className="relative col-start-8 xs:max-lg:col-start-1 xs:max-lg:col-span-12 xs:max-lg:flex items-center justify-center xs:max-xml:col-start-1">
						<div className="w-[350px] h-[350px] relative top-[30px] rounded before:content-[''] before:absolute  before:w-[340px] before:h-[325px] before:border-4 before:border-[#000] before:-left-[30px] before:top-[50px] before:rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 xs:max-xm:w-[290px] xs:max-xm:h-[290px] xs:max-xm:before:w-[280px] xs:max-xm:before:h-[265px]   xs:max-xml:w-[240px] xs:max-xml:h-[240px] xs:max-xml:before:w-[230px] xs:max-xml:before:h-[215px] xs:max-xml:border-[1px] xs:max-xml:before:-left-5 xs:max-xml:before:top-11">
							<Image
								alt="samie azubike | software developer"
								src="/MAT_6779.png"
								className="z-20 absolute bottom-[0] w-[500px]"
								width={350}
								height={300}
							/>
						</div>
					</div>
					<SocialLink />
					{/*======= Image End =========== */}
				</div>
				<About />
				<PortFolio />
				<Technology />
				<Footer />

				{/* About Section */}
			</main>
		</>
	);
}
