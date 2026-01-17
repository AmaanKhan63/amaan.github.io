import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-widest mb-4 text-muted-foreground">
              Software Developer
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none mb-6">
              Amaan
              <br />
              Khan
            </h1>
            
            <div className="max-w-2xl mb-8">
              <p className="text-lg md:text-xl leading-relaxed">
                Building AI-driven and enterprise-grade products for Fortune 500 clients. 
                Designed systems generating <span className="font-bold underline underline-offset-4">six-figure ARR</span> at a product-based SaaS startup.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="default" size="lg" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#experience">View experience</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              <span className="font-mono text-sm uppercase tracking-wide">Scroll to explore</span>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-foreground bg-muted overflow-hidden shadow-[8px_8px_0px_0px_hsl(var(--foreground))]">
                <img 
                  src={profilePhoto} 
                  alt="Amaan Khan - Software Developer"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
