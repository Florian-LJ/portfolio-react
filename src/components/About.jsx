import React from 'react'

function About() {
  return (
    <div id="about" className="flex flex-col items-center h-screen bg-gray-900 justify-center">
      <span className="mt-15 text-7xl max-sm:text-6xl font-bold text-yellow-400">À propos de moi</span>
      <div className="w-full max-w-7xl mx-auto h-screen grid grid-cols-2 gap-8 items-center justify-center text-white max-sm:grid-cols-1 max-sm:gap-y-6 ">
        <div className="flex flex-col items-start justify-center space-y-4 p-8 max-sm:items-center max-sm:text-center max-sm:mt-10 ">
          <h3 className="text-3xl">À propos de moi</h3>
          <p className="text-lg max-sm:text-xl">
Passionné d'informatique depuis le collège, je m'intéresse aussi bien au développement qu'à la cybersécurité, ou à l'intelligence artificielle. J'aime comprendre comment les systèmes fonctionnent et les explorer en profondeur, aussi bien dans la pratique que dans leurs fondements théoriques, notamment là où les mathématiques entrent en jeu. La cryptographie ou les réseaux de neuronnes sont les meilleurs exemples. Dès le lycée, dans le cadre de mon double baccalauréat, j'ai rédigé un mémoire de mathématiques sur la primalité, sujet au cœur de la sécurité informatique moderne, mobilisant des notions d'arithmétique modulaire avancée. J'ai également réalisé un mémoire sur la capacité de l'IA à résoudre des problèmes mathématiques. Ainsi, j'ai développé, entrainé et comparé les performances de modèles de machine learning et deep learning sur la résolution de polynômes de différents degrés.

Actuellement alternant développeur Java back-end chez Crédit Agricole Technologies & Services à Vannes, je suis admis à l'ENSIBS pour la rentrée 2026 afin d'y préparer un diplôme d'ingénieur en cybersécurité et sciences des données avec une spécialité cyber et IA. La formation est répartie équitablement entre le développement, l'IA et la cybersécurité. Pour accompagner ces 3 ans de cycle ingénieur, je suis à la recherche d'une alternance en lien avec la cybersécurité et/ou l'IA, partout en France.          </p>
        </div>
      </div>
    </div>
  )
}

export default About