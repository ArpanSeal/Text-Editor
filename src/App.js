import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";

function App() {
  const [mode, setMode] = useState('light');


  const toggleMode = ()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#14385c";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="TextEditor" about_text="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter Your Text" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
