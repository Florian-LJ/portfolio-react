import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const Navbar = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-page/90 p-4 text-foreground backdrop-blur-sm">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="text-xl font-bold text-accent">Mon Portfolio</a>
        <div className="hidden items-center space-x-4 sm:flex">
          <a href="#about" className="transition-all duration-300 hover:text-accent"> À propos</a>
          <a href="#experiences" className="transition-all duration-300 hover:text-accent">Expériences</a>
          <a href="#skills" className="transition-all duration-300 hover:text-accent">Compétences</a>
          <a href="#projects" className="transition-all duration-300 hover:text-accent">Projets</a>
          {/* <a href="#contact" className="transition-all duration-300 hover:text-accent">Contact</a> */}
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
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-md p-2 text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {isMenuOpen
              ? <X className="h-6 w-6" aria-hidden="true" />
              : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full mt-4 flex flex-col gap-1 rounded-xl border border-outline bg-page p-3 shadow-lg sm:hidden"
          >
            <a href="#about" onClick={closeMenu} className="rounded-lg px-4 py-3 transition-colors hover:bg-accent/10 hover:text-accent">À propos</a>
            <a href="#experiences" onClick={closeMenu} className="rounded-lg px-4 py-3 transition-colors hover:bg-accent/10 hover:text-accent">Expériences</a>
            <a href="#skills" onClick={closeMenu} className="rounded-lg px-4 py-3 transition-colors hover:bg-accent/10 hover:text-accent">Compétences</a>
            <a href="#projects" onClick={closeMenu} className="rounded-lg px-4 py-3 transition-colors hover:bg-accent/10 hover:text-accent">Projets</a>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar