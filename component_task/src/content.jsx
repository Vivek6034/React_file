import './App.css'
import myimage from './assets/ai.jpeg';

function Content() {
    return(
        <>
           <div className='content'>
             <p>
             Artificial intelligence 
             (AI) refers to the capability of computational
              systems to <br /> perform tasks typically<br /> associated with human intelligence,
               such as learning, <br />reasoning, problem-solving, perception, and decision-making. 
               <br />It is a field of research in computer science that <br />develops and studies methods and 
               <br />software that enable machines to perceive their<br /> environment and use learning 
               and intelligence <br />to take actions that maximize <br />their chances of achieving defined 
               goals.<br /> Such machines may be called AIs.
             </p>
             <img src={myimage} className='content-image' />
           </div>
        </>
    )
}

export default Content