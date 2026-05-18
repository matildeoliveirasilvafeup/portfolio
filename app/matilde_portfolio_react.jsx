"use client";

import { useState } from "react";

const profilePic = "/foto2.jpg";

const langColors = {
	"React Native": "#61dafb",
	Firebase: "#ffca28",
	OpenStreetMap: "#7ebc6f",
	Liquid: "#06a8f8",
	CSS: "#563d7c",
	JavaScript: "#f1e05a",
	PHP: "#4f5d95",
	SQL: "#e38c00",
	"C++": "#f34b7d",
	Python: "#3572a5",
	Java: "#b07219",
	CMake: "#da3434",
};

const langTextColors = {
	Firebase: "#7a5800",
	JavaScript: "#6a5700",
	OpenStreetMap: "#2a5a28",
};

function LanguageTag({ lang }) {
	const bg = langColors[lang] || "#9ca3af";
	const text = langTextColors[lang] || "#fff";
	return (
		<span
			style={{ backgroundColor: bg, color: text }}
			className="text-[10px] font-semibold px-2.5 py-1 rounded-full leading-none"
		>
			{lang}
		</span>
	);
}

function GitHubIcon({ size = 22 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
		</svg>
	);
}

function LinkedInIcon({ size = 22 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

// Polaroid frame component
function PolaroidPhoto({ src, alt, rotation = "-2deg", className = "" }) {
	return (
		<div
			className={`relative inline-block ${className}`}
			style={{ transform: `rotate(${rotation})` }}
		>
			{/* Tape strips */}
			<div
				style={{
					position: "absolute",
					top: "-14px",
					left: "18%",
					width: "28%",
					height: "28px",
					background: "rgba(180,165,130,0.55)",
					borderRadius: "3px",
					transform: "rotate(-1deg)",
					zIndex: 10,
					backdropFilter: "blur(1px)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: "-14px",
					right: "18%",
					width: "28%",
					height: "28px",
					background: "rgba(180,165,130,0.55)",
					borderRadius: "3px",
					transform: "rotate(1.5deg)",
					zIndex: 10,
					backdropFilter: "blur(1px)",
				}}
			/>
			{/* Polaroid card */}
			<div
				style={{
					background: "#fff",
					padding: "10px 10px 36px 10px",
					boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
					borderRadius: "3px",
					display: "inline-block",
				}}
			>
				<img
					src={src}
					alt={alt}
					style={{
						display: "block",
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center top",
					}}
				/>
			</div>
		</div>
	);
}

export default function Portfolio() {
	const [page, setPage] = useState("home");
	const [showVideo, setShowVideo] = useState(false);
	const [showGallery, setShowGallery] = useState(false);
	const [activePhoto, setActivePhoto] = useState(null);

	const galleryImages = [
		"/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png",
		"/7.png", "/8.png", "/9.jpg", "/10.jpg", "/11.jpeg", "/12.jpeg",
		"/13.jpeg", "/14.jpeg", "/15.jpeg", "/16.jpeg",
	];

	const projects = [
		{
			title: "Mobile App Development",
			status: "in progress",
			description:
				"EcoRewards — a gamified recycling app that turns waste delivery into real rewards. Users earn points at collection centers via QR code, track streaks and CO₂ impact, and redeem vouchers at local partners. Built with React Native, Firebase and OpenStreetMap.",
			link: null,
			hasDemo: true,
			langs: ["React Native", "Firebase", "OpenStreetMap"],
		},
		{
			title: "Mobile App Development",
			status: "in progress",
			description:
				"Ongoing mobile application exploring iterative product development, application architecture and user experience.",
			link: "https://github.com/matildeoliveirasilvafeup/Mobile-App-Development",
			hasGallery: true,
			langs: ["Java"],
		},
		{
			title: "Fullstack Website Development",
			status: "done",
			description:
				"Full-stack website integrating frontend and backend systems into a functional product-oriented application.",
			link: "https://github.com/matildeoliveirasilvafeup/Fullstack-Website-Development",
			langs: ["Liquid", "CSS", "JavaScript"],
		},
		{
			title: "WebTech Project",
			status: "done",
			description:
				"Web application project focused on architecture, component organisation and end-to-end implementation.",
			link: "https://github.com/matildeoliveirasilvafeup/WebTechProject",
			langs: ["PHP", "JavaScript", "CSS"],
		},
		{
			title: "Database Project",
			status: "done",
			description:
				"Relational modelling, structured queries and information integrity through database design.",
			link: "https://github.com/matildeoliveirasilvafeup/Database-Project",
			langs: ["SQL"],
		},
		{
			title: "Delivery Truck Pallet Optimization",
			status: "done",
			description:
				"Optimisation project focused on pallet allocation constraints and analytical modelling.",
			link: "https://github.com/matildeoliveirasilvafeup/DeliveryTruckPalletOptimization",
			langs: ["C++", "Python"],
		},
		{
			title: "Route Planning Tool",
			status: "done",
			description:
				"Route planning tool focused on computational efficiency and constrained optimisation.",
			link: "https://github.com/matildeoliveirasilvafeup/RoutePlanningTool",
			langs: ["C++"],
		},
		{
			title: "RGB Image Processing Pipeline",
			status: "done",
			description:
				"RGB image pipeline exploring computational transformations and structured processing stages.",
			link: "https://github.com/matildeoliveirasilvafeup/RGB-Image-Processing-Pipeline",
			langs: ["C++"],
		},
		{
			title: "Game Construction",
			status: "done",
			description:
				"Game development project highlighting interactive systems and application logic design.",
			link: "https://github.com/matildeoliveirasilvafeup/Game-Construction",
			langs: ["Java"],
		},
		{
			title: "Python Academic Exercises",
			status: "done",
			description:
				"Collection of Academic Python exercises, quizzes covering recursion, functional programming, data structures, files and algorithmic problem solving.",
			link: "https://github.com/matildeoliveirasilvafeup/Python-Academic-Exercises",
			langs: ["Python"],
		},
	];

	const CardContent = ({ project }) => (
		<>
			<div className="flex items-start justify-between gap-4 mb-5">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-600 leading-tight max-w-[75%]">
					{project.title}
				</h2>
				<span
					className={`text-xs px-4 py-2 rounded-full font-medium whitespace-nowrap ${
						project.status === "in progress"
							? "bg-green-300 text-green-900"
							: "bg-violet-300 text-violet-900"
					}`}
				>
					{project.status}
				</span>
			</div>
			<p className="text-neutral-700 leading-relaxed text-base flex-1">
				{project.description}
			</p>
			<div className="mt-5 flex flex-wrap gap-1.5">
				{project.langs.map((lang) => (
					<LanguageTag key={lang} lang={lang} />
				))}
			</div>
		</>
	);

	// ── NAV ──────────────────────────────────────────────────────────────────
	const Nav = () => (
		<nav className="fixed left-0 top-0 h-full w-14 flex flex-col items-center justify-center gap-7 z-40">
			<button
				onClick={() => setPage("home")}
				title="Home"
				className={`p-2 rounded-xl transition-colors ${
					page === "home" ? "text-amber-600" : "text-neutral-400 hover:text-neutral-700"
				}`}
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<path d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
					<path d="M9 22V12h6v10" />
				</svg>
			</button>
			<button
				onClick={() => setPage("about")}
				title="About"
				className={`p-2 rounded-xl transition-colors ${
					page === "about" ? "text-amber-600" : "text-neutral-400 hover:text-neutral-700"
				}`}
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<circle cx="12" cy="7" r="4" />
					<path d="M5.5 21a6.5 6.5 0 0113 0" />
				</svg>
			</button>
			<button
				onClick={() => setPage("projects")}
				title="Projects"
				className={`p-2 rounded-xl transition-colors ${
					page === "projects" ? "text-amber-600" : "text-neutral-400 hover:text-neutral-700"
				}`}
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
				</svg>
			</button>
		</nav>
	);

	// ── HOME PAGE ─────────────────────────────────────────────────────────────
	const HomePage = () => (
		<div className="min-h-screen bg-[#ebe3cf] flex flex-col items-center justify-center relative overflow-hidden pl-14">
			<div
				className="absolute right-[-80px] top-[-80px] w-[420px] h-[420px] rounded-full opacity-10"
				style={{ background: "radial-gradient(circle, #a8937a 0%, transparent 70%)" }}
			/>
			<div
				className="absolute left-[60px] bottom-[40px] w-[200px] h-[200px] rounded-full opacity-10"
				style={{ background: "radial-gradient(circle, #7a8fa8 0%, transparent 70%)" }}
			/>

			<div className="flex flex-col md:flex-row items-center gap-12 px-8 max-w-4xl w-full">
				{/* Polaroid photo — left side */}
				<div className="flex-shrink-0 flex items-center justify-center" style={{ paddingTop: "20px" }}>
					<PolaroidPhoto
						src={profilePic}
						alt="Matilde"
						rotation="-3deg"
						className=""
						style={{}}
					/>
					<style>{`
						.polaroid-img-wrap {
							width: 220px;
							height: 260px;
						}
						.polaroid-img-wrap img {
							width: 220px;
							height: 260px;
						}
					`}</style>
				</div>

				{/* Text — right side */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
					<div className="text-sm uppercase tracking-[0.22em] text-neutral-500">
						FEUP · LEIC
					</div>

					<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-600 leading-none">
						Matilde Oliveira Silva
					</h1>

					<p className="text-neutral-600 text-lg leading-relaxed max-w-sm">
						<span className="text-amber-700 font-medium">Hello!</span>{" "}
						I'm a software engineering student building interfaces that are as meaningful as they are beautiful —{" "}
						<span className="italic">and sometimes a little magical.</span>
					</p>

					<div className="flex gap-5 mt-1">
						<a
							href="https://github.com/matildeoliveirasilvafeup"
							target="_blank"
							rel="noreferrer"
							className="w-11 h-11 rounded-full bg-[#f4eedf] flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-[#ede3cc] shadow-sm transition-all hover:-translate-y-0.5"
						>
							<GitHubIcon />
						</a>
						<a
							href="https://www.linkedin.com/in/matilde-oliveira-silva-59a83b208/"
							target="_blank"
							rel="noreferrer"
							className="w-11 h-11 rounded-full bg-[#f4eedf] flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-[#ede3cc] shadow-sm transition-all hover:-translate-y-0.5"
						>
							<LinkedInIcon />
						</a>
					</div>

					<button
						onClick={() => setPage("projects")}
						className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-neutral-700 transition-colors flex items-center gap-2"
					>
						<span>View projects</span>
						<span>→</span>
					</button>
				</div>
			</div>
		</div>
	);

	// ── ABOUT PAGE ────────────────────────────────────────────────────────────
	const travelImages = [
		"/travel1.jpg", "/travel2.jpg", "/travel3.jpg",
		"/travel4.jpg", "/travel5.jpg", "/travel6.jpg",
	];

	const AboutPage = () => {
		const [travelIdx, setTravelIdx] = useState(0);

		const prev = () => setTravelIdx((i) => (i === 0 ? travelImages.length - 1 : i - 1));
		const next = () => setTravelIdx((i) => (i === travelImages.length - 1 ? 0 : i + 1));

		return (
			<div className="min-h-screen bg-[#ebe3cf] px-8 py-14 md:px-14 pl-20">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-600 mb-10">
						About me
					</h1>

					<div className="grid md:grid-cols-2 gap-8 items-start">
						{/* LEFT — travel carousel */}
						<div className="bg-[#f4eedf] rounded-[28px] p-6 shadow-sm flex flex-col gap-4">
							<p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Travels ✈</p>

							{/* Main carousel image */}
							<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#ebe3cf]">
								<img
									key={travelIdx}
									src={travelImages[travelIdx]}
									alt={`Travel ${travelIdx + 1}`}
									className="w-full h-full object-cover"
									style={{ animation: "fadeIn 0.3s ease" }}
								/>
							</div>

							{/* Arrow controls */}
							<div className="flex items-center justify-between px-1">
								<button
									onClick={prev}
									className="w-10 h-10 rounded-full bg-[#ebe3cf] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-[#ddd5bf] transition-all text-lg font-light"
								>
									←
								</button>
								<span className="text-xs text-neutral-400 uppercase tracking-widest">
									{travelIdx + 1} / {travelImages.length}
								</span>
								<button
									onClick={next}
									className="w-10 h-10 rounded-full bg-[#ebe3cf] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-[#ddd5bf] transition-all text-lg font-light"
								>
									→
								</button>
							</div>

							{/* Dot indicators */}
							<div className="flex justify-center gap-1.5">
								{travelImages.map((_, idx) => (
									<button
										key={idx}
										onClick={() => setTravelIdx(idx)}
										className={`w-1.5 h-1.5 rounded-full transition-all ${
											idx === travelIdx
												? "bg-amber-600 w-4"
												: "bg-neutral-300 hover:bg-neutral-400"
										}`}
									/>
								))}
							</div>
						</div>

						{/* RIGHT — text + CV */}
						<div className="flex flex-col gap-6">
							<div className="bg-[#f4eedf] rounded-[28px] p-7 shadow-sm">
								<h2 className="text-xl font-semibold text-slate-600 mb-4 tracking-tight">
									What drives me ✦
								</h2>
								<p className="text-neutral-700 leading-relaxed text-base">
									I love to travel — discovering new places, cultures and the kind of wonder that only comes from stepping into the unknown. That same sense of wonder is what drew me to my biggest dream: designing interactive systems and software for theme park attractions and simulators. The idea of crafting an experience where technology and imagination meet — where someone steps in and genuinely forgets the world outside — is something I find endlessly exciting.
								</p>
								<div className="my-5 border-t border-[#e0d8c8]" />
								<p className="text-neutral-700 leading-relaxed text-base">
									I have a strong foundation in full-stack development, mobile applications and systems design. I care deeply about user experience and building software that is genuinely delightful to use — always looking for the intersection of logic and creativity.
								</p>
							</div>

							<a
								href="/CV Resume Matilde Oliveira Silva.pdf"
								download="CV Resume Matilde Oliveira Silva"
								className="inline-flex items-center gap-3 self-start bg-slate-600 text-[#f4eedf] px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-slate-700 transition-colors shadow-sm"
							>
								<span>Download CV</span>
								<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M12 16l-4-4h3V4h2v8h3l-4 4z" />
									<path d="M4 18h16" strokeLinecap="round" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<style>{`
					@keyframes fadeIn {
						from { opacity: 0.6; transform: scale(1.01); }
						to   { opacity: 1;   transform: scale(1); }
					}
				`}</style>
			</div>
		);
	};

	// ── PROJECTS PAGE ─────────────────────────────────────────────────────────
	const ProjectsPage = () => (
		<div className="min-h-screen bg-[#ebe3cf] text-neutral-900 px-8 py-10 md:px-14 pl-20">
			<div className="max-w-7xl mx-auto">
				<header className="mb-10 flex items-end justify-between gap-6">
					<div>
						<div className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-3">
							Matilde Oliveira Silva · FEUP · LEIC
						</div>
						<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-600">
							Projects
						</h1>
					</div>
					<div className="hidden md:flex gap-4 text-sm text-neutral-600">
						<a href="https://www.linkedin.com/in/matilde-oliveira-silva-59a83b208/" target="_blank" rel="noreferrer">LinkedIn</a>
						<a href="https://github.com/matildeoliveirasilvafeup" target="_blank" rel="noreferrer">GitHub</a>
					</div>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
					{projects.map((project, i) => {
						if (project.hasDemo) {
							return (
								<button
									key={i}
									onClick={() => setShowVideo(true)}
									className="text-left bg-[#f4eedf] rounded-[28px] p-7 min-h-[260px] shadow-sm hover:-translate-y-1 transition-transform flex flex-col"
								>
									<CardContent project={project} />
									<div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-neutral-400">
										<span>▶</span>
										<span>Watch demo</span>
									</div>
								</button>
							);
						}

						if (project.hasGallery) {
							return (
								<div
									key={i}
									className="bg-[#f4eedf] rounded-[28px] p-7 min-h-[260px] shadow-sm flex flex-col"
								>
									<CardContent project={project} />
									<div className="mt-4 flex items-center gap-3">
										<button
											onClick={() => setShowGallery(true)}
											className="text-xs uppercase tracking-[0.16em] text-neutral-400 hover:text-neutral-600 transition-colors flex items-center gap-1.5"
										>
											<span>⊞</span>
											<span>Watch gallery</span>
										</button>
										<span className="text-neutral-300 text-xs">·</span>
										<a
											href={project.link}
											target="_blank"
											rel="noreferrer"
											className="text-xs uppercase tracking-[0.16em] text-neutral-400 hover:text-neutral-600 transition-colors"
										>
											GitHub repository
										</a>
									</div>
								</div>
							);
						}

						return (
							<a
								key={i}
								href={project.link}
								target="_blank"
								rel="noreferrer"
								className="bg-[#f4eedf] rounded-[28px] p-7 min-h-[260px] shadow-sm hover:-translate-y-1 transition-transform flex flex-col"
							>
								<CardContent project={project} />
								<div className="mt-4 text-xs uppercase tracking-[0.16em] text-neutral-400">
									GitHub repository
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);

	return (
		<>
			<Nav />

			{page === "home" && <HomePage />}
			{page === "about" && <AboutPage />}
			{page === "projects" && <ProjectsPage />}

			{/* Video Modal */}
			{showVideo && (
				<div
					className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
					onClick={() => setShowVideo(false)}
				>
					<div
						className="bg-[#f4eedf] rounded-[28px] p-6 w-full max-w-3xl shadow-xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-2xl font-semibold tracking-tight text-slate-600">
								Mobile App Development
							</h2>
							<button onClick={() => setShowVideo(false)} className="text-neutral-400 hover:text-neutral-700 text-2xl leading-none">×</button>
						</div>
						<iframe
							src="https://drive.google.com/file/d/1JSMBT8zHq-LUr8f9b76w3jI92lGausLU/preview"
							className="w-full rounded-2xl"
							style={{ height: "480px" }}
							allow="autoplay"
							allowFullScreen
						/>
						<p className="mt-4 text-sm text-neutral-500 tracking-wide">
							Repository not yet public · work in progress
						</p>
					</div>
				</div>
			)}

			{/* Gallery Modal */}
			{showGallery && (
				<div
					className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
					onClick={() => {
						if (activePhoto === null) setShowGallery(false);
						else setActivePhoto(null);
					}}
				>
					<div
						className="bg-[#f4eedf] rounded-[28px] p-6 w-full max-w-4xl shadow-xl max-h-[90vh] flex flex-col"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between mb-5">
							<h2 className="text-2xl font-semibold tracking-tight text-slate-600">
								{activePhoto !== null
									? `Mobile App Development · ${activePhoto + 1} / ${galleryImages.length}`
									: "Mobile App Development"}
							</h2>
							<button
								onClick={() => {
									if (activePhoto !== null) setActivePhoto(null);
									else setShowGallery(false);
								}}
								className="text-neutral-400 hover:text-neutral-700 text-2xl leading-none"
							>
								×
							</button>
						</div>

						{activePhoto !== null ? (
							<div className="flex flex-col items-center gap-4">
								<div className="flex items-center justify-center w-full" style={{ height: "420px" }}>
									<img
										src={galleryImages[activePhoto]}
										alt={`Screenshot ${activePhoto + 1}`}
										style={{ maxHeight: "420px", maxWidth: "100%", objectFit: "contain" }}
										className="rounded-2xl"
									/>
								</div>
								<div className="flex items-center gap-4">
									<button
										onClick={() => setActivePhoto((p) => (p === 0 ? galleryImages.length - 1 : p - 1))}
										className="w-10 h-10 rounded-full bg-[#ebe3cf] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 transition-colors text-lg"
									>←</button>
									<span className="text-xs text-neutral-400 uppercase tracking-widest">
										{activePhoto + 1} / {galleryImages.length}
									</span>
									<button
										onClick={() => setActivePhoto((p) => (p === galleryImages.length - 1 ? 0 : p + 1))}
										className="w-10 h-10 rounded-full bg-[#ebe3cf] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 transition-colors text-lg"
									>→</button>
								</div>
							</div>
						) : (
							<div className="overflow-y-auto flex-1">
								<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
									{galleryImages.map((src, idx) => (
										<button
											key={idx}
											onClick={() => setActivePhoto(idx)}
											className="aspect-square rounded-2xl overflow-hidden bg-[#ebe3cf] hover:-translate-y-0.5 transition-transform"
										>
											<img src={src} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
										</button>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}
