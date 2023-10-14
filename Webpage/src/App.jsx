import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientsList from './Components/PatientsList'
import { useSelector } from 'react-redux'

function App() {

  const data = useSelector((store)=>store.patient.value)
  console.log(data)

  return (
    <>
      <PatientsList/>
    </>
  )
}

export default App
