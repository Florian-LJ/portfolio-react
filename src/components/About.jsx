import React from 'react'
import { CheckCheck, ShieldAlert, Target, Flame } from "lucide-react";

function About() {
  return (
    <div id="about" className="relative bg-section flex flex-col items-center min-h-screen ">



      {/* Titre de la section */}
      <div className="mt-17 w-full max-w-4xl gap-4 px-6 text-accent">
        <div className="rounded border border-accent/70 px-4 py-3 text-center shadow-accent">
          <span className="text-xl font-medium uppercase tracking-[0.25em]">À propos de moi</span>
        </div>
      </div>

      {/* Contenu de la section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center justify-center text-foreground max-md:grid-cols-1 max-md:gap-y-6 ">

        {/* Section gauche avec le texte */}
        <div className="flex flex-col items-start justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center">
          <h3 className="text-4xl font-bold text-accent max-sm:text-3xl">
            À propos de moi
          </h3>

          <p className="text-lg leading-relaxed max-sm:text-base border-l-2 border-accent pl-4">
            Passionné d'informatique depuis le collège, je m'intéresse aussi bien au développement qu'à la cybersécurité, ou à l'intelligence artificielle. J'aime comprendre comment les systèmes fonctionnent et les explorer en profondeur, aussi bien dans la pratique que dans leurs fondements théoriques, notamment là où les mathématiques entrent en jeu. La cryptographie ou les réseaux de neuronnes sont les meilleurs exemples. Dès le lycée, dans le cadre de mon double baccalauréat, j'ai rédigé un mémoire de mathématiques sur la primalité, sujet au cœur de la sécurité informatique moderne, mobilisant des notions d'arithmétique modulaire avancée. J'ai également réalisé un mémoire sur la capacité de l'IA à résoudre des problèmes mathématiques. Ainsi, j'ai développé, entrainé et comparé les performances de modèles de machine learning et deep learning sur la résolution de polynômes de différents degrés.
          </p>

          <p className="text-lg leading-relaxed max-sm:text-base border-l-2 border-accent pl-4">
            Actuellement alternant développeur Java back-end chez Crédit Agricole Technologies & Services à Vannes, je suis admis à l'ENSIBS pour la rentrée 2026 afin d'y préparer un diplôme d'ingénieur en cybersécurité et sciences des données avec une spécialité cyber et IA. La formation est répartie équitablement entre le développement, l'IA et la cybersécurité. Pour accompagner ces 3 ans de cycle ingénieur, je suis à la recherche d'une alternance en lien avec la cybersécurité et/ou l'IA, partout en France.
          </p>
        </div>

        {/* Section droite avec les cartes */}
        <div className="items-center justify-center grid place-items-center gap-y-5">
          <div className="w-full border-l-2 border-accent px-4 py-6 flex flex-col items-center justify-center gap-3 rounded bg-surface/80 transition duration-300 hover:-translate-y-1 hover:border-accent">
            <div className="flex items-center justify-center gap-4">
              <CheckCheck className="mt-2 h-10 w-10 rounded-[10px] bg-accent text-accent-contrast shadow-accent" />
              <span className="text-base text-center lg:text-xl font-bold text-accent">Mes Qualités</span>
            </div>
            <p className="text-center text uppercase md:tracking-[0.2em]">
              Curieux • Rigoureux • Motivé
            </p>
          </div>
          <div className="w-full border-l-2 border-accent px-4 py-6 flex flex-col items-center justify-center gap-3 rounded bg-surface/80 transition duration-300 hover:-translate-y-1 hover:border-accent">
            <div className="flex items-center justify-center gap-4">
              <ShieldAlert className="mt-2 h-10 w-10 rounded-[10px] bg-accent text-accent-contrast shadow-accent" /> 
              <span className="text-base text-center lg:text-xl font-bold text-accent">Mes Défauts</span>
            </div>
              <p className="text-center text uppercase md:tracking-[0.2em]">
                Perfectionniste • Réservé
              </p>
          </div>
          <div className="w-full border-l-2 border-accent px-4 py-6 flex flex-col items-center justify-center gap-3 rounded bg-surface/80 transition duration-300 hover:-translate-y-1 hover:border-accent">
            <div className="flex items-center justify-center gap-4">
              <Flame className="mt-2 h-10 w-10 rounded-[10px] bg-accent text-accent-contrast shadow-accent" />
              <span className="text-base text-center lg:text-xl font-bold text-accent">Mes Passions</span>
            </div>
              <p className="text-center text uppercase md:tracking-[0.2em]">
                Sport • Musique • Lecture
              </p>
          </div>
          <div className="w-full border-l-2 border-accent px-4 py-6 flex flex-col items-center justify-center gap-3 rounded bg-surface/80 transition duration-300 hover:-translate-y-1 hover:border-accent">
            <div className="flex items-center justify-center gap-4">
              <Target className="mt-2 h-10 w-10 rounded-[10px] bg-accent text-accent-contrast shadow-accent" />
              <span className="text-base text-center lg:text-xl font-bold text-accent">Mes Objectifs</span>
            </div>
              <p className="text-center text uppercase md:tracking-[0.2em]">
                Cyberdéfense • ENSIBS 2027 • Ingénieur cybersécurité
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About