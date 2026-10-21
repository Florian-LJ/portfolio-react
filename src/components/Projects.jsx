import { ArrowUpRight } from 'lucide-react'
import portfolioImage from '../assets/hero.png'

const projects = [
  {
    name: 'Portfolio React',
    status: 'En cours',
    description:
      'Mon portfolio personnel, réalisé avec React et Tailwind CSS pour présenter mon parcours, mes compétences et mes projets.',
    image: portfolioImage,
    imageAlt: 'Illustration du projet Portfolio React',
    repository: 'https://github.com/Florian-LJ/portfolio-react',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    name: 'Portfolio React',
    description:
      'Mon portfolio personnel, réalisé avec React et Tailwind CSS pour présenter mon parcours, mes compétences et mes projets.',
    image: portfolioImage,
    imageAlt: 'Illustration du projet Portfolio React',
    repository: 'https://github.com/Florian-LJ/portfolio-react',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    name: 'Portfolio React',
    description:
      'Mon portfolio personnel, réalisé avec React et Tailwind CSS pour présenter mon parcours, mes compétences et mes projets.',
    image: portfolioImage,
    imageAlt: 'Illustration du projet Portfolio React',
    repository: 'https://github.com/Florian-LJ/portfolio-react',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    name: 'Portfolio React',
    description:
      'Mon portfolio personnel, réalisé avec React et Tailwind CSS pour présenter mon parcours, mes compétences et mes projets.',
    image: portfolioImage,
    imageAlt: 'Illustration du projet Portfolio React',
    repository: 'https://github.com/Florian-LJ/portfolio-react',
    technologies: ['React', 'Tailwind CSS'],
  }
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center bg-section px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 w-full max-w-4xl text-accent">
          <div className="rounded border border-accent/70 px-4 py-3 text-center shadow-accent">
            <h2 className="text-xl font-medium uppercase tracking-[0.25em]">
              Mes projets
            </h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group/card flex flex-col overflow-hidden rounded-2xl border border-outline bg-surface-raised shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-white p-8">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover/card:text-accent">
                    {project.name}
                  </h3>

                  <span className="rounded-full flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {project.status === 'En cours' && (
                     <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    )}
                    {project.status}
                  </span>
                </div>
                
                <p className="mt-3 leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="group/button mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2.5 font-medium text-white transition hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <img
                    src="https://api.iconify.design/akar-icons/github-fill.svg?color=%23ffffff"
                    alt=""
                    className="h-5 w-5"
                  />
                  Voir le repo
                  <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover/button:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
