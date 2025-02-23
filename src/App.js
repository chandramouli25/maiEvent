import { useState } from 'react';
import './App.css';
import HeaderDiv from './components/HeaderDiv/HeaderDiv';
import NavBar from './components/NavBar/NavBar';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import PostingProject from './components/PostingProject/PostingProject';
import LiverProjects from './components/LiverProjects/LiverProjects';


function App() {
  const [activeContainer , setActiveContainer ] = useState("liveProject")

  const onChangeinContent = (newContainer) => {
    console.log("newContainer",newContainer)
    setActiveContainer(newContainer);
  };

  return (
    <div className="App">
      <header>
        <HeaderDiv  changingcontainer={onChangeinContent} />
        <NavBar changingcontainer={onChangeinContent}  />
      </header>
      {activeContainer === "projectlist" && <ProjectsContainer /> }
      {activeContainer === "postingProject" && <PostingProject /> }
      {activeContainer === "liveProject" && <LiverProjects /> }

    </div>
  );
}

export default App;
