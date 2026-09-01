import React from 'react'

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-yellow-400/20 bg-gray-950 py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-12 bg-yellow-400" />
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-yellow-300">
            À propos
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm max-sm:p-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col items-start justify-center space-y-5 text-white max-sm:items-center max-sm:text-center">
              <h3 className="text-4xl font-bold text-yellow-400 max-sm:text-3xl">
                À propos de moi
              </h3>

              <p className="text-lg leading-relaxed text-gray-200 max-sm:text-base">
                Passionné d'informatique depuis le collège, je m'intéresse aussi bien au développement qu'à la cybersécurité, ou à l'intelligence artificielle. J'aime comprendre comment les systèmes fonctionnent et les explorer en profondeur, aussi bien dans la pratique que dans leurs fondements théoriques, notamment là où les mathématiques entrent en jeu. La cryptographie ou les réseaux de neuronnes sont les meilleurs exemples. Dès le lycée, dans le cadre de mon double baccalauréat, j'ai rédigé un mémoire de mathématiques sur la primalité, sujet au cœur de la sécurité informatique moderne, mobilisant des notions d'arithmétique modulaire avancée. J'ai également réalisé un mémoire sur la capacité de l'IA à résoudre des problèmes mathématiques. Ainsi, j'ai développé, entrainé et comparé les performances de modèles de machine learning et deep learning sur la résolution de polynômes de différents degrés.
              </p>

              <p className="text-lg leading-relaxed text-gray-200 max-sm:text-base">
                Actuellement alternant développeur Java back-end chez Crédit Agricole Technologies & Services à Vannes, je suis admis à l'ENSIBS pour la rentrée 2026 afin d'y préparer un diplôme d'ingénieur en cybersécurité et sciences des données avec une spécialité cyber et IA. La formation est répartie équitablement entre le développement, l'IA et la cybersécurité. Pour accompagner ces 3 ans de cycle ingénieur, je suis à la recherche d'une alternance en lien avec la cybersécurité et/ou l'IA, partout en France.
              </p>
            </div>

            <div className="flex h-full min-h-[260px] items-center justify-center rounded-2xl border border-yellow-400/20 bg-gray-950/60 p-6">
              <div className="flex w-full flex-col gap-4 text-left text-gray-200">
                <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">Focus</p>
                  <p className="mt-2 text-xl font-semibold text-white">Cybersécurité • IA • Dev</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-300">Profil</p>
                  <p className="mt-2 text-base leading-relaxed">
                    Curieux, rigoureux et motivé par les systèmes complexes, du code aux modèles de machine learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About