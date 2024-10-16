import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState("white");

  const colors = ["Red","Blue","Green","Purple"]

  return (
    <>
      <div style={{height:'100vh', width:'100%', backgroundColor:color}}>
        <div className='text-center content'>
          <h1 className='mb-3'>Background Color Change</h1>
          <div>
            {colors.map(item=>(
              <button onClick={()=>setColor(item)} key={item} style={{backgroundColor:item}} className='btn fw-bolder mx-2 my-1 my-lg-0'>{item}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
