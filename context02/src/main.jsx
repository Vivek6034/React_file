import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let setdata = createContext()
let obj = {name :"vivek " , age : 22 , city :" Bihar" }

createRoot(document.getElementById('root')).render(

  <setdata.Provider value={obj}>
  <StrictMode>
    <App />
  </StrictMode>,
  </setdata.Provider>
)
export {setdata}