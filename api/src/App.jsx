import { Route, Routes } from "react-router-dom"
import Fetchapi from "./Fetchapi"
import Insert from "./insert "

function App() {
  return(
    <>
      <Routes>
        <Route index element={<Insert/>}/>
        <Route path="/fetchapi" element={<Fetchapi/>}/>
      </Routes>
    </>
  )
}

      export default App
