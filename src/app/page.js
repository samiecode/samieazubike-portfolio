import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import PortFolio from '../components/PortFolio'
import Technology from "../components/Technology";
import Footer from "../components/Footer";


export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-center gap-[100px]">
				<NavBar />
				<Hero />

				<About />
				<PortFolio />
				<Technology />
				<Footer />

			</main>
		</>
	);
}
