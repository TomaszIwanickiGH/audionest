import { Navbar, HeroWrapper, HeadphonesWrapper, SpeakersWrapper, EarphonesWrapper, CheckoutWrapper, About, Footer } from './components'
import { Route, Routes } from 'react-router-dom'

import { useState } from 'react'

function App() {
  const [summary, setSummary] = useState([])
  const addProduct = (product) => {
    setSummary(...summary, product)
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroWrapper />} />
        <Route path="/headphones" element={<HeadphonesWrapper addProduct={addProduct} />} />
        <Route path="/speakers" element={<SpeakersWrapper />} />
        <Route path="/earphones" element={<EarphonesWrapper />} />
        <Route path="/checkout" element={<CheckoutWrapper displayProducts={summary} />} />
      </Routes>
      <About />
      <Footer />
    </div>
  )
}

export default App
