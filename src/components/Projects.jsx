import { Hammer } from 'lucide-react'

function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center  px-6 py-20 text-foreground"
    >
      <div className="w-full max-w-4xl text-center">
        <div className="mb-12 text-accent">
          <div className="rounded border border-accent/70 px-4 py-3 shadow-accent">
            <h2 className="text-xl font-medium uppercase tracking-[0.25em]">
              Mes projets
            </h2>
          </div>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-outline glow-border bg-surface/70 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-12">
          <div className="rounded-full border border-accent/50 bg-accent/10 p-4 text-accent">
            <Hammer aria-hidden="true" size={36} />
          </div>
          <h3 className="text-2xl font-bold text-accent sm:text-3xl">
            Projets en construction
          </h3>
          <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Je prépare la présentation de mes projets. Cette section sera
            bientôt disponible, revenez prochainement !
          </p>
          <span className="rounded-full border border-accent/50 px-4 py-1.5 text-sm font-medium text-accent">
            Mise à jour en cours
          </span>
        </div>
      </div>
    </section>
  )
}

export default Projects