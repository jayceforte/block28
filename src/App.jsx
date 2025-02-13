import { useState } from "react"
import './App.css'
import { Routes, Route, Link } from "react-router";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

  function app (){
  return (
    <>
    <div id="container">
      <div id="navbar"><Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/"></Link>
      </div>
      <div id="main-section"><Routes>
      <Route path="/blue" Blue={<h1>Blue</h1>} />
      <Route path="/red" Red={<h1>Red</h1>} />
      <Route path="/home" Home={<h1>Home</h1>} />
  </Routes> </div>
    </div>
    </>
  )
}
export default app

