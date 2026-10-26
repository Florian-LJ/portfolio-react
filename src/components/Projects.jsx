import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import portfolioImage from '../assets/portfolio-react.png'
import kioptrixImage from '../assets/kioptrix-level2.jpg'
import defiutImage from '../assets/defiut.png'
import mongolingoImage from '../assets/mongolingo.png'
import wordpressSeteImage from '../assets/wordpress-sete.png'
import infraReseau from '../assets/infra_reseau.png'

const projects = [
  {
    name: 'Portfolio React',
    status: 'En cours',
    description:
      "Mon portfolio personnel, réalisé avec React et Tailwind CSS pour présenter mon parcours, mes compétences et mes projets. L'objectif est de créer un site web moderne et responsive qui reflète mon identité professionnelle et mes réalisations tout en limitant l'utilisation de l'IA",
    image: portfolioImage,
    imageAlt: 'Illustration du projet Portfolio React',
    repository: 'https://github.com/Florian-LJ/portfolio-react',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    name: 'Infrastructure d’entreprise segmentée',
    status: 'Terminé',
    description:
      "Projet réalisé seul sur plusieurs TP : conception d'un réseau d'entreprise segmenté en WAN, DMZ et LAN, avec déploiement des services attendus en entreprise et une politique de filtrage au strict nécessaire. Chaque étape est documentée dans un rapport.",
    image: infraReseau,
      highlights: [
      'Routeur Alpine avec NAT et pare-feu nftables en refus par défaut : seuls le mail et le VPN sont ouverts vers la DMZ, qui ne peut pas joindre le LAN.',
      'VPN WireGuard site à site.',
      'DNS faisant autorité avec BIND9 ; messagerie configurée avec SPF, DKIM (OpenDKIM) et DMARC.',
      'Postfix et Dovecot sous Docker, TLS, webmail Roundcube, et antivirus/antispam ClamAV et SpamAssassin via Amavis, testés avec EICAR et GTUBE.',
      'Samba pour le partage de fichiers et d’imprimante, puis contrôleur de domaine Active Directory avec Kerberos, postes Windows joints au domaine et profils itinérants.',
      'OpenLDAP sécurisé en LDAPS et NIS.',
    ],
    technologies: [
      'Alpine Linux',
      'nftables',
      'WireGuard',
      'BIND9',
      'Postfix',
      'Dovecot',
      'Docker',
      'Samba',
      'Active Directory',
      'OpenLDAP',
      'NIS',
    ],
  },
  {
    name: 'Kioptrix Level 2',
    status: 'Terminé',
    description:
      "Test d'intrusion sur une machine délibérément vulnérable, réalisé en TP : reconnaissance Nmap, injection SQL, exécution de commandes à distance pour un reverse shell, puis exploit noyau jusqu'à root.",
    image: kioptrixImage,
    imageAlt: 'Illustration du projet Kioptrix Level 2',
    technologies: ['Cybersécurité','Nmap', 'SQL Injection', 'Reverse Shell', 'Kernel Exploit'],
  },
  {
    name: 'DefIUT',
    status: 'Terminé',
    description:
      "Plateforme de défis informatiques pour l'IUT : authentification, gestion des soumissions et exécution isolée du code en sandbox Docker. Architecture full-stack avec API REST.",
    image: defiutImage,
    imageAlt: 'Illustration du projet DefIUT',
    technologies: ['Docker', 'Express.js', 'React', 'MySQL'],
  },
  {
    name: 'Mongolingo',
    status: 'Terminé',
    description:
      "Mongolingo est une application web de quiz inspirée de Duolingo, dédiée à l'apprentissage de MongoDB. Elle propose plus de 100 questions réparties sur 4 niveaux de difficulté (Easy, Medium,Hard, Expert) couvrant plusieurs thèmes. Chaque bonne réponse exécute la requête sur une vraie base MongoDB et affiche le résultat en temps réel dans l'interface.",
    image: mongolingoImage,
    imageAlt: 'Illustration du projet Mongolingo',
    repository: 'https://github.com/Florian-LJ/mongolingo',
    technologies: ['React', 'Express.js', 'MongoDB', 'Mongoose', 'Docker'],
  },
  {
    name: 'WordPress sur Sète',
    status: 'Terminé',
    description:
      "Réalisation d'un site WordPress sur la ville de Sète, avec un thème personnalisé et des fonctionnalités spécifiques pour présenter les attractions locales, les événements et les services touristiques. Projet scolaire mélant développement web et économie numérique.",
    image: wordpressSeteImage,
    imageAlt: 'Illustration du projet WordPress sur Sète',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'HTML', 'MySQL'],
  }
]

function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({})

  function toggleProjectDetails(projectName) {
    setExpandedProjects((current) => ({
      ...current,
      [projectName]: !current[projectName],
    }))
  }

  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 w-full max-w-4xl text-accent">
          <div className="rounded border border-accent/70 px-4 py-3 text-center shadow-accent">
            <h2 className="text-xl font-medium uppercase tracking-[0.25em]">
              Mes projets
            </h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group/card flex flex-col overflow-hidden rounded-2xl border border-outline bg-surface-raised shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-accent"
            >
              {project.image && (
                <div className="aspect-[16/9] overflow-hidden bg-white">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover/card:text-accent">
                    {project.name}
                  </h3>

                  <span className="rounded-full flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {project.status === 'En cours' && (
                     <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    )}
                    {project.status}
                  </span>
                </div>
                
                <p className="mt-3 leading-relaxed text-muted">
                  {project.description}
                </p>

                {project.highlights && (
                  <>
                    <button
                      type="button"
                      aria-expanded={Boolean(expandedProjects[project.name])}
                      onClick={() => toggleProjectDetails(project.name)}
                      className="mt-4 inline-flex w-fit items-center gap-2 font-medium text-accent transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {expandedProjects[project.name] ? 'Moins d’infos' : 'Plus d’infos'}
                      <ChevronDown
                        aria-hidden="true"
                        size={16}
                        className={`transition-transform ${expandedProjects[project.name] ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expandedProjects[project.name] && (
                      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                
                {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="group/button mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2.5 font-medium text-white transition hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <img
                    src="https://api.iconify.design/akar-icons/github-fill.svg?color=%23ffffff"
                    alt=""
                    className="h-5 w-5"
                  />
                  Voir le repo
                  <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover/button:translate-x-1" />
                </a>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
