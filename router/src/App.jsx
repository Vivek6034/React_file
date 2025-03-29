import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"

import "./App.css"
import Service from "./service"
import Contact from "./Contact"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

    </>
  )
}
export default App