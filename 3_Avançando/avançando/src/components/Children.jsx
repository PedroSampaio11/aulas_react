import React from 'react'

const Container = ({children}) => {
  return (
    <>
      <h2>conteudo do componente pai:</h2>
      {children}
    </>
  )
}

export default Container;
