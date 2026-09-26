import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Experiences from './components/Experiences.jsx'

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
