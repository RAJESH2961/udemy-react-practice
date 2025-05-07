import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
function App() {
  return (
    // <>
      // {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <main className="h-screen my-8 mx-20 flex gap-8">
        <ProjectSidebar/>
        <NewProject />
      </main>
    // </>
  );
}

export default App;
