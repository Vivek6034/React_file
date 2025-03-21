import { Child3data } from "./child3"
function Child5(){
    return(
        <>
            <h1>Child 5 data is here from child 3</h1>
            <Child3data.Consumer>
                {
                    (otp)=>{return <h1>{otp}</h1>}
                }
            </Child3data.Consumer>
        </>
    )
}
export default Child5