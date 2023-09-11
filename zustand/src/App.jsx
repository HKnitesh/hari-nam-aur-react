import { useState } from 'react'
import './App.css'
import ItemsForm from './components/itemsForm'
import ItemList from './components/ItemList'

function App() {

  return (
    <div className="main-container">
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: '2rem',
      }}>
        My Item List
      </h1>
      <ItemsForm />
      <ItemList />
    </div>
  )
}

export default App
