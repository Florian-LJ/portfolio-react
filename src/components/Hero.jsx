import React from 'react'
import photo_profile from '../assets/photo_profil.jpg'
import cvFile from '../assets/CV_Florian_Le_Joncour.pdf'
import { ChevronsDown } from "lucide-react";
import '../index.css'

function Hero() {
  return (
    <section className="pt-3">

    {/* Yellow Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#facc15 ",
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
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center justify-center text-white max-sm:grid-cols-1 max-sm:gap-y-6">
        <div className="flex flex-col items-start justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center mt-10 ">
          <h3 className="text-3xl">Bienvenue sur le portfolio de</h3>
          <h1 className="text-7xl max-sm:text-6xl font-bold text-yellow-400 text-glow-yellow">Le Joncour Florian</h1>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary">
            <span className="inline-flex items-center rounded-full border border-yellow-400/60 bg-yellow-400/10 px-4 py-1.5 text-sm font-medium text-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.15)]">
              Développeur Java • Futur ingénieur cybersécurité
            </span>
          </span>
              
          <p className="text-lg  pb-4">
            Attiré par l'informatique depuis le collège, j'ai construit mon parcours pour atteindre un objectif. 
            Actuellement en 3ème année de BUT Informatique à l'IUT de Vannes, j'ai pour objectif de me spécialiser dans le domaine de 
            la cybersécurité en intégrant l'ENSIBS lors de la rentrée 2027.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:florian.lejoncour@gmail.com">
              <button className="px-6 py-3 rounded-full bg-yellow-400 text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                Me contacter
              </button>
            </a>
            <a href="#projects">
              <button className="px-6 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                Mes projets
              </button> 
            </a>
            <a href={cvFile} download className="text-sm border-b border-yellow-400 hover:scale-105 hover:text-yellow-300 transition-all duration-300">
              Télécharger mon CV
            </a>
          </div>

          {/* <div className="items-center grid grid-cols-2 gap-4 max-sm:gap-y-2 max-sm:mt-4">
            <div className="bg-gray-800 p-2 rounded-lg border-2 text-center hover:scale-105 glow-border border-yellow-400 hover:rotate-3 transition-all duration-300">
              <span className="text-lg max-sm:text-xl">☕ Développeur Java</span>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg border-2 text-center hover:scale-105 glow-border border-yellow-400 hover:rotate-3 transition-all duration-300">
              <span className="text-lg max-sm:text-xl">🕵️ Futur ingénieur cybersécurité</span>
            </div>
          </div> */}
        </div>

        <div className="relative flex flex-col items-center justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center">
          <img src={photo_profile} alt="Photo de profil" className="rounded-lg shadow-lg object-cover h-96 md:h-105 lg:h-120" />
        
          {/* Floating Badge */}
          <div className="absolute -bottom-0 -right-0 rounded-xl px-4 py-3" style={{ animation: `float 4s ease-in-out infinite` }}>
            <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-full border-2 text-center hover:scale-105 glow-border border-yellow-400 hover:rotate-3 transition-all duration-300">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  Recherche alternance cybersécurité 2027
                </span>
              </div>
            </div>
          </div>

        </div>

        <a href="#about">
          <button className="flex flex-col items-center cursor-pointer p-2 m-4 rounded-lg bg-yellow-400 text-slate-900 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] max-sm:focus:scale-105 max-sm:focus:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
            Me découvrir  <ChevronsDown className="animate-bounce" size={32} />
          </button>
        </a>


    </div>
    </section>
  )
}

export default Hero