import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App(){
  const request = async() => {
    const response = await axios.get('http://localhost:8080');
    console.log(response.data);
  };

  useEffect(()=>{
    request();
  });

  return (
    <div className='App'>
      <p>안녕하세요</p>
    </div>
  );
}

export default App;
