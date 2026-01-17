const Skills = () => {
  const skillCategories = [
    {
      title: "Core Stack",
      skills: ["React", "Node.js", "TypeScript", "JavaScript", "Python", "MongoDB"],
    },
    {
      title: "Backend Patterns",
      skills: ["RESTful APIs", "WebSockets", "Long Polling", "Pub/Sub Queues", "Cloud Functions", "Redis", "RabbitMQ"],
    },
    {
      title: "AI & Integration",
      skills: ["OpenAI", "Anthropic", "Google Gemini", "Microsoft Office (WOPI)", "Algolia", "Custom AI Services"],
    },
    {
      title: "Performance & Infrastructure",
      skills: ["React Virtualization", "Code Splitting", "Docker", "CI/CD", "GCP", "Cloud Storage", "Playwright"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 border-t-2 border-foreground">
      <div className="container mx-auto">
        <p className="font-mono text-sm uppercase tracking-widest mb-4 text-muted-foreground">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12">
          Technical Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="border-2 border-foreground p-6">
              <h3 className="font-mono text-lg uppercase tracking-wide mb-4 pb-2 border-b-2 border-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 bg-secondary text-secondary-foreground border border-foreground font-mono text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
