import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/Amaan2210", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/amaan-khan-gsm", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:amankhanak063@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-mono text-lg font-bold uppercase tracking-wider">
            AK
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm uppercase tracking-wide hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="icon"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="rounded-full">
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t-2 border-foreground pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-sm uppercase tracking-wide hover:underline underline-offset-4 rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
