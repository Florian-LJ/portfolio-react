import React from 'react'
import photo_profile from '../assets/photo_profil.jpg'
import cvFile from '../assets/CV_Florian_Le_Joncour.pdf'
import { ChevronsDown, Mail, Briefcase } from "lucide-react";
import '../index.css'

function Hero() {
  return (
    <section className="pt-3">

    {/* Decorative accent dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map(() => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--portfolio-accent)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

    <div className="flex flex-col items-center min-h-screen justify-center z-10 relative">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center justify-center text-foreground max-sm:grid-cols-1 max-sm:gap-y-6">
        <div className="flex flex-col items-start justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center mt-10 ">
          <h3 className="text-3xl font-bold">Bienvenue sur le portfolio de</h3>
          <h1 className="text-7xl max-sm:text-5xl font-bold text-accent text-glow-accent">Le Joncour Florian</h1>

          <span className="inline-flex items-center rounded-full border border-accent/60 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-light shadow-accent">
            Développeur Java • Futur ingénieur cybersécurité
          </span>
              
          <p className="text-lg pb-4 text-start">
            Attiré par l'informatique depuis le collège, j'ai construit mon parcours pour atteindre un objectif. 
            Actuellement en 3ème année de BUT Informatique à l'IUT de Vannes, j'ai pour objectif de me spécialiser dans le domaine de 
            la cybersécurité en intégrant l'ENSIBS lors de la rentrée 2027.
          </p>

          <div className="flex flex-wrap items-center gap-4 max-sm:flex-col">
            <a href="mailto:florian.lejoncour@gmail.com">
              <button className="flex gap-2 px-6 py-3 rounded-full bg-accent text-accent-contrast transition-all duration-300 hover:scale-105 hover:shadow-accent">
                <Mail />Me contacter
              </button>
            </a>
            <a href="#projects">
              <button className="flex gap-2 px-6 py-3 rounded-full border-2 border-accent text-accent transition-all duration-300 hover:scale-105 hover:shadow-accent">
                <Briefcase />Mes projets
              </button> 
            </a>
            <a href={cvFile} download className="text-sm border-b border-accent transition-all duration-300 hover:scale-105 hover:text-accent-light">
              Télécharger mon CV
            </a>
          </div>

          {/* <div className="items-center grid grid-cols-2 gap-4 max-sm:gap-y-2 max-sm:mt-4">
            <div className="bg-surface-raised p-2 rounded-lg border-2 text-center hover:scale-105 glow-border border-accent hover:rotate-3 transition-all duration-300">
              <span className="text-lg max-sm:text-xl">☕ Développeur Java</span>
            </div>
            <div className="bg-surface-raised p-2 rounded-lg border-2 text-center hover:scale-105 glow-border border-accent hover:rotate-3 transition-all duration-300">
              <span className="text-lg max-sm:text-xl">🕵️ Futur ingénieur cybersécurité</span>
            </div>
          </div> */}
        </div>

        <div className="relative flex flex-col items-center justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center">
          <img src={photo_profile} alt="Photo de profil" className="rounded-lg shadow-lg object-cover h-96 md:h-105 lg:h-120" />
        
          {/* Floating Badge */}
          <div className="absolute -bottom-0 -right-0 rounded-xl px-4 py-3" style={{ animation: `float 4s ease-in-out infinite` }}>
            <div className="flex items-center gap-3 bg-surface-raised p-2 rounded-full border-2 text-center hover:scale-105 glow-border border-accent hover:rotate-3 transition-all duration-300">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Recherche alternance cybersécurité 2027
                </span>
              </div>
            </div>
          </div>

        </div>

        <a href="#about">
          <button className="flex flex-col items-center cursor-pointer p-2 m-4 rounded-lg bg-accent text-accent-contrast font-semibold transition-all duration-300 hover:scale-105 hover:shadow-accent max-sm:focus:scale-105 max-sm:focus:shadow-accent">
            Me découvrir  <ChevronsDown className="animate-bounce" size={32} />
          </button>
        </a>


    </div>
    </section>
  )
}

export default Hero