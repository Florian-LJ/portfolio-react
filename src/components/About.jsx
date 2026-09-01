import React from 'react'
import {CheckCheck, ShieldAlert, Target, Flame} from "lucide-react";

function About() {
  return (
    <div id="about" className="relative flex flex-col items-center h-full bg-gray-950 ">
      
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
 

      {/* Titre de la section */}
      <div className="mt-17 w-full max-w-4xl gap-4 px-6 text-yellow-400">
        <div className="rounded border border-yellow-400/70 px-4 py-3 text-center shadow-[0_12px_30px_rgba(250,204,21,0.22)]">
          <span className="text-xl font-medium uppercase tracking-[0.25em]">À propos de moi</span>
        </div>
      </div>

      {/* Contenu de la section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center justify-center text-white max-md:grid-cols-1 max-md:gap-y-6 ">
        
        {/* Section gauche avec le texte */}
        <div className="flex flex-col items-start justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center">
          <h3 className="text-4xl font-bold text-yellow-400 max-sm:text-3xl">
            À propos de moi
          </h3>

          <p className="text-lg leading-relaxed text-gray-200 max-sm:text-base border-l-2 border-yellow-400 pl-4">
            Passionné d'informatique depuis le collège, je m'intéresse aussi bien au développement qu'à la cybersécurité, ou à l'intelligence artificielle. J'aime comprendre comment les systèmes fonctionnent et les explorer en profondeur, aussi bien dans la pratique que dans leurs fondements théoriques, notamment là où les mathématiques entrent en jeu. La cryptographie ou les réseaux de neuronnes sont les meilleurs exemples. Dès le lycée, dans le cadre de mon double baccalauréat, j'ai rédigé un mémoire de mathématiques sur la primalité, sujet au cœur de la sécurité informatique moderne, mobilisant des notions d'arithmétique modulaire avancée. J'ai également réalisé un mémoire sur la capacité de l'IA à résoudre des problèmes mathématiques. Ainsi, j'ai développé, entrainé et comparé les performances de modèles de machine learning et deep learning sur la résolution de polynômes de différents degrés.
          </p>

          <p className="text-lg leading-relaxed text-gray-200 max-sm:text-base border-l-2 border-yellow-400 pl-4">
            Actuellement alternant développeur Java back-end chez Crédit Agricole Technologies & Services à Vannes, je suis admis à l'ENSIBS pour la rentrée 2026 afin d'y préparer un diplôme d'ingénieur en cybersécurité et sciences des données avec une spécialité cyber et IA. La formation est répartie équitablement entre le développement, l'IA et la cybersécurité. Pour accompagner ces 3 ans de cycle ingénieur, je suis à la recherche d'une alternance en lien avec la cybersécurité et/ou l'IA, partout en France.
          </p>
        </div>

        {/* Section droite avec les cartes */}
        <div className="items-center justify-center grid place-items-center grid-cols-2 gap-y-5 ">

          <div className="w-2/3 max-w-48 px-4 py-6 flex flex-col items-center justify-center gap-3 rounded border border-white/10 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-yellow-400">
            <CheckCheck className="mt-2 h-15 w-15 rounded bg-yellow-400 text-black shadow-[0_8px_18px_rgba(250,204,21,0.45)]" />
            <span className="text-base lg:text-xl font-bold text-yellow-400">Mes Qualités</span>
            <ul className="flex flex-col items-center gap-2 text-center text-sm uppercase tracking-[0.2em] text-yellow-300/70">
              <li>Curieux</li>
              <li>Rigoureux</li>
              <li>Motivé</li>
            </ul>
          </div>

          <div className="w-2/3 max-w-48 px-4 py-6 flex flex-col items-center justify-center gap-3 rounded border border-white/10 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-yellow-400">
            <ShieldAlert className="mt-2 h-15 w-15 rounded bg-yellow-400 text-black shadow-[0_8px_18px_rgba(250,204,21,0.45)]" />
            <span className="text-xl font-bold text-yellow-400">Mes Défauts</span>
            <ul className="flex flex-col items-center gap-2 text-center text-sm uppercase tracking-[0.2em] text-yellow-300/70">
              <li>Perfectionniste</li>
              <li>Impulsif</li>
              <li>Curieux</li>
            </ul>
          </div>
          
          <div className="w-2/3 max-w-48 px-4 py-6 flex flex-col items-center justify-center gap-3 rounded border border-white/10 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-yellow-400">
            <Flame className="mt-2 h-15 w-15 rounded bg-yellow-400 text-black shadow-[0_8px_18px_rgba(250,204,21,0.45)]" />
            <span className="text-xl font-bold text-yellow-400">Mes Passions</span>
            <ul className="flex flex-col items-center gap-2 text-center text-sm uppercase tracking-[0.2em] text-yellow-300/70">
              <li>Sport</li>
              <li>Musique</li>
              <li>Lecture</li>
            </ul>
          </div>

          <div className="w-2/3 max-w-48 px-4 py-6 flex flex-col items-center justify-center gap-3 rounded border border-white/10 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-yellow-400">
            <Target className="mt-2 h-15 w-15 rounded bg-yellow-400 text-black shadow-[0_8px_18px_rgba(250,204,21,0.45)]" />
            <span className="text-xl font-bold text-yellow-400">Mes Objectifs</span>
            <ul className="flex flex-col items-center gap-2 text-center text-sm uppercase tracking-[0.2em] text-yellow-300/70">
              <li>Cyberdéfense</li>
              <li>ENSIBS 2027</li>
              <li>Ingénieur cybersécurité</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About