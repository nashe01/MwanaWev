import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logoImage from "@/assets/logo.png";

interface FooterProps {
  title: string;
}

const Footer = ({ title }: FooterProps) => {
  const { ref, isVisible } = useScrollAnimation();

  // Get company-specific colors
  const getCompanyColors = (companyTitle: string) => {
    switch (companyTitle) {
      case "MwanaWev":
        return {
          titleColor: "text-[hsl(var(--mwanawev-charcoal))]",
          headingColor: "text-[hsl(var(--mwanawev-olive))]",
          textColor: "text-white/80",
          linkColor: "text-white/80",
          copyrightColor: "text-white/70"
        };
      case "PayWega":
        return {
          titleColor: "text-[hsl(var(--paywega-green-dark))]",
          headingColor: "text-[hsl(var(--paywega-green))]",
          textColor: "text-[hsl(var(--mwanawev-charcoal))]/80",
          linkColor: "text-[hsl(var(--mwanawev-charcoal))]/80",
          copyrightColor: "text-[hsl(var(--mwanawev-charcoal))]/70"
        };
      case "Sky Giants":
        return {
          titleColor: "text-[hsl(var(--skygiants-black))]",
          headingColor: "text-[hsl(var(--skygiants-gold))]",
          textColor: "text-[hsl(var(--mwanawev-charcoal))]/80",
          linkColor: "text-[hsl(var(--mwanawev-charcoal))]/80",
          copyrightColor: "text-[hsl(var(--mwanawev-charcoal))]/70"
        };
      case "SaaS for MSME":
        return {
          titleColor: "text-[hsl(var(--saas-blue-dark))]",
          headingColor: "text-[hsl(var(--saas-blue))]",
          textColor: "text-[hsl(var(--mwanawev-charcoal))]/80",
          linkColor: "text-[hsl(var(--mwanawev-charcoal))]/80",
          copyrightColor: "text-[hsl(var(--mwanawev-charcoal))]/70"
        };
      default:
        return {
          titleColor: "text-white",
          headingColor: "text-accent",
          textColor: "text-white/80",
          linkColor: "text-white/80",
          copyrightColor: "text-white/70"
        };
    }
  };

  const colors = getCompanyColors(title);
  return (
    <footer 
      ref={ref as any}
      className={`bg-secondary/60 backdrop-blur-sm border-t border-accent/30 mt-20 transition-all duration-800 ${
        isVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
      }`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className={`md:col-span-2 transition-all duration-600 ${
            isVisible ? 'animate-fade-right animation-delay-200' : 'opacity-0 transform translate-x-[-50px]'
          }`}>
            <div className="flex items-center space-x-2 mb-4">
              {title === "MwanaWev" ? (
                <img 
                  src={logoImage} 
                  alt="MwanaWev Logo" 
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">{(title?.trim()?.charAt(0) || "M").toUpperCase()}</span>
                </div>
              )}
              <span className={`font-bold text-2xl ${colors.titleColor}`}>{title}</span>
            </div>
            <p className={`${colors.textColor} max-w-md leading-relaxed`}>
              Innovating across industries to simplify and transform business landscapes in Africa.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-8 h-1 bg-accent rounded-full"></div>
              <div className="w-8 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <div className={`transition-all duration-600 ${
            isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0 transform translate-y-[30px]'
          }`}>
            <h3 className={`font-semibold mb-6 text-lg ${colors.headingColor}`}>Companies</h3>
            <ul className={`space-y-3 ${colors.linkColor}`}>
              <li>
                <Link to="/paywega" className="hover:text-accent transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-110 transition-transform"></span>
                  PayWega
                </Link>
              </li>
              <li>
                <Link to="/skygiants" className="hover:text-accent transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-110 transition-transform"></span>
                  Sky Giants
                </Link>
              </li>
              <li>
                <Link to="/saas-msme" className="hover:text-accent transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-110 transition-transform"></span>
                  SaaS for MSME
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={`transition-all duration-600 ${
            isVisible ? 'animate-fade-left animation-delay-600' : 'opacity-0 transform translate-x-[30px]'
          }`}>
            <h3 className={`font-semibold mb-6 text-lg ${colors.headingColor}`}>Contact</h3>
            <div className={`space-y-3 ${colors.textColor}`}>
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
          <p className={`${colors.copyrightColor} text-center md:text-left`}>&copy; 2024 {title}. All rights reserved.</p>
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