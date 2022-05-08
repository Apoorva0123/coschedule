
import { useState } from 'react'
import './App.css'
import { Calender } from './components/calender'
import { Test } from './components/test'
import {BlurContext} from "./context/blurcontext.jsx"
import { useContext } from "react";

function App() {

  const {blur} = useContext(BlurContext)


  return (
    <div className="App">
      {/* <Test></Test>
      <Calender ></Calender>   */}
      {blur ? <Test></Test> : <Calender></Calender>}
    </div>
  )
}

export default App
