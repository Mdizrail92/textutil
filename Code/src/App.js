import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1800)
  }
  
  // const remmoveClasses =()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-danger')
  
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  // }

  const toggleMode = ()  => {
    // remmoveClasses();
    //   document.body.classList.add('bg-'+cls)
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - light mode";
      // setInterval(()=>{
      //   document.title = "Created by Israil";
      // },2000);
      // setInterval(()=>{
      //   document.title = "with Love";
      // },1500);

    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#102542';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";

    }
  }
  return (
    <>
     <Router>
     <Navbar title='TextUtils' mode={mode} toggleMode= {toggleMode} />
     <Alert alert={alert}/>

     <div className="container my-3">
     <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
           
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode= {toggleMode} />
          </Route>
        </Switch>
    
       
     </div>
     </Router>
    </>
  );
}

export default App;
