
const RenderFunction = () => {
  const renderTest = (x) =>{
    if(x){
      return <h5>Renderizando isso</h5>
    }else{
      return <h5>Renderizando isso também</h5>
    }
  }
  return (
    <>
      {renderTest(true)}
      {renderTest(false)}
    </>
  )
}

export default RenderFunction