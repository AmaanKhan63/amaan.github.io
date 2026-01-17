import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Naya Studio",
      link: "https://naya.studio",
      period: "Nov 2022 – Present",
      location: "Remote",
      description: "Product-based SaaS startup building a digital asset management platform for enterprise clients",
      achievements: [
        "Developed enterprise integrations for Fortune 500 clients (Adidas, MillerKnoll), contributing to six-figure ARR growth",
        "Built multi-provider AI platform supporting 50+ models across image, 3D, and video workflows",
        "Improved image load times by 70% and page rendering speed by 50% through React optimization",
        "Implemented Microsoft Office integration (WOPI protocol) and real-time collaboration with WebSockets",
        "Built AI-powered semantic search with Algolia, improving search accuracy for enterprise documents",
        "Mentored 2 junior developers and built custom feature flag system saving $2K/year",
      ],
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "WebSockets", "AI Integration"],
    },
    {
      title: "Technical Lead (Internship)",
      company: "Jobs Territory",
      period: "Jun 2022 – Oct 2022",
      location: "Remote",
      description: "Comprehensive hiring platform serving thousands of users",
      achievements: [
        "Led technical development and managed development team for scalable recruitment solution",
        "Implemented AI-powered resume parsing to streamline recruitment workflows",
        "Built RESTful APIs for job posting, candidate matching, and application management",
        "Made key architectural decisions ensuring system performance under growing user base",
        "Coordinated sprint planning and code reviews, mentoring team on best practices",
      ],
      tags: ["React", "Node.js", "REST APIs", "Team Leadership", "Architecture"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 border-t-2 border-foreground bg-secondary">
      <div className="container mx-auto">
        <p className="font-mono text-sm uppercase tracking-widest mb-4 text-muted-foreground">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12">
          Work History
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-background">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold uppercase">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-lg">{exp.company}</span>
                      {exp.link && (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-1">{exp.description}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="font-mono text-sm">{exp.period}</p>
                    <p className="font-mono text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-muted-foreground font-mono">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-mono uppercase text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
