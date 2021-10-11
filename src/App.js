// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from './components/About';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // tell wheather dark mode is enable or not
  //mode can either be dark or light  
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
      setalert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  const removebodyclass = ()=> {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-Dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-Danger')
  }

  const togleMode = (cls)=>{
    removebodyclass();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#272b41';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success");
    }
  }

  return (
    <>
    <Navbar titles = "textUtils" aboutText = "About Us" mode={mode}  togleMode={togleMode}/>
    <Alert alert = {alert}/> 
    <div className="container my-3">          
    <About mode = {mode}/>
    <TextForm showAlert = {showAlert} heading = "Enter your Text to analyze" mode={mode}/>
    </div>
    </>
  );
}
export default App;
