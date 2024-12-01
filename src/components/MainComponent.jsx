import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import About from "./About";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import EducationSection from "./EducationSection";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { toggle } from "../redux/modeSlice";

const MainComponent = () => {
  const status = useSelector((state) => state.mode.status);
  const dispatch = useDispatch();
  const [activeHoverEffect, setActiveHoverEffect] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = {
    aboutRef: useRef(null),
    skillRef: useRef(null),
    projectRef: useRef(null),
    educationRef: useRef(null),
  };
  const mainScrollRef = useRef(null);
  const mobileScrollRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = mainScrollRef.current.scrollTop;

    // Determine the active section based on the scroll position
    Object.keys(sectionRefs).forEach((sectionId) => {
      const sectionRef = sectionRefs[sectionId];
      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.clientHeight;
      if (
        scrollPosition + 250 >= sectionTop &&
        scrollPosition + 250 < sectionBottom
      ) {
        // console.log(scrollPosition + 250, sectionTop, sectionBottom);
        setActiveSection(sectionRef.current.id);
      }
    });
  };

  const handleWindowClickScroll = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    const sectionTop = sectionRef.current.offsetTop;
    mainScrollRef.current.scrollTop = sectionTop - 80;
  };

  const handleMobileClickScroll = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    const sectionTop = sectionRef.current.offsetTop;
    window.scrollTo({
      top: sectionTop - 50,
    });
    setActiveHoverEffect("");
  };

  useEffect(() => {
    const scrollableElement = mainScrollRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        if (scrollableElement) {
          scrollableElement.removeEventListener("scroll", handleScroll);
        }
      };
    }
  });

  return (
    <div
      ref={mainScrollRef}
      className={`max-w-screen lg:max-h-screen md:overflow-x-hidden text-yellow scroll-smooth ${status ? "bg-gradient-to-tr from-black to-slate-900 text-white": ""}`}
    >
      <div ref={mobileScrollRef} className="flex lg:flex-row flex-col gap-5">
        <div className="lg:w-1/2 w-full lg:h-screen h-fit lg:sticky top-0 flex flex-col justify-between lg:gap-0 gap-16 xl:px-24 lg:px-18 md:px-16 sm:px-8 px-3 xl:py-16 lg:py-20 md:py-12 sm:py-12 py-32 pb-10">
          <div className="flex flex-col gap-3">
            <div>
              <img
                src="./images/profile-img.jpg"
                alt="Kartik Kumar"
                className={`${status ? "border-8 border-white" : "border-8 border-white"} rounded-full w-60 h-60 object-cover`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Hello there! I am</h2>
              <h1 className="md:text-6xl text-5xl font-bold drop-shadow-md shadow-white">
                Kartik Kumar
              </h1>
              <h2 className="text-2xl font-semibold">a MERN Stack Developer</h2>
              {/* <p className="text-lg font-medium">
                Hi, I am Kartik Thakur, a undergraduate Engineering IT student.
              </p> */}
            </div>
            <nav className="">
              <ul className="lg:flex hidden w-fit flex-col text-lg font-medium gap-1">
                <li
                  href="#about"
                  className={`${
                    activeSection === "about" || activeHoverEffect === "about"
                      ? status ? "text-white" : "text-slate-950"
                      : "text-slate-500"
                  } flex items-center gap-2 cursor-pointer select-none transition-all`}
                  onMouseEnter={() => setActiveHoverEffect("about")}
                  onMouseLeave={() => setActiveHoverEffect("")}
                  onClick={() => handleWindowClickScroll("aboutRef")}
                >
                  <div
                    className={`
                    ${
                      activeSection === "about" || activeHoverEffect === "about"
                        ? status ? "w-16 bg-white" : "w-16 bg-slate-950"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  About
                </li>
                <li
                  href="#skills"
                  className={`${
                    activeSection === "skills" || activeHoverEffect === "skills"
                      ? status ? "text-white" : "text-slate-950"
                      : "text-slate-500"
                  } flex items-center gap-2 cursor-pointer transition-all`}
                  onMouseEnter={() => setActiveHoverEffect("skills")}
                  onMouseLeave={() => setActiveHoverEffect("")}
                  onClick={() => handleWindowClickScroll("skillRef")}
                >
                  <div
                    className={`
                    ${
                      activeSection === "skills" ||
                      activeHoverEffect === "skills"
                        ? status ? "w-16 bg-white" : "w-16 bg-slate-950"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Skills
                </li>
                <li
                  href="#projects"
                  className={`${
                    activeSection === "projects" ||
                    activeHoverEffect === "projects"
                      ? status ? "text-white" : "text-slate-950"
                      : "text-slate-500"
                  } flex items-center gap-2 cursor-pointer transition-all`}
                  onMouseEnter={() => setActiveHoverEffect("projects")}
                  onMouseLeave={() => setActiveHoverEffect("")}
                  onClick={() => handleWindowClickScroll("projectRef")}
                >
                  {" "}
                  <div
                    className={`
                    ${
                      activeSection === "projects" ||
                      activeHoverEffect === "projects"
                        ? status ? "w-16 bg-white" : "w-16 bg-slate-950"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Projects
                </li>
                <li
                  href="#education"
                  className={`${
                    activeSection === "education" ||
                    activeHoverEffect === "education"
                      ? status ? "text-white" : "text-slate-950"
                      : "text-slate-500"
                  } flex items-center gap-2 cursor-pointer transition-all`}
                  onMouseEnter={() => setActiveHoverEffect("education")}
                  onMouseLeave={() => setActiveHoverEffect("")}
                  onClick={() => handleWindowClickScroll("educationRef")}
                >
                  {" "}
                  <div
                    className={`
                    ${
                      activeSection === "education" ||
                      activeHoverEffect === "education"
                        ? status ? "w-16 bg-white" : "w-16 bg-slate-950"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Education
                </li>
              </ul>
              {/* Mobile Navbar Functioning */}
              <ul className="lg:hidden w-fit flex flex-col text-lg font-medium gap-1">
                <li
                  className={`${status ? "bg-white" : "text-slate-900"} flex items-center gap-2 cursor-pointer transition-all`}
                  onClick={() => handleMobileClickScroll("aboutRef")}
                >
                  <div
                    className={`
                    ${
                      activeSection === "about" || activeHoverEffect === "about"
                        ? status ? "w-16 bg-white" : "w-16 bg-slate-950"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  About
                </li>
                <li
                  href="#skills"
                  className={`${status ? "bg-white" : "text-slate-900"} flex items-center gap-2 cursor-pointer transition-all`}
                  onClick={() => handleMobileClickScroll("skillRef")}
                >
                  <div
                    className={`
                    ${
                      activeSection === "skills" ||
                      activeHoverEffect === "skills"
                        ? status ? "w-16 bg-white" : "w-16 bg-slate-950"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Skills
                </li>
                <li
                  className={`${status ? "bg-white" : "text-slate-900"} flex items-center gap-2 cursor-pointer transition-all`}
                  onClick={() => handleMobileClickScroll("projectRef")}
                >
                  {" "}
                  <div
                    className={`
                    ${
                      activeSection === "projects" ||
                      activeHoverEffect === "projects"
                        ? status ? "w-16 bg-white" : "w-16 bg-slate-950"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Projects
                </li>
                <li
                  className={`${status ? "bg-white" : "text-slate-900"} flex items-center gap-2 cursor-pointer transition-all`}
                  onClick={() => handleMobileClickScroll("educationRef")}
                >
                  {" "}
                  <div
                    className={`
                    ${
                      activeSection === "education" ||
                      activeHoverEffect === "education"
                        ? status ? "w-16 bg-white" : "w-16 bg-slate-950"
                        : "w-8 bg-slate-500"
                    }
                     transition-all`}
                    style={{
                      height: "0.15rem",
                    }}
                  ></div>
                  Education
                </li>
              </ul>
            </nav>
          </div>
          <div className={`fixed md:left-0 md:right-auto right-0 top-28 ${status ? "text-slate-950 bg-white": "bg-slate-950 text-white"} md:rounded-tr-lg  rounded-br-md transition-all`}>
            <button
              className={`w-full ${status ? "bg-slate-950 text-white" : "bg-white text-slate-900"} p-2 rounded-tr-md rounded-bl-md transition-all`}
              onClick={() => {
                dispatch(toggle());
              }}
            >
              {!status && <MdLightMode size={24}/>}
              {status && <MdDarkMode size={24}/>}
            </button>
            <ul className="w-fit text-2xl flex flex-col gap-2 p-2">
              <li>
                <a href="https://www.linkedin.com/in/kartik-kumar-836a3a228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/itskartik22">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/its_kartik/">
                  <SiLeetcode />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kartik_rebel22?igsh=em03ZDdkbTNpNmZ3">
                  <FaSquareInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main lg:w-1/2 w-full flex flex-col justify-center lg:gap-28 md:gap-24 sm:gap-20 gap-16 xl:px-24 lg:px-18 md:px-16 px-2 xl:py-24 lg:py-20 md:py-12 py-2">
          <About reference={sectionRefs.aboutRef} />
          <SkillSection reference={sectionRefs.skillRef} />
          <ProjectSection reference={sectionRefs.projectRef} />
          <EducationSection reference={sectionRefs.educationRef} />
        </div>
        <p className="lg:hidden block text-center bg-white/10 p-4">
          @copyright. Kartik Kumar
        </p>
      </div>
    </div>
  );
};

export default MainComponent;
