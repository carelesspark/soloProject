import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/index";


function App(){
  const request = async() => {
    const response = await axios.get('http://localhost:8080');
    console.log(response.data);
  };

  useEffect(()=>{
    request();
  });

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
