import { useState } from "react";

const HookTest = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={()=>{
        setCount(count+1)
      }}>
        clickkk
      </button>
      <p> valor atual {count}</p>
    </>
  )
}

export default HookTest