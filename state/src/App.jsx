import { useState } from "react"
import About from "./About"



function App() {
  let [name, setName] = useState("singh")
  let [contact, setPhone] = useState(6209815873)
  let [age, setAge] = useState(20)
  let [color , setColor] = useState("")

  function Fun() {
    setName("Aashu")
  }

  function Phn() {
    setPhone(8521477771)
  }
  return (
    <>
      <div style={{height:"100vh" , backgroundColor :color}}>
        <h1>My name is vivek {name}</h1>
        <h1>my age is {age}</h1>
        <h1>Contact us {contact}</h1>
        <button onClick={Fun}>Name</button>
        <button onClick={() => setAge(90)}>age</button>
        <button onClick={Phn}>contact</button>
        <button onClick={ () => setColor('red')}>red</button>
        <button onClick={ () => setColor('')}>light</button>
        <button onClick={ () => setColor('black')}>dark</button>

        <About />


      </div>
    </>
  )
}
export default App