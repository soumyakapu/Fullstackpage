import Main from "./components/Main";
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import CoreJava from "./components/CoreJava";
import Java8 from "./components/Java8";
import Spring from "./components/Spring";
import { useContext } from "react";
import ThemeContext from './components/ThemeContext'
import './App.css';
import Collection from "./components/Collection";
import SpringBoot from "./components/SpringBoot";
import JavaScript from "./components/JavaScript";
import React from "./components/React";
import MongoDb from "./components/MongoDb";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="Theme">Theme</button>
      <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Main/>}></Route> 
       <Route path="/CoreJava" element={<CoreJava/>}></Route> 
       <Route path="/Collection"element={<Collection/>}></Route>
       <Route path="/Java8" element={<Java8/>}></Route>
       <Route path="/Spring" element={<Spring/>}></Route>
       <Route path="/SpringBoot" element={<SpringBoot/>}></Route>
       <Route path="/JavaScript" element={<JavaScript/>}></Route>
       <Route path="/React" element={<React/>}></Route>
       <Route path="/MongoDb" element={<MongoDb/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
     </div>
     </div>
  );
}

export default App;
