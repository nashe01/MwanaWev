import { BarChart3, Brain, Package, Users, TrendingUp, CheckCircle, Smartphone, Cloud } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/saas-hero.jpg";
import dashboardImage from "@/assets/saas-dashboard.jpg";
import inventoryImage from "@/assets/inventory-management.jpg";

const SaasMsme = () => {
  const { ref: marketRef, isVisible: marketVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();
  const { ref: storiesRef, isVisible: storiesVisible } = useScrollAnimation();
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Driven Insights",
      description: "Smart analytics and recommendations for better business decisions"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Inventory Management",
      description: "Automated tracking and optimization of stock levels"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Analytics",
      description: "Comprehensive reporting and performance metrics"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Accessible on any device, built for African markets"
    }
  ];

  const solutions = [
    {
      title: "Flea Market Management",
      description: "Digital solutions for over 70,000 flea markets across the region",
      metrics: "70,000+ Markets"
    },
    {
      title: "Grocery Operations",
      description: "Streamlined inventory and sales management for local grocers",
      metrics: "35,000+ Grocers"
    },
    {
      title: "Inventory Optimization",
      description: "AI-powered stock management for $85M+ in collective inventory",
      metrics: "$85M+ Inventory"
    }
  ];

  const benefits = [
    "Replace manual inventory tracking with automated systems",
    "Gain real-time insights into business performance",
    "Reduce stock-outs and overstock situations",
    "Access micro-financing opportunities through data",
    "Connect with suppliers and customers digitally",
    "Scale operations with data-driven decisions"
  ];

  const technologies = [
    { name: "Artificial Intelligence", description: "Machine learning for predictive analytics" },
    { name: "Cloud Computing", description: "Scalable infrastructure for growing businesses" },
    { name: "Mobile Technology", description: "Native apps for Android and feature phones" },
    { name: "Data Analytics", description: "Business intelligence and reporting tools" }
  ];

  return (
    <div className="theme-saas min-h-screen">
      <Header title="SaaS for MSME" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="SaaS for MSME Platform" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            SaaS for MSME
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            AI-Driven Business Management for Africa's Informal Sector
          </p>
         
        </div>
      </section>

      {/* Market Opportunity */}
      <section 
        ref={marketRef as any}
        className={`py-20 px-4 transition-all duration-800 ${
          marketVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-600 ${
            marketVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">The Opportunity</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our Software-as-a-Service (SaaS) platform provides AI-driven business management applications 
              tailored for micro, small, and medium enterprises (MSMEs) within the informal sector. We address 
              the challenge of manual inventory management for over <strong className="text-primary">70,000 flea markets</strong> and 
              <strong className="text-primary"> 35,000 grocers</strong>, which collectively manage over <strong className="text-primary">US$85 million in inventory</strong>.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className={`shadow-elegant hover:shadow-glow transition-all duration-600 group ${
                  marketVisible ? `animate-fade-up animation-delay-${300 + (index * 100)}` : 'opacity-0 transform translate-y-[30px]'
                }`}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-4">{solution.metrics}</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section 
        ref={featuresRef as any}
        className={`py-20 px-4 bg-secondary/20 transition-all duration-800 ${
          featuresVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-600 ${
            featuresVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Platform Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business management tools designed specifically for African MSMEs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className={`transition-all duration-600 ${
              featuresVisible ? 'animate-fade-right animation-delay-400' : 'opacity-0 transform translate-x-[-50px]'
            }`}>
              <img 
                src={dashboardImage} 
                alt="SaaS Dashboard Interface" 
                className="w-full h-80 object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div className={`transition-all duration-600 ${
              featuresVisible ? 'animate-fade-left animation-delay-600' : 'opacity-0 transform translate-x-[50px]'
            }`}>
              <img 
                src={inventoryImage} 
                alt="Inventory Management System" 
                className="w-full h-80 object-cover rounded-lg shadow-elegant"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`shadow-card hover:shadow-elegant transition-all duration-600 group ${
                  featuresVisible ? `animate-fade-up animation-delay-${800 + (index * 100)}` : 'opacity-0 transform translate-y-[30px]'
                }`}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 text-primary group-hover:text-accent transition-colors flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section 
        ref={impactRef as any}
        className={`py-20 px-4 transition-all duration-800 ${
          impactVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-600 ${
              impactVisible ? 'animate-fade-right animation-delay-200' : 'opacity-0 transform translate-x-[-50px]'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Business Impact</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our platform transforms how informal businesses operate by replacing manual processes with 
                intelligent automation. By digitizing inventory management and providing actionable insights, 
                we help MSMEs increase efficiency, reduce costs, and unlock growth opportunities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through data-driven decision making, businesses can optimize their operations, access 
                financing opportunities, and build sustainable growth strategies that were previously 
                impossible with manual systems.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <p className="text-muted-foreground">Reduction in Stock-outs</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <p className="text-muted-foreground">Time Savings</p>
                </div>
              </div>
            </div>
            
            <div className={`space-y-6 transition-all duration-600 ${
              impactVisible ? 'animate-fade-left animation-delay-400' : 'opacity-0 transform translate-x-[50px]'
            }`}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-4 transition-all duration-600 ${
                    impactVisible ? `animate-fade-up animation-delay-${600 + (index * 100)}` : 'opacity-0 transform translate-y-[30px]'
                  }`}
                >
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section 
        ref={techRef as any}
        className={`py-20 px-4 bg-muted/30 transition-all duration-800 ${
          techVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-600 ${
            techVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built with cutting-edge technologies optimized for African infrastructure and connectivity constraints
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className={`shadow-card hover:shadow-elegant transition-all duration-600 text-center ${
                  techVisible ? `animate-fade-up animation-delay-${400 + (index * 200)}` : 'opacity-0 transform translate-y-[40px]'
                }`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <Brain className="h-8 w-8 text-primary" />}
                    {index === 1 && <Cloud className="h-8 w-8 text-primary" />}
                    {index === 2 && <Smartphone className="h-8 w-8 text-primary" />}
                    {index === 3 && <BarChart3 className="h-8 w-8 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{tech.name}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section 
        ref={storiesRef as any}
        className={`py-20 px-4 transition-all duration-800 ${
          storiesVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-600 ${
            storiesVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses transforming their operations with our platform
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary mb-4" />,
                title: "Mbare Flea Market",
                location: "Harare, Zimbabwe",
                quote: "Since implementing the SaaS platform, we've reduced inventory waste by 35% and increased our profit margins significantly. The AI recommendations help us stock the right products at the right time.",
                metric: "+35% Profit Increase"
              },
              {
                icon: <Package className="h-10 w-10 text-primary mb-4" />,
                title: "Local Grocery Chain",
                location: "Bulawayo, Zimbabwe",
                quote: "The automated inventory tracking has transformed our operations. We now have real-time visibility into our stock levels across all locations and can make data-driven purchasing decisions.",
                metric: "-50% Stock-outs"
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary mb-4" />,
                title: "Small Retailer Network",
                location: "Nationwide",
                quote: "The platform's analytics helped us identify our best-selling products and optimize our supplier relationships. We've expanded to three new locations based on the insights we gained.",
                metric: "3x Business Growth"
              }
            ].map((story, index) => (
              <Card 
                key={index}
                className={`shadow-elegant hover:shadow-glow transition-all duration-600 ${
                  storiesVisible ? `animate-fade-up animation-delay-${400 + (index * 200)}` : 'opacity-0 transform translate-y-[40px]'
                }`}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    {story.icon}
                    <h3 className="text-xl font-semibold text-foreground">{story.title}</h3>
                    <p className="text-sm text-muted-foreground">{story.location}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">{story.quote}</p>
                  <div className="text-primary font-semibold">{story.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer title="SaaS for MSME" />
    </div>
  );
};

export default SaasMsme;