import { useNavigate } from "react-router-dom"


function About() {
    let navigator = useNavigate()
    function service(){
        navigator('/service')
    }
    return(
        <>
        <h2>This is About us</h2>
        <button onClick={service}>Service page </button>
        </>
    )
}
export default About