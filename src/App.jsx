import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <main className="bg-gray-900 text-white h-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
