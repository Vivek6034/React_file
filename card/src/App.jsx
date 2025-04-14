import img1 from './assets/mbl.webp'
import immg2 from './assets/watch.jpeg'
function App() {
  let product = [
    {id:1, pname:"Mobile" ,Price :32000,img:img1},
    {id:2, pname:"watch", Price : 8000,img:immg2}
  ]
  return (
    <>
      <div style={{display:"flex", width:"200px",height:"400px"}}>
      {
        product.map((e)=>{return <div style={{border:"2px solid black ",width:"150px",height:"300px"}}>
          <h1>{e.pname}</h1>
          <img src={e.img} alt=""/><br />
          <h1>$:{e.Price}</h1>
          <button>Add to Cart</button>
        </div>})
      }        
      </div>
      
    </>
  )
}

export default App
