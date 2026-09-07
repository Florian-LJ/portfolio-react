const experiences = [
    {
        period: "2022 — Present",
        role: "Senior Frontend Engineer",
        company: "Tech Innovators Inc.",
        description:
            "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
        technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
        current: true,
    },
    {
        period: "2020 — 2022",
        role: "Frontend Engineer",
        company: "Digital Solutions Co.",
        description:
            "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
        technologies: ["React", "Redux", "Jest", "Cypress"],
        current: false,
    },
    {
        period: "2019 — 2020",
        role: "Junior Developer",
        company: "StartUp Labs",
        description:
            "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        current: false,
    },
    {
        period: "2018 — 2019",
        role: "Freelance Developer",
        company: "Self-Employed",
        description:
            "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
        technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
        current: false,
    },
];

function Experiences() {
    return (
        <div id="experiences" className="min-h-screen text-white">
            <div className="relative">
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
                                className={`min-w-0 pl-8 md:pl-0 ${index % 2 === 0
                                        ? "md:pr-16 md:flex md:justify-end md:text-right"
                                        : "md:col-start-2 md:pl-16 md:flex md:justify-start"
                                    }`}
                            >
                                <div className="group w-full rounded-3xl border border-gray-600 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 p-5 md:w-2xl md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm hover:border-yellow-400 hover:scale-103 transition-all duration-300">
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