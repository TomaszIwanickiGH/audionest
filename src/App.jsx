import { Navbar, HeroWrapper, HeadphonesWrapper, SpeakersWrapper, EarphonesWrapper, CheckoutWrapper, About, Footer } from './components'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroWrapper />} />
        <Route path="/headphones" element={<HeadphonesWrapper />} />
        <Route path="/speakers" element={<SpeakersWrapper />} />
        <Route path="/earphones" element={<EarphonesWrapper />} />
        <Route path="/checkout" element={<CheckoutWrapper />} />
      </Routes>
      <About />
      <Footer />
    </div>
  )
}

export default App
