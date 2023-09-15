/* eslint-disable no-unused-vars */
import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  return (
    <UserContextProvider>
      <h1>Hare Krishna</h1>
      <h1>React with Hitesh</h1>

      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
