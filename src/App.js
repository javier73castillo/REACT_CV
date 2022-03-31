import "./App.scss";
import React, {useState} from "react";
import Education from "./components/Education/Education";
import { CV } from "./CV";
import Person from "./components/Person/Person";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import More from "./components/More/More";

const {person, education, experience, habilities} = CV;

function App() {
  const [component, setComponent] = useState('education');

  return (
    <div className="App">
      <header className="App-header">
      <Person person={person}/>
      </header>
      <nav>
        <button class="btn-components" onClick={()=> setComponent('education') } >Education</button>
        <button class="btn-components" onClick={()=> setComponent('experience') }>Experience</button>
        <button class="btn-components" onClick={()=> setComponent('about') }>About me</button>
        <button class="btn-components" onClick={()=> setComponent('habilities') }>Soft Skills</button>

      </nav>
        <div className="container-app">
         {
           component === 'education' ? (<Education education={education}/>) : (component === 'experience' ? (<Experience experience={experience}/>) : (component === 'about' ? (<About person={person}/>) : 

           (<More habilities={habilities}/>) ) ) 
         }
        </div>
         <Footer/>
    </div>
  );
}

export default App;
