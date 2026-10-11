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
        <div id="experiences" className="min-h-screen text-foreground flex flex-col items-center">
            {/* Titre de la section */}
            <div className="mt-17 w-full max-w-4xl gap-4 px-6 text-accent">
                <div className="rounded border border-accent/70 px-4 py-3 text-center shadow-accent">
                    <span className="text-xl font-medium uppercase tracking-[0.25em]">Mon parcours et mes expériences</span>
                </div>
            </div>

            {/* Timeline */}
            <div className="relative mt-17">
                <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/70 via-accent/30 to-transparent md:-translate-x-1/2 shadow-accent" />

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative grid md:grid-cols-2 gap-8">

                            {/* Timeline Dot */}
                            <div className="absolute left-3 md:left-1/2 top-0 w-3 h-3 bg-accent rounded-full -translate-x-1/2  z-10">
                                {exp.current && (
                                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                                )}
                            </div>

                            {/* Experience Card */}
                            <div
                                className={`min-w-0 pl-8 max-md:mr-1 md:pl-0 ${index % 2 === 0
                                    ? "md:pr-16 md:flex md:justify-end md:text-right"
                                    : "md:col-start-2 md:pl-16 md:flex md:justify-start"
                                    }`}
                            >
                                <div className="group w-full rounded-3xl border border-outline bg-gradient-to-br from-surface-raised via-page to-section p-5 md:w-2xl md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.12)] backdrop-blur-sm hover:border-accent hover:scale-101 hover:md:scale-103 transition-all duration-300">
                                    <span className="inline-block text-sm font-semibold text-accent mb-3">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-accent">{exp.role}</h3>
                                    <p className="text-muted mb-3">{exp.company}</p>
                                    <p className="text-soft">{exp.description}</p>
                                    <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-xl text-sm opacity-80 hover:opacity-100 transition-all duration-300"
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