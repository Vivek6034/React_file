import { useState, useEffect } from "react"


function App(){
  let [valu ,setValu]=  useState(0)
  useEffect(() => {alert("working")},[valu])
  return(
    <>
    <h1>{valu}</h1>
    <button onClick={()=> setValu(valu+1)}>inc</button>
    <button onClick={()=> setValu(valu-1)}>Dec</button>

      <h1>hello</h1>
    </>
  )
  
}
export default App

