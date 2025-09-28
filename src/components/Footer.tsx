interface FooterProps {
  title: string;
}

const Footer = ({ title }: FooterProps) => {
  return (
    <footer className="bg-secondary/60 backdrop-blur-sm border-t border-accent/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">{(title?.trim()?.charAt(0) || "M").toUpperCase()}</span>
              </div>
              <span className="font-bold text-2xl text-white">{title}</span>
            </div>
            <p className="text-white/80 max-w-md leading-relaxed">
              Innovating across industries to simplify and transform business landscapes in Africa.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-8 h-1 bg-accent rounded-full"></div>
              <div className="w-8 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-accent mb-6 text-lg">Companies</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="/paywega" className="hover:text-accent transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-110 transition-transform"></span>
                  PayWega
                </a>
              </li>
              <li>
                <a href="/skygiants" className="hover:text-accent transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-110 transition-transform"></span>
                  Sky Giants
                </a>
              </li>
              <li>
                <a href="/saas-msme" className="hover:text-accent transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-110 transition-transform"></span>
                  SaaS for MSME
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-accent mb-6 text-lg">Contact</h3>
            <div className="space-y-3 text-white/80">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                info@mwanawev.com
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Harare, Zimbabwe
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-center md:text-left">&copy; 2024 {title}. All rights reserved.</p>
          <div className="flex gap-2 mt-4 md:mt-0">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </div>
            <div className="w-6 h-6 rounded bg-secondary/20 flex items-center justify-center">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;