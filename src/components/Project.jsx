import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

const Project = ({ project }) => {
  const {status} = useSelector((state) => state.mode);
  const [activeHoverEffect, setActiveHoverEffect] = useState(false);
  const [popupActiveHoverEffect, setPopupActiveHoverEffect] = useState(null);
  const [projectPopUpWindow, setProjectPopUpWindow] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div>
      <div
        className="w-full sm:p-4 px-0 py-4 flex gap-3 hover:bg-gray-500/10 rounded-sm hover:shadow-lg cursor-pointer"
        onMouseEnter={() => setActiveHoverEffect((prev) => !prev)}
        onMouseLeave={() => setActiveHoverEffect((prev) => !prev)}
        onClick={() => {
          setProjectPopUpWindow(true);
        }}
      >
        <div className="w-1/4 flex flex-col gap-2 p-2">
          <img
            src={project.img}
            alt="Project-1"
            className=" rounded-sm outline outline-offset-2 outline-2 outline-cyan-800"
          />
          <span className="text-gray-400 text-sm">{project.period}</span>
        </div>
        <div className="w-3/4 flex flex-col gap-2">
          <h1
            className={`text-xl flex items-center gap-2 ${
              activeHoverEffect ? "text-cyan-500" : ""
            }`}
          >
            <span>{project.name}</span>{" "}
          </h1>
          <p className={`text-sm font-light ${status ? "text-slate-200" : "text-slate-950"}`}>{project.text}</p>
          <div className="flex gap-1 flex-wrap">
            {project?.techStack.map((tech, id) => (
              <span
                key={id}
                className="text-sm font-light bg-cyan-800/50 py-1 px-3 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {projectPopUpWindow && (
        <div className="fixed top-0 left-0 bottom-0 overflow-y-scroll z-10 blur-2 bg-black/40 w-full p-6">
          <div className={`relative border-2 m-auto border-white md:w-2/5 w-full md:px-6 md:py-6 px-3 py-3 rounded-md  flex flex-col gap-2 ${status ? "bg-gradient-to-tr from-black to-slate-900" : "bg-white"}`}>
            <h1 className="font-semibold text-2xl">{project.name}</h1>
            <img className="rounded-md" src={project.img} alt="project-img" />
            <span className="text-gray-300 text-base">{project.period}</span>
            <p className={`text-sm font-light ${status ? "text-slate-200" : "text-slate-950"}`}>{project.text}</p>
            {showDescription && (<p className={`text-sm font-light ${status ? "text-slate-200" : "text-slate-950"}`}>{project.description}</p>)}
            {!showDescription ? (<button onClick={() => {
              setShowDescription(true);
            }}>
              show description...
            </button>): (
              <button onClick={() => {
                setShowDescription(false)
              }}>
              hide description...
            </button>
            )}
            <div className="flex gap-1 flex-wrap">
              {project?.techStack.map((tech, id) => (
                <span
                  key={id}
                  className="text-sm font-light bg-cyan-800/50 py-1 px-3 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className={`text-base px-2 py-1 mt-2 flex items-center gap-1 text-yellow-500 bg-white rounded-xl w-fit ${
                    popupActiveHoverEffect === "live" ? "text-cyan-500" : ""
                  }`}
                  onMouseEnter={() => setPopupActiveHoverEffect("live")}
                  onMouseLeave={() => setPopupActiveHoverEffect(null)}
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                  <span>Live</span>{" "}
                  <FaArrowRight
                    className={`text-base -rotate-45 transition-transform ease-in-out  ${
                      popupActiveHoverEffect === "live"
                        ? "-translate-y-1 translate-x-1"
                        : ""
                    }  `}
                  />
                </a>
              )}
            </div>
            <div className="flex gap-2">
              {project.githubLink1 && (
                <a
                  href={project.githubLink1.href}
                  className={`text-base px-2 py-1 flex items-center gap-1 text-black bg-white rounded-xl w-fit ${
                    popupActiveHoverEffect === "github1" ? "text-cyan-500" : ""
                  }`}
                  onMouseEnter={() => setPopupActiveHoverEffect("github1")}
                  onMouseLeave={() => setPopupActiveHoverEffect(null)}
                >
                  <FaGithub />
                  <span>{project.githubLink1.text}</span>{" "}
                  <FaArrowRight
                    className={`text-base -rotate-45 transition-transform ease-in-out  ${
                      popupActiveHoverEffect === "github1"
                        ? "-translate-y-1 translate-x-1"
                        : ""
                    }  `}
                  />
                </a>
              )}
              {project.githubLink2 && (
                <a
                  href={project.githubLink2.href}
                  className={`text-base px-2 py-1 flex items-center gap-1 text-black bg-white rounded-xl w-fit ${
                    popupActiveHoverEffect === "github2" ? "text-cyan-500" : ""
                  }`}
                  onMouseEnter={() => setPopupActiveHoverEffect("github2")}
                  onMouseLeave={() => setPopupActiveHoverEffect(null)}
                >
                  <FaGithub />
                  <span>{project.githubLink2.text}</span>{" "}
                  <FaArrowRight
                    className={`text-base -rotate-45 transition-transform ease-in-out  ${
                      popupActiveHoverEffect === "github2"
                        ? "-translate-y-1 translate-x-1"
                        : ""
                    }  `}
                  />
                </a>
              )}
            </div>
            <button
              className={`text-2xl ${status ? "text-white" : "text-black"} absolute right-3 top-3 shadow-md p-2 rounded-full`}
              onClick={() => {
                setProjectPopUpWindow(false);
              }}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
