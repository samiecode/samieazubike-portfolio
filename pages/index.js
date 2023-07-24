import Head from "next/head";
import Footer from "@/components/Footer";
import Technology from "@/components/Technology";
import About from "@/components/About";
import PortFolio from "@/components/PortFolio";
import {useEffect} from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

export default function Home() {
	useEffect(() => {
		console.log(window.pageYOffset);
	});

	return (
		<>
			<Head>
				<title>Samie Azubike | Software Engineer</title>
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
					rel="stylesheet"
				></link>
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center gap-[100px]">
				<NavBar />
				<Hero/>
				
				<About />
				<PortFolio />
				<Technology />
				<Footer />

				{/* About Section */}
			</main>
		</>
	);
}
