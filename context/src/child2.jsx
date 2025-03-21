import { appdata } from "./App"
import Child3 from "./child3"

function Child2(){
    return(
        <>
         <h1>child2 is here </h1>
        <appdata.Consumer>
            {
                (data)=>{return <h1>{data}</h1>}
            }
        </appdata.Consumer>

        <Child3 />

        </>
    )
}
export default Child2