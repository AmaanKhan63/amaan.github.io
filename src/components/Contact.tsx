import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amankhanak063@gmail.com",
      href: "mailto:amankhanak063@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8999650554",
      href: "tel:+918999650554",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Solapur, Maharashtra, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Amaan2210",
      href: "https://github.com/Amaan2210",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/amaan-khan-gsm",
      href: "https://linkedin.com/in/amaan-khan-gsm",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 border-t-2 border-foreground">
      <div className="container mx-auto">
        <p className="font-mono text-sm uppercase tracking-widest mb-4 text-muted-foreground">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
          Let's Connect
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-12">
          I'm always interested in discussing new opportunities, 
          challenging projects, or potential collaborations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="p-3 border-2 border-foreground bg-secondary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-lg font-medium hover:underline underline-offset-4"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            {socialLinks.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="p-3 border-2 border-foreground bg-secondary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:underline underline-offset-4"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t-2 border-foreground">
          <Button variant="default" size="lg" asChild>
            <a href="mailto:amankhanak063@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send me an email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
