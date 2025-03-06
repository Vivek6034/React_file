import { useState } from "react"

function New() {
    let [st, setSt] = useState(true)
    let[num , setNum]= useState(0)
    function decrement() {
        if(num!=0){
            setNum(num-1)
        }
    }
    return (
        <>
            {st ? <h1> welcome</h1> : ""}
            {st ? <button onClick={() => setSt(false)}>Hide</button> : <button onClick={() => setSt(true)}>Show</button>
            }
            

            <button onClick={() => setSt(false)}>Hide</button>
            <button onClick={() => setSt(true)}>Show</button>
            <button onClick={() => setSt(!st)}>Hide</button>
          
          <h1>{num}</h1>
          <button onClick={decrement}> -</button>
          <button onClick={() => setNum(num+1)}> +</button>



        </>
    )
}
export default New