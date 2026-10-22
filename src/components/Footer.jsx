import { ArrowUp, CodeXml, Mail } from 'lucide-react'

const Footer = () => (
  <footer className="border-t border-outline px-6 py-10 text-foreground">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <a href="#" className="text-lg font-bold text-accent">
          Florian Le Joncour
        </a>
        <p className="mt-1 text-sm text-muted">
          Développeur Java · Futur ingénieur en cybersécurité
        </p>
      </div>

      <nav aria-label="Navigation de pied de page" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a href="#about" className="transition-colors hover:text-accent">À propos</a>
        <a href="#experiences" className="transition-colors hover:text-accent">Expériences</a>
        <a href="#skills" className="transition-colors hover:text-accent">Compétences</a>
        <a href="#projects" className="transition-colors hover:text-accent">Projets</a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="mailto:florian.lejoncour@gmail.com"
          aria-label="Envoyer un e-mail"
          className="rounded-full border border-outline p-2.5 text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Mail size={18} aria-hidden="true" />
        </a>
        <a
          href="https://github.com/Florian-LJ"
          target="_blank"
          rel="noreferrer"
          aria-label="Voir le profil GitHub de Florian Le Joncour (ouvre un nouvel onglet)"
          className="rounded-full border border-outline p-2.5 text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <CodeXml size={18} aria-hidden="true" />
        </a>
        <a
          href="#"
          aria-label="Revenir en haut de page"
          className="rounded-full border border-outline p-2.5 text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      </div>
    </div>

    <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 border-t border-outline pt-5 text-xs text-muted sm:flex-row sm:justify-between">
      <p>© {new Date().getFullYear()} Florian Le Joncour. Tous droits réservés.</p>
      <p>Réalisé avec React et Tailwind CSS.</p>
    </div>
  </footer>
)

export default Footer
