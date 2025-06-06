import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Benefics from './components/Benefics/Benefics.jsx'
import Prices from './components/Prices/Prices.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefics />
        <Prices />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
