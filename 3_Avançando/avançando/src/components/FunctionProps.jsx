import React from 'react'
// componente filho
const FunctionProps = ({myFunction}) => {
  return (
    <div>
      <button onClick={myFunction}> Clique aqui</button>
    </div>
  )
}

export default FunctionProps