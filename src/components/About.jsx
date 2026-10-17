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
            Passionné d'informatique depuis le lycée, j'ai choisi de quitter mon établissement pour rejoindre une filière NSI : ce domaine diversifié, où l'on peut construire presque tout ce que l'on imagine, s'est imposé à moi comme une évidence. Depuis, je m'intéresse aussi bien au développement qu'aux données et à la cybersécurité. J'aime construire et comprendre en profondeur : c'est pourquoi je limite volontairement l'utilisation de l'IA dans mes projets personnels, que je développe de A à Z — portfolio, applications web avec Spring Boot et ExpressJS, applications mobiles avec Flutter et React Native. Je vois l'IA comme un compagnon qui m'accompagne et m'aide, pas comme un outil qui fait à ma place.
          </p>

          <p className="text-lg leading-relaxed max-sm:text-base border-l-2 border-accent pl-4">
            Actuellement alternant en BUT Informatique à la Fonderie de Bretagne, j'y pilote en autonomie un projet de transformation numérique : regrouper et standardiser des données fragmentées pour en faciliter l'analyse, de la collecte des besoins métiers jusqu'aux tableaux de bord Power BI. J'y assiste également le prestataire RSSI dans la mise en place de la norme NIS2. Ces expériences nourrissent mon objectif : rejoindre l'ENSIBS pour y préparer un diplôme d'ingénieur en cybersécurité et sciences des données. Pour accompagner ce cycle ingénieur de 3 ans, je serai à la recherche d'une alternance en lien avec la cybersécurité.
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
      <div className="mb-16" />
    </div>
  )
}

export default About