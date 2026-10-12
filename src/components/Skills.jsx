import React, { useState } from 'react'

// level : 1 à 5 (à ajuster selon ton ressenti réel)
const skillGroups = [
  {
    title: 'Langages',
    description: 'Ce que j’écris au quotidien, du back-end au navigateur.',
    items: [
      { name: 'Java', level: 4, icon: 'https://skillicons.dev/icons?i=java' },
      { name: 'Python', level: 4, icon: 'https://skillicons.dev/icons?i=python' },
      { name: 'JavaScript', level: 4, icon: 'https://skillicons.dev/icons?i=js' },
      { name: 'HTML', level: 5, icon: 'https://skillicons.dev/icons?i=html' },
      { name: 'CSS', level: 4, icon: 'https://skillicons.dev/icons?i=css' }
    ]
  },
  {
    title: 'Frameworks & Web',
    description: 'Les outils pour construire des applications complètes.',
    items: [
      { name: 'Spring Boot', level: 3, icon: 'https://skillicons.dev/icons?i=spring' },
      { name: 'React', level: 4, icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'TailwindCSS', level: 4, icon: 'https://skillicons.dev/icons?i=tailwind' },
      { name: 'Wordpress', level: 3, icon: 'https://skillicons.dev/icons?i=wordpress' }
    ]
  },
  {
    title: 'Bases de données',
    description: 'Relationnel ou NoSQL, selon la forme des données.',
    items: [
      { name: 'MySQL', level: 4, icon: 'https://skillicons.dev/icons?i=mysql' },
      { name: 'PostgreSQL', level: 3, icon: 'https://skillicons.dev/icons?i=postgres' },
      { name: 'MongoDB', level: 3, icon: 'https://skillicons.dev/icons?i=mongodb' },
      { name: 'SQLite', level: 3, icon: 'https://skillicons.dev/icons?i=sqlite' }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Environnements, conteneurs et versionnage du code.',
    items: [
      { name: 'Docker', level: 3, icon: 'https://skillicons.dev/icons?i=docker' },
      { name: 'Linux', level: 4, icon: 'https://skillicons.dev/icons?i=linux' },
      { name: 'Git', level: 4, icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'VirtualBox', level: 3, icon: '../images/Virtualbox_logo.webp' }
    ]
  }
]

function SkillIcon({ name, src }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700 text-lg font-semibold text-slate-200"
      >
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
    />
  )
}

function SkillGroup({ group }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-700 motion-reduce:transition-none">
      <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{group.title}</h3>
          <p className="mt-1 max-w-xs text-sm text-slate-400">{group.description}</p>
        </div>
        <span className="shrink-0 rounded-full border border-accent/50 px-2.5 py-0.5 text-xs font-medium text-accent">
          {group.items.length}
        </span>
      </div>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {group.items.map((skill) => (
          <li
            key={skill.name}
            className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-slate-800/60 p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-800 hover:shadow-[0_8px_20px_rgba(34,211,238,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <SkillIcon name={skill.name} src={skill.icon} />
            <p className="mt-2 text-sm font-medium text-slate-200">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen items-center bg-section px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 w-full max-w-4xl text-accent">
          <div className="rounded border border-accent/70 px-4 py-3 text-center shadow-accent">
            <h2 className="text-xl font-medium uppercase tracking-[0.25em]">Compétences</h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
            Les technologies que j’utilise pour concevoir, développer et déployer mes projets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills