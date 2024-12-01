import Project from "./Project";
import projectInfo from "./projectInfo";

const ProjectSection = ({ reference }) => {
  // console.log(projectInfo)
  return (
    <div ref={reference} id="projects" className="" >
      <h1 className="lg:hidden block text-3xl font-semibold sm:px-4">Projects</h1>
      <div className="w-full flex flex-col gap-2">
        {projectInfo.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
