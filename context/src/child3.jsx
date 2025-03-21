import { createContext } from "react"
import Child4 from "./child4"


let Child3data= createContext()
let data3= "data from child 3"
function Child3(){
    return(
        <>
            <h1>Child 3 is here</h1>
            <Child3data.Provider value={data3}>
                <Child4 />
            </Child3data.Provider>
        </>
    )
}
export default Child3
export {Child3data}