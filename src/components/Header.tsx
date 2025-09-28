import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const logoInitial = useMemo(() => (title?.trim()?.charAt(0) || "M").toUpperCase(), [title]);

  const companies = [
    { name: "MwanaWev", path: "/mwanawev", description: "Innovation Hub" },
    { name: "PayWega", path: "/paywega", description: "FinTech Solutions" },
    { name: "Sky Giants", path: "/skygiants", description: "Drone Entertainment" },
    { name: "SaaS for MSME", path: "/saas-msme", description: "Business Management" },
  ];

  return (
    <header 
      ref={ref as any}
      className={`w-full bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card transition-all duration-800 ${
        isVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[-20px]'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-2 transition-all duration-600 ${
            isVisible ? 'animate-fade-right animation-delay-200' : 'opacity-0 transform translate-x-[-30px]'
          }`}>
            {title === "MwanaWev" ? (
              <img 
                src={logoImage} 
                alt="MwanaWev Logo" 
                className="w-10 h-10 object-contain"
              />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">{logoInitial}</span>
              </div>
            )}
            <span className="font-bold text-xl text-foreground">{title}</span>
          </div>

          <nav className={`flex items-center space-x-6 transition-all duration-600 ${
            isVisible ? 'animate-fade-left animation-delay-400' : 'opacity-0 transform translate-x-[30px]'
          }`}>
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <span className="font-bold">Business Segments</span>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180" : ""
                    }`} 
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-64 bg-background/95 backdrop-blur-md border border-border shadow-elegant rounded-xl"
                align="end"
              >
                {companies.map((company) => (
                  <DropdownMenuItem
                    key={company.name}
                    className="p-0 focus:bg-secondary/50 rounded-lg mx-2 my-1"
                  >
                    <a
                      href={company.path}
                      className="w-full px-4 py-3 flex flex-col hover:no-underline"
                    >
                      <span className="font-medium text-foreground">{company.name}</span>
                      <span className="text-sm text-muted-foreground">{company.description}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;