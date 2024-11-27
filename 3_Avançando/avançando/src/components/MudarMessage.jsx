import React from 'react'

const MudarMessage = ({alterarMessage}) => {
  const msgs = ["oi", "ola", "tudo bem " ]
  return (
    <div>
      {/* Passa as mensagens diretamente ao invés de passar o índice */}
      <button onClick={()=> alterarMessage(msgs[0])}> 1 </button>
      <button onClick={()=> alterarMessage(msgs[1])}> 2 </button>
      <button onClick={()=> alterarMessage(msgs[2])}> 3 </button>
    </div>
  )
}

export default MudarMessage