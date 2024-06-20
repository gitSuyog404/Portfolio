import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Nike.png"
          title="Nike Clone"
          description="A practice project i completed to learn tailwindcss and NextJS"
        />

        <ProjectCard
          src="/TravelApp.png"
          title="Travel App"
          description="A modern UI/UX Travel App made using TailwindCss and NextJS"
        />

        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio"
          description="A modern Portfolio built using latest technologies such as NextJS, TailwindCSS, ThreeJS, Framer-Motion"
        />
      </div>
    </div>
  );
};

export default Projects;
