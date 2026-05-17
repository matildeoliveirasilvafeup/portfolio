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

export default function Portfolio() {
	const [showVideo, setShowVideo] = useState(false);
	const [showGallery, setShowGallery] = useState(false);
	const [activePhoto, setActivePhoto] = useState(null);

	const galleryImages = [
		"/1.png",
		"/2.png",
		"/3.png",
		"/4.png",
		"/5.png",
		"/6.png",
		"/7.png",
		"/8.png",
		"/9.jpg",
		"/10.jpg",
		"/11.jpeg",
		"/12.jpeg",
		"/13.jpeg",
		"/14.jpeg",
		"/15.jpeg",
		"/16.jpeg",
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
					className={`text-xs px-4 py-2 rounded-full font-medium whitespace-nowrap ${project.status === "in progress"
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

	return (
		<div className="min-h-screen bg-[#ebe3cf] text-neutral-900 px-8 py-10 md:px-14">
			<div className="max-w-7xl mx-auto">
				<header className="mb-10 flex items-end justify-between gap-6">
					<div className="flex items-center gap-5">
						<img
							src={profilePic}
							alt="Profile"
							className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-neutral-300 shadow-sm"
						/>
						<div>
							<div className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-3">
								Matilde Oliveira Silva · FEUP · LEIC
							</div>
							<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-600">
								Projects
							</h1>
						</div>
					</div>
					<div className="hidden md:flex gap-4 text-sm text-neutral-600">
						<a
							href="https://www.linkedin.com/in/matilde-oliveira-silva-59a83b208/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/matildeoliveirasilvafeup"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
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
										<a
											href={project.link}
											target="_blank"
											rel="noreferrer"
											className="text-xs uppercase tracking-[0.16em] text-neutral-400 hover:text-neutral-600 transition-colors"
										>
											GitHub repository
										</a>
										<span className="text-neutral-300 text-xs">·</span>
										<button
											onClick={() => setShowGallery(true)}
											className="text-xs uppercase tracking-[0.16em] text-neutral-400 hover:text-neutral-600 transition-colors flex items-center gap-1.5"
										>
											<span>⊞</span>
											<span>Gallery</span>
										</button>
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
							<button
								onClick={() => setShowVideo(false)}
								className="text-neutral-400 hover:text-neutral-700 text-2xl leading-none"
							>
								×
							</button>
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

						{/* Lightbox */}
						{activePhoto !== null ? (
							<div className="flex flex-col items-center gap-4 flex-1 overflow-hidden">
								<div className="flex-1 flex items-center justify-center w-full overflow-hidden">
									<img
										src={galleryImages[activePhoto]}
										alt={`Screenshot ${activePhoto + 1}`}
										className="max-h-full max-w-full object-contain rounded-2xl"
									/>
								</div>
								<div className="flex items-center gap-4">
									<button
										onClick={() =>
											setActivePhoto((p) =>
												p === 0 ? galleryImages.length - 1 : p - 1
											)
										}
										className="w-10 h-10 rounded-full bg-[#ebe3cf] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 transition-colors text-lg"
									>
										←
									</button>
									<span className="text-xs text-neutral-400 uppercase tracking-widest">
										{activePhoto + 1} / {galleryImages.length}
									</span>
									<button
										onClick={() =>
											setActivePhoto((p) =>
												p === galleryImages.length - 1 ? 0 : p + 1
											)
										}
										className="w-10 h-10 rounded-full bg-[#ebe3cf] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 transition-colors text-lg"
									>
										→
									</button>
								</div>
							</div>
						) : (
							/* Grid */
							<div className="overflow-y-auto flex-1">
								<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
									{galleryImages.map((src, idx) => (
										<button
											key={idx}
											onClick={() => setActivePhoto(idx)}
											className="aspect-square rounded-2xl overflow-hidden bg-[#ebe3cf] hover:-translate-y-0.5 transition-transform"
										>
											<img
												src={src}
												alt={`Screenshot ${idx + 1}`}
												className="w-full h-full object-cover"
											/>
										</button>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
