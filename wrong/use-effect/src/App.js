import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './App.css';
import { Todos } from "./components/Todo";
function App() {
  fetch("http://localhost:3000/todos")
  .then((r)=>r.json())
  .then((d)=>{
    console.log(d);
  },[])
  return (
    <div className="App">
 <Todos/>
    </div>
  );
}

export default App;
