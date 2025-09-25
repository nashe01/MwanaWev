interface FooterProps {
  title: string;
}

const Footer = ({ title }: FooterProps) => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">{(title?.trim()?.charAt(0) || "M").toUpperCase()}</span>
              </div>
              <span className="font-bold text-xl text-foreground">{title}</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Innovating across industries to simplify and transform business landscapes in Africa.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Companies</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/paywega" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-primary transition-colors">
                  PayWega
                </a>
              </li>
              <li>
                <a href="/skygiants" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-primary transition-colors">
                  Sky Giants
                </a>
              </li>
              <li>
                <a href="/saas-msme" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-primary transition-colors">
                  SaaS for MSME
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>info@mwanawev.com</p>
              <p>Harare, Zimbabwe</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 {title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;