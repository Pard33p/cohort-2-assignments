import { useState } from 'react'
import { BusinessCard } from './components/BusinessCard'
// import './App.css'

function App() {

  return (
    <>
      <BusinessCard 
        name={"Pardeep Singh"} 
        description={"I am a Software Engineer"}
        socialMediaNames={["LinkedIn", "GitHub", "Twitter"]}
        interests={["Development", "Drawing", "ML"]}
      />
    </>
  )
}

export default App
