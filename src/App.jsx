import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Hola"}/>
    </div>
        
  )
}

export default App
