import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-16 px-4 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Photo - Shows first on mobile */}
          <div className="flex-shrink-0 order-first lg:order-last flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-foreground bg-muted overflow-hidden shadow-[6px_6px_0px_0px_hsl(var(--foreground))] md:shadow-[8px_8px_0px_0px_hsl(var(--foreground))]">
                <img 
                  src={profilePhoto} 
                  alt="Amaan Khan - Software Developer"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <p className="font-mono text-sm uppercase tracking-widest mb-4 text-muted-foreground">
              Software Developer
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none mb-6">
              Amaan
              <br />
              Khan
            </h1>
            
            <div className="max-w-2xl mb-8">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Building AI-driven and enterprise-grade products for Fortune 500 clients. 
                Designed systems generating <span className="font-bold underline underline-offset-4">six-figure ARR</span> at a product-based SaaS startup.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8 lg:mb-12">
              <Button variant="default" size="lg" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#experience">View experience</a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              <span className="font-mono text-sm uppercase tracking-wide">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
