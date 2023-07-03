import './App.scss'
import Footer from './components/sections/Footer'
import Navbar from './components/sections/Navbar'
import Presentation from './components/sections/Presentation'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Presentation />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
