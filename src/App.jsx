import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import SubscribePage from './pages/Subscribe/SubscribePage'
import AboutPage from './pages/About/AboutPage'
import NavbarComponent from './components/NavbarComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/subscribe' element={<SubscribePage />} />

        </Routes>
      
      </BrowserRouter>


    </>
  )
}

export default App
