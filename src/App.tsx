import React from 'react'
import './app.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index.tsx'
import Home from './components/Home/index.tsx'
import About from './components/About/index.tsx'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}
export default App