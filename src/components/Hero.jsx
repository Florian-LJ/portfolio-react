import React from 'react'
import photo_profile from '../assets/photo_profil.jpg'
import { ChevronsDown } from "lucide-react";

function Hero() {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-900 justify-center">
      <div className="w-full max-w-7xl mx-auto h-screen grid grid-cols-2 gap-8 items-center justify-center text-white max-sm:grid-cols-1 max-sm:gap-y-6 ">
        <div className="flex flex-col items-start justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center max-sm:mt-10 ">
          <h3 className="text-3xl">Bienvenue sur le portfolio de</h3>
          <h1 className="text-7xl max-sm:text-6xl font-bold text-yellow-400">Le Joncour Florian</h1>

          <p className="text-lg pt-8 pb-4">
            Attiré par l'informatique depuis le collège, j'ai construit mon parcours pour atteindre un objectif. 
            Actuellement en 3ème année de BUT Informatique à l'IUT de Vannes, j'ai pour objectif de me spécialiser dans le domaine de 
            la cybersécurité en intégrant l'ENSIBS lors de la rentrée 2027.
          </p>

          <div className="items-center grid grid-cols-2 gap-4 max-sm:gap-y-2 max-sm:mt-4">
            <div className="bg-gray-800 p-2 rounded-lg border-2 border-white text-center hover:scale-105 hover:border-yellow-400 transition-all duration-300">
              <span className="text-lg max-sm:text-xl">☕ Développeur Java</span>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg border-2 border-white text-center hover:scale-105 hover:border-yellow-400 transition-all duration-300">
              <span className="text-lg max-sm:text-xl">🕵️ Futur ingénieur cybersécurité</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center h-100 max-sm:h-95 ">
          <img src={photo_profile} alt="Photo de profil" className="rounded-lg shadow-lg object-cover h-150 max-sm:h-95" />
        </div>
      </div>



        <a href="#about">
          <button className="flex flex-col items-center cursor-pointer p-2 m-4 rounded-lg bg-yellow-400 text-slate-900 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] max-sm:focus:scale-105 max-sm:focus:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
            Me découvrir  <ChevronsDown className="animate-bounce" size={32} />
          </button>
      </a>

{/* <button className="px-6 py-3 rounded-lg border-2 border-yellow-400 text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-900">
  Mes projets
</button> */}


    </div>

  )
}

export default Hero