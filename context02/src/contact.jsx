import { useContext } from "react";
import { setdata } from "./main";
function Contact(){

    let data = useContext(setdata)
    return(
        <>
            <h1>Name =  {data.name}, Age = {data.age}, City = {data.city}</h1>
            {/* <setdata.Consumer>
                {
                    (data)=>{return <h1>{data}</h1>}
                }
            </setdata.Consumer> */}
        </>
    )
}
export default Contact