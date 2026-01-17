import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-4 border-t-2 border-foreground bg-secondary">
      <div className="container mx-auto">
        <p className="font-mono text-sm uppercase tracking-widest mb-4 text-muted-foreground">
          Education
        </p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12">
          Academic Background
        </h2>
        
        <div className="border-2 border-foreground p-8 bg-background max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="p-3 border-2 border-foreground bg-secondary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase">
                Bachelor of Technology
              </h3>
              <p className="font-mono text-lg">Computer Science and Engineering</p>
              <p className="text-muted-foreground mt-2">
                Swami Ramanand Teerth University, Maharashtra
              </p>
              <p className="font-mono text-sm text-muted-foreground mt-1">
                2019 – 2023
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-2 border-foreground p-8 bg-background max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="p-3 border-2 border-foreground bg-secondary">
              <span className="font-bold text-lg">🌐</span>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase">
                Open Source Contributor
              </h3>
              <p className="font-mono text-lg">CSPP Community</p>
              <p className="text-muted-foreground mt-2">
                Mentored external developers in WOPI integration implementation 
                following successful Adidas enterprise deployment
              </p>
              <p className="font-mono text-sm text-muted-foreground mt-1">
                2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
