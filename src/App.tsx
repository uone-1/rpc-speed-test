import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainScreen from "./screens/MainScreen"
import SpeedTestScreen from "./screens/SpeedTestScreen"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainScreen} >
          <Route path="/" Component={SpeedTestScreen}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
