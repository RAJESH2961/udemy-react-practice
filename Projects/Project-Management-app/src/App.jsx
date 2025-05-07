import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectselected from "./components/NoProjectSelected";
function App() {

  const [ projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelAddProject(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const newProject ={
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProjectId: undefined,

        projects: [...prevState.projects, newProject]
      };
    })
  }
// console.log(projectState);;

  let content;
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectselected onStartAddProject={handleStartAddProject} />
  }

  return (
    // <>
      // {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <main className="h-screen my-8 mx-20 flex gap-8">
        <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
        {/* <NewProject/> */}
        {content}
        
      </main>
    // </>
  );
}

export default App;
