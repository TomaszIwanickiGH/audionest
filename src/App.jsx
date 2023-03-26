import { Navbar, Hero, Devices, Products, About, Footer } from './components'

function App() {
  return (
    <div>
      <div className="w-full bg-primary">
        <Navbar />
        <Hero />
      </div>
      <Devices />
      <Products />
      <About />
      <Footer />
    </div>
  )
}

export default App
