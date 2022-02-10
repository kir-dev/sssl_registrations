import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/@layout/Footer'
import { MainPage } from './components/@pages/MainPage'
import { FormPage } from './components/@pages/FormPage'
import { SuccessPage } from './components/@pages/SuccessPage'
import ScrollToTop from './components/@elements/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="siker" element={<SuccessPage />} />
          <Route path="jelentkezes" element={<FormPage />} />
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
