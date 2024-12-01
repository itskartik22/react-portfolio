import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoShieldSharp } from "react-icons/io5";

const SkillSection = ({reference}) => {
  return (
    <div ref={reference} id="skills" className="w-full flex justify-center gap-2 flex-wrap">
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-sky-800 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <TbBrandCpp />
        C++
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-cyan-600 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <TbBrandNextjs />
        Nextjs
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-cyan-600 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <FaReact />
        ReactJs
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-gray-800 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <SiExpress />
        Express
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-green-700 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <FaNode /> NodeJs
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-green-800 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <SiMongodb />
        MongoDB
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-orange-900 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <SiMongoose />
        Mongoose
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-pink-600 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <IoShieldSharp />
        NextAuth
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-cyan-500 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <SiTailwindcss />
        Tailwind
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-orange-600 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <FaHtml5 />
        Html
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-sky-600 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <FaCss3Alt />
        Css
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-yellow-300 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <DiJavascript1 />
        Javascript
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-purple-800 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <FaBootstrap />
        Bootstrap
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-purple-800 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        Shadcn
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-red-500 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <FaGitAlt />
        Git Vcs
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-black hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        <FaGithub />
        Github
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-sky-800 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        Data Structures
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-sky-800 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        Algorithms
      </span>
      <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-cyan-800/50 hover:text-sky-800 hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
        DBMS
      </span>
    </div>
  );
};

export default SkillSection;
