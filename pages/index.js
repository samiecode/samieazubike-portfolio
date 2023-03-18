import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css'

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
			</Head>
			<main className="container">
				<div className="flex items-center">
					<a
						href="#"
						className="py-7 text-4xl font-bold no-underline relative col-5">
						Samie Azubike
					</a>
					<div className="row">
						<a href="#" className="no-underline col">
							About
						</a>
						<a href="#" className="no-underline col">
							Skills
						</a>
						<a href="#" className="no-underline col">
							Portfolio
						</a>
					</div>
					<div className="col-5">
						<a href="#" className="col-5">
							Resume
						</a>
					</div>
				</div>
				<div className="flex relative top-[80px] justify-around">
					<div className="w-[50%]">
						<label className="font-bold text-[80px] leading-none pt-[40px] tracking-tight">
							I&apos;m a
							<span className="text-violet-800">
								Software
								<br /> Developer
							</span>
						</label>
						<p className="w-[80%] text-[18px] font-medium relative top-[20px]">
							I have a year of experience building and designing
							software, Currently, I love to work on web
							application using technologies like, Java,
							Javascript, SpringBoot, MySQL and PostgreSQL.
						</p>
					</div>
					<div className="w-[350px] h-[350px] bg-[#0DB760] relative rounded before:content-[''] before:absolute  before:w-[335px] before:h-[325px] before:border-4 before:border-[#000] before:-left-[30px] before:top-[50px] before:rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500">
						<div className="hero-avatar"></div>
						<img
							src="/MAT_6779.png"
							className="z-20 absolute bottom-[0]"
						/>
					</div>
					<div className="absolute right-0">
						<label>Follow me on:</label>
					</div>
				</div>
			</main>
		</>
	);
}
