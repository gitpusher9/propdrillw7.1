//visual uncomfort of code is propdrilling.
//to not pass props again and gain 
//teleport states from one to another without passing props too much using context api.
import { useState } from 'react'


/*function App() {
  const [count , setCount] = useState(0) 

  return (
    <div>
      <Count count={count} setCount={setCount}/>
      {/*<Buttons count={count} setCount= {setCount}/>}
      
    </div>
  )
}

function CountRendered({count}){
  return(
    <div>
      {count}
      
    </div>
  )
}
function Count({count , setCount}){
  return(
    <div>
      {/*{count}}
      <CountRendered count={count}/>
      <Buttons count={count} setCount= {setCount}/>
    </div>
  )
}

function Buttons({count, setCount}){
  return(
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrement</button>
    </div>
  )
}*/
 //using context api
 //count directly needs to go from app to count rendered
function App() {
  const [count , setCount] = useState(0) 

  return (
    <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
      {/*<Buttons count={count} setCount= {setCount}/>*/}
      </CountContext.Provider>
    </div>
  )
}

function CountRendered(){

  const count = useContext(CountContext)


  return(
    <div>
      {count}
      
    </div>
  )
}
function Count({setCount}){


  return(
    <div>
      {/*{count}*/}
      <CountRendered />
      <Buttons setCount= {setCount}/>
    </div>
  )
}

function Buttons({setCount}){

  const count = useContext(CountContext)
  return(
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrement</button>
    </div>
  )
}
export default App
