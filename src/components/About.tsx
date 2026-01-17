const About = () => {
  const highlights = [
    { label: "Years Experience", value: "3+" },
    { label: "Fortune 500 Clients", value: "2+" },
    { label: "AI Providers Integrated", value: "10+" },
    { label: "Performance Improvement", value: "70%" },
  ];

  return (
    <section id="about" className="py-20 px-4 border-t-2 border-foreground">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest mb-4 text-muted-foreground">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Crafting Digital
              <br />
              Experiences
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a Software Developer with end-to-end ownership in a startup environment. 
              At <span className="font-bold">Naya Studio</span>, I've been instrumental in building 
              a digital asset management platform serving enterprise clients including Adidas and MillerKnoll.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My expertise spans from crafting performant React applications to designing 
              multi-provider AI systems and implementing real-time collaboration features 
              that scale to enterprise requirements.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="border-2 border-foreground p-6 bg-secondary"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">{item.value}</p>
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
