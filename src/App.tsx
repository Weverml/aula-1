import { useState } from 'react'
import './App.css'
import { Botao } from './components/Botao';

function App() {
  const [nome, setnome] = useState('Maria'); // hook (userState)

  return (
    <>
    <Botao title = 'teste'></Botao> 
    </>
  )
}

export default App
