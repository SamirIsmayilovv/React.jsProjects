import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";
import { useState } from "react";
import Project from "./Components/Project";

let MyProjects = [
  {
    title: "Hello",
    description: "Salam",
    date: "2021",
    Id: "p1",
  },
];

function App() {
  const [showNewProject, setShowNewProject] = useState(false);
  const [showSpesificProject, setShowSpesificProject] = useState(false);
  const [projects, setProjects] = useState(MyProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  const getData = (projectObject) => {
    setProjects((prevProjects) => {
      return [...prevProjects, projectObject];
    });
  };

  const getProjectById = (id) => {
    const project = projects.find((project) => project.Id === id);
    console.log(project);
    setShowNewProject(false);
    setShowSpesificProject(true);
    setSelectedProject(project);
  };

  const deleteProject = (id) => {
    setProjects(prevProjects => prevProjects.filter(project => project.Id !== id));
  };
  
  return (
    <main
      className="h-screen my-8"
      style={{ display: "flex", flexDirection: "row", columnGap: "85px" }}
    >
      <Sidebar
        handleButton={() => {
          setShowNewProject(!showNewProject);
          setShowSpesificProject(false);
        }}
        projects={projects}
        getId={getProjectById}
        deleteId={deleteProject}
      />
      {showNewProject && <NewProject getData={getData} />}
      {showSpesificProject && (
        <Project
          forSidebar={false}
          title={selectedProject.title}
          description={selectedProject.description}
          date={selectedProject.date}
        />
      )}
    </main>
  );
}

export default App;
