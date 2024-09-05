import { useEffect, useState } from "react"

export const DisplayDate = () =>{
    const[size, setSize] = useState(10)
    const [time, setTime] = useState(new Date())
    
    useEffect(()=>{
      const intervalId = setInterval(()=>{
        setTime(new Date())
      }, 1000)

      return ()=>{
        clearInterval(intervalId)
      }
    })
    
    return (
        <div>
            <h1 style={{fontSize: size}}>
              Hour : {time.getHours()}
            </h1>
            <h1 style={{fontSize: size}}>
              Minutes : {time.getMinutes()}
            </h1>
            <h1 style={{fontSize: size}}>
              Seconds : {time.getSeconds()}
            </h1>
            <button onClick={()=> setSize(size + 1) }>Increase the size here</button><hr />
            <button onClick={()=> setSize(size - 1)}>Decrease the size here</button>
        </div>
        
    )
}