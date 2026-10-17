import React, { useState } from 'react'

const sk = (id) => `https://skillicons.dev/icons?i=${id}`
const iconify = (collection, id) =>
  `https://api.iconify.design/${collection}/${id}.svg`

const skillGroups = [
  {
    title: 'Back-end Java',
    description:
      'Développement d’API REST et de microservices en Java, avec Spring Boot et Maven. Tests unitaires et d’intégration, documentation Swagger.',
    items: [
      { name: 'Java', icon: sk('java') },
      { name: 'Spring Boot', icon: sk('spring') },
      { name: 'Maven', icon: sk('maven') },
      { name: 'Postman', icon: sk('postman') }
    ]
  },
  {
    title: 'Automatisation & IA',
    description:
      'Automatisation de tâches répétitives et utilisation d’IA pour la génération de code et la rédaction de documentation.',
    items: [
      { name: 'Power Automate', icon: iconify('selfhst', 'microsoft-power-automate') },
      { name: 'Ansible', icon: iconify('skill-icons', 'ansible') },
      { name: 'n8n', icon: iconify('logos', 'n8n-icon') },
      { name: 'Claude', icon: iconify('logos', 'claude-icon') },
      { name: 'GitHub Copilot', icon: iconify('logos', 'github-copilot') }
    ]
  },
  {
    title: 'Audit & Sécurité',
    description:
      'Audit de sécurité des applications web et des infrastructures, tests d’intrusion, analyse de vulnérabilités et exploitation de failles.',
    items: [
      { name: 'Openvas', icon: iconify('selfhst', 'openvas') },
      {
        name: 'Bloodhound',
        icon: 'https://raw.githubusercontent.com/SpecterOps/BloodHound/main/cmd/ui/public/img/BHCE_Vertical_RedField.svg'
      },
      { name: 'Nmap', icon: iconify('file-icons', 'nmap') },
      { name: 'Metasploit', icon: iconify('thesvg-color', 'metasploit') }
    ]
  },
  {
    title: 'Cryptographie',
    description:
      'Connaissances en cryptographie appliquée : chiffrement symétrique et asymétrique, hachage, signatures numériques, certificats.',
    items: [
      { name: 'RSA', icon: iconify('mdi', 'key-variant') },
      { name: 'Diffie-Hellman', icon: iconify('mdi', 'swap-horizontal') },
      { name: 'AES', icon: iconify('mdi', 'lock') },
      { name: 'SHA-256', icon: iconify('mdi', 'hashtag') },
      { name: 'OpenSSL', icon: iconify('simple-icons', 'openssl') }
    ]
  },
  {
    title: 'Livraison & CI/CD',
    description:
      'Automatisation du déploiement des applications et des infrastructures, intégration continue et livraison continue.',
    items: [
      { name: 'GitLab CI/CD', icon: sk('gitlab') },
      { name: 'Kubernetes', icon: sk('kubernetes') },
      { name: 'Docker', icon: sk('docker') },
      { name: 'Git', icon: sk('git') },
      { name: 'Bash', icon: sk('bash') }
    ]
  },
  {
    title: 'Données',
    description:
      'Conception et gestion de bases de données relationnelles et NoSQL, modélisation des données, optimisation des requêtes.',
    items: [
      { name: 'PostgreSQL', icon: sk('postgresql') },
      { name: 'MySQL', icon: sk('mysql') },
      { name: 'MongoDB', icon: sk('mongodb') },
      { name: 'SQLite', icon: sk('sqlite') },
      { name: 'Firebase', icon: sk('firebase') }
    ]
  },
  {
    title: 'Web & scripting',
    description:
      'Développement front-end et scripting pour l’automatisation de tâches, la manipulation du DOM et la création d’interfaces utilisateur interactives.',
    items: [
      { name: 'Python', icon: sk('python') },
      { name: 'TypeScript', icon: sk('typescript') },
      { name: 'JavaScript', icon: sk('javascript') },
      { name: 'React', icon: sk('react') },
      { name: 'Vite', icon: sk('vite') },
      { name: 'TailwindCSS', icon: sk('tailwindcss') },
      { name: 'WordPress', icon: sk('wordpress') }
    ]
  },
  {
    title: 'Systèmes & auto-hébergement',
    description:
      'Administration de systèmes Linux et Windows, virtualisation, conteneurisation et auto-hébergement d’applications web et de services.',
    items: [
      { name: 'Linux', icon: sk('linux') },
      { name: 'Traefik', icon: iconify('logos', 'traefik-proxy') },
      { name: 'Let’s Encrypt', icon: iconify('logos', 'letsencrypt') },
      { name: 'VirtualBox', icon: iconify('simple-icons', 'virtualbox') },
      { name: 'Windows', icon: sk('windows') },
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
    <div className="group rounded-2xl border border-outline bg-surface/50 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm hover:scale-101 transition duration-300">
      <div className="mb-5 flex items-start justify-between gap-4 border-b border-outline pb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
            {group.title}
          </h3>
          <p className="mt-1 max-w-xs text-sm text-muted">{group.description}</p>
        </div>
        <span className="shrink-0 rounded-full border border-accent/50 px-2.5 py-0.5 text-xs font-medium text-accent">
          {group.items.length}
        </span>
      </div>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {group.items.map((skill) => (
          <li
            key={skill.name}
            className="group flex flex-col items-center  hover:border-accent/50 glow-border justify-center rounded-xl border border-outline bg-surface-raised p-3 text-center"
          >
            <SkillIcon name={skill.name} src={skill.icon} />
            <p className="mt-2 text-sm font-medium text-soft">{skill.name}</p>
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
          <p className="mx-auto mt-4 max-w-xl text-center text-soft">
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