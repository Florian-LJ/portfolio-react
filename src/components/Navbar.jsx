import { Moon, Sun } from 'lucide-react'

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-page/90 p-4 text-foreground backdrop-blur-sm">
      <nav className="flex place-content-around items-center">
        <a href="#" className="text-xl font-bold text-accent">Mon Portfolio</a>
        <div className="hidden items-center space-x-4 sm:flex">
          <a href="#about" className="transition-all duration-300 hover:text-accent"> À propos</a>
          <a href="#experiences" className="transition-all duration-300 hover:text-accent">Expériences</a>
          <a href="#skills" className="transition-all duration-300 hover:text-accent">Compétences</a>
          <a href="#projects" className="transition-all duration-300 hover:text-accent">Projets</a>
          <a href="#contact" className="transition-all duration-300 hover:text-accent">Contact</a>
        </div>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Basculer le thème clair ou sombre"
          aria-pressed={theme === 'light'}
          className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:w-36 md:justify-center"
        >
          {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          <span className="hidden md:inline">{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
        </button>
        <div className="block sm:hidden">
          <button type="button" aria-label="Ouvrir le menu" className="text-foreground focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar