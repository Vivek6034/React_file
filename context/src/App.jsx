import React, { createContext } from "react"
import Child1 from "./child1"


let appdata = createContext()
let name = "from app component"

function App() {
 
  return (
    <>
      <h1>hello</h1>
      <appdata.Provider value={name}>
        <Child1 />
      </appdata.Provider>
        
    </>
  )
}

export default App
export {appdata}
