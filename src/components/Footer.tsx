const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t-2 border-foreground bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm">
            © {new Date().getFullYear()} Amaan Khan. All rights reserved.
          </p>
          <p className="font-mono text-sm text-primary-foreground/70">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
