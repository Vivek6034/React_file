import { useState } from "react"

function About() {
    let [ar, setAr] = useState({
        name:"vivek", Age :" 22", contact :"6209815873"
    })
    let [data , setData] = useState(["Bihar" , "IT", 101 , "Devloper", "UI/UX"])
    return(
        <>
            <h1>Name : {ar. name}</h1>
            <h2> City : {data[0]} , Dept  : {data [1]}, ID: {data [2]} , JOb ROle : {data[4]}  {data[3]}</h2>
            <button onClick={() => setAr({name:"aashu"})}> name </button>
            <button onClick={() => setData( data[2] = "UP")}>City</button>
            
        </>
    )
}
export default About