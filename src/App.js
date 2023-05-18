import { useState } from 'react';
import './App.css';

import AlertMessage from './Components/AlertMessage';
import Sidebar from './Components/Sidebar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("black")
  const toggleMode = () =>{
    if(mode==="black"){
      setMode("white")
      showAlert("mode is enabled","Light ")
    }
    else if (mode==="white"){
      setMode("black")
      showAlert("mode is enabled","Dark ")
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <div>
    <Router>
      <Sidebar mode={mode} toggleMode={toggleMode} UserName="Jarvis" />
      <AlertMessage alert={alert}/>


        </Router> 
      </div>
  );
}

export default App;
