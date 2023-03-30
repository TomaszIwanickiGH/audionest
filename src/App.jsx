import { Navbar, HeroWrapper, HeadphonesWrapper, SpeakersWrapper, EarphonesWrapper, About, Footer } from './components'
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
      </Routes>
      <About />
      <Footer />
    </div>
  )
}

export default App
