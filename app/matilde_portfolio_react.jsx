"use client";

import { useState } from "react";

const profilePic = "/foto2.jpg";

export default function Portfolio() {
  const [showVideo, setShowVideo] = useState(false);

  const projects = [
    {
      title: "Mobile App Development",
      status: "in progress",
      description: "EcoRewards — a gamified recycling app that turns waste delivery into real rewards. Users earn points at collection centers via QR code, track streaks and CO₂ impact, and redeem vouchers at local partners. Built with React Native, Firebase and OpenStreetMap.",
      link: null,
      hasDemo: true,
    },
    {
      title: "Fullstack Website Development",
      status: "done",
      description: "Full-stack website integrating frontend and backend systems into a functional product-oriented application.",
      link: "https://github.com/matildeoliveirasilvafeup/Fullstack-Website-Development",
    },
    {
      title: "WebTech Project",
      status: "done",
      description: "Web application project focused on architecture, component organisation and end-to-end implementation.",
      link: "https://github.com/matildeoliveirasilvafeup/WebTechProject",
    },
    {
      title: "Database Project",
      status: "done",
      description: "Relational modelling, structured queries and information integrity through database design.",
      link: "https://github.com/matildeoliveirasilvafeup/Database-Project",
    },
    {
      title: "Delivery Truck Pallet Optimization",
      status: "done",
      description: "Optimisation project focused on pallet allocation constraints and analytical modelling.",
      link: "https://github.com/matildeoliveirasilvafeup/DeliveryTruckPalletOptimization",
    },
    {
      title: "Route Planning Tool",
      status: "done",
      description: "Route planning tool focused on computational efficiency and constrained optimisation.",
      link: "https://github.com/matildeoliveirasilvafeup/RoutePlanningTool",
    },
    {
      title: "RGB Image Processing Pipeline",
      status: "done",
      description: "RGB image pipeline exploring computational transformations and structured processing stages.",
      link: "https://github.com/matildeoliveirasilvafeup/RGB-Image-Processing-Pipeline",
    },
    {
      title: "Game Construction",
      status: "done",
      description: "Game development project highlighting interactive systems and application logic design.",
      link: "https://github.com/matildeoliveirasilvafeup/Game-Construction",
    },
    {
      title: "Python Academic Exercises",
      status: "done",
      description: "Collection of Academic Python exercises, quizzes covering recursion, functional programming, data structures, files and algorithmic problem solving.",
      link: "https://github.com/matildeoliveirasilvafeup/Python-Academic-Exercises",
    },
  ];

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
            <a href="https://www.linkedin.com/in/matilde-oliveira-silva-59a83b208/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/matildeoliveirasilvafeup" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project) =>
            project.hasDemo ? (
              /* Mobile App card — opens video modal */
              <button
                key={project.title}
                onClick={() => setShowVideo(true)}
                className="text-left bg-[#f4eedf] rounded-[28px] p-7 min-h-[260px] shadow-sm hover:-translate-y-1 transition-transform flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-600 leading-tight max-w-[75%]">
                    {project.title}
                  </h2>
                  <span className="text-xs px-4 py-2 rounded-full font-medium whitespace-nowrap bg-green-300 text-green-900">
                    {project.status}
                  </span>
                </div>
                <p className="text-neutral-700 leading-relaxed text-base flex-1">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-neutral-400">
                  <span>▶</span>
                  <span>Watch demo</span>
                </div>
              </button>
            ) : (
              /* All other cards — link to GitHub */
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-[#f4eedf] rounded-[28px] p-7 min-h-[260px] shadow-sm hover:-translate-y-1 transition-transform flex flex-col"
              >
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
                <div className="mt-6 text-xs uppercase tracking-[0.16em] text-neutral-400">
                  GitHub repository
                </div>
              </a>
            )
          )}
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
    </div>
  );
}
