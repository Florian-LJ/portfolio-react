const experiences = [
    {
        period: "Sept 2025 — Aujourd'hui",
        role: "Gestion de projet de restructuration de la donnée",
        company: "FDB Industries, Lorient (56)",
        description:
            "Gestion de projet de restructuration de la donnée pour améliorer la qualité et la cohérence des informations. Collecte et extration des données afin d'aboutir à la conception de tableau de bord pour l'analyse des données.",
        technologies: ["Power BI", "Power Query", "SQL", "Data Analysis"],
        current: true,
    },
    {
        period: "Sept 2024 — Sept 2027",
        role: "BUT Informatique",
        company: "IUT Vannes (56)",
        description:
            "Formation universitaire en informatique, couvrant les bases de la programmation, des systèmes d'exploitation, des bases de données et du développement web. Projets pratiques incluant la création d'applications web et mobiles.",
        technologies: ["Java", "Python", "BDD", "Web Development", "Network Fundamentals"],
        current: true,
    },
    {
        period: "2023",
        role: "Bac Général - Spécialité Mathématiques et Informatique",
        company: "Lycée Benjamain Franklin, Auray (56)",
        description:
            "Obtention du baccalauréat général avec mention bien. Spécialisation en mathématiques et informatique, ce qui m'a permis de développer des compétences analytiques et de résolution de problèmes, ainsi qu'une compréhension approfondie des concepts informatiques.",
        technologies: ["Mathématiques", "Informatique", "Analyse de données"],
        current: false,
    },
    {
        period: "2020 : 1 semaine",
        role: "Stagiaire Informatique",
        company: "Cap Informatique, Lorient (56)",
        description:
            "Stage de 3ème réalisé dans le cadre de mon orientation scolaire. Découverte de la réparation d'ordinateurs et de la maintenance informatique. J'ai pu apprendre les bases du hardware et du software, ainsi que l'importance de la sécurité informatique.",
        technologies: ["Hardware", "Software", "Maintenance", "Sécurité"],
        current: false,
    },
];

function Experiences() {
    return (
        <div id="experiences" className="min-h-screen text-white flex flex-col items-center">
            {/* Titre de la section */}
            <div className="mt-17 w-full max-w-4xl gap-4 px-6 text-yellow-400">
                <div className="rounded border border-yellow-400/70 px-4 py-3 text-center shadow-[0_12px_30px_rgba(250,204,21,0.22)]">
                    <span className="text-xl font-medium uppercase tracking-[0.25em]">Mon parcours et mes expériences</span>
                </div>
            </div>

            {/* Timeline */}
            <div className="relative mt-17">
                <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400/70 via-yellow-400/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative grid md:grid-cols-2 gap-8">

                            {/* Timeline Dot */}
                            <div className="absolute left-3 md:left-1/2 top-0 w-3 h-3 bg-yellow-400 rounded-full -translate-x-1/2  z-10">
                                {exp.current && (
                                    <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-75" />
                                )}
                            </div>

                            {/* Experience Card */}
                            <div
                                className={`min-w-0 pl-8 max-md:mr-1 md:pl-0 ${index % 2 === 0
                                    ? "md:pr-16 md:flex md:justify-end md:text-right"
                                    : "md:col-start-2 md:pl-16 md:flex md:justify-start"
                                    }`}
                            >
                                <div className="group w-full rounded-3xl border border-gray-600 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 p-5 md:w-2xl md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm hover:border-yellow-400 hover:scale-101 hover:md:scale-103 transition-all duration-300">
                                    <span className="inline-block text-sm font-semibold text-yellow-400 mb-3">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-yellow-400">{exp.role}</h3>
                                    <p className="text-gray-400 mb-3">{exp.company}</p>
                                    <p className="text-gray-300">{exp.description}</p>
                                    <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-xl text-sm opacity-80 hover:opacity-100 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Experiences;