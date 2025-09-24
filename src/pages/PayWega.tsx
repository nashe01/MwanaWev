import { Shield, Smartphone, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/paywega-hero.jpg";

const PayWega = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "QR-Based Payments",
      description: "Simple, secure payments through QR code scanning technology"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enhanced Security",
      description: "Reduced theft and fraud risks compared to cash transactions"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Growth",
      description: "Digital payment tracking and analytics for informal businesses"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Financial Inclusion",
      description: "Bringing unbanked populations into the digital economy"
    }
  ];

  const stats = [
    { value: "$12M", label: "Daily Transaction Volume" },
    { value: "70,000+", label: "Informal Businesses" },
    { value: "2M+", label: "Potential Users" },
    { value: "95%", label: "Cash Dependency Rate" }
  ];

  const benefits = [
    "Eliminate cash handling risks and theft",
    "Real-time transaction tracking and reporting",
    "Mobile-first design for feature phones and smartphones",
    "Integration with mobile money platforms",
    "Merchant dashboard for business insights",
    "Multi-language support for local communities"
  ];

  return (
    <div className="theme-paywega min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="PayWega Digital Payments" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            PayWega
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Revolutionizing Zimbabwe's Informal Economy Through Digital Payments
          </p>
          <Button variant="hero" className="animate-float">
            Transform Your Business
          </Button>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">The Challenge</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Zimbabwe's informal economy handles an estimated <strong className="text-primary">US$12 million in daily transactions</strong>, 
              yet remains heavily dependent on cash. This cash reliance creates significant challenges including theft, 
              inefficiency, limited financial inclusion, and lack of transaction records for business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Our Solution</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                PayWega provides a comprehensive QR-based payment system specifically designed for Zimbabwe's 
                informal economy. Our platform bridges the gap between traditional cash transactions and 
                modern digital payment methods, making financial technology accessible to everyone.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                By leveraging existing mobile infrastructure and creating user-friendly interfaces, 
                we're transforming how informal businesses operate while promoting financial inclusion 
                across communities.
              </p>
              <Button variant="outline-glow">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 text-primary group-hover:text-accent transition-colors flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Key Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming informal businesses through secure, efficient digital payment solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 animate-slide-up" 
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Market Impact</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Financial Inclusion</h4>
                    <p className="text-muted-foreground">
                      Bringing millions of unbanked Zimbabweans into the digital financial ecosystem
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Economic Growth</h4>
                    <p className="text-muted-foreground">
                      Enabling data-driven business decisions and access to credit for informal traders
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Safety & Security</h4>
                    <p className="text-muted-foreground">
                      Reducing cash-related crimes and providing secure transaction records
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Built for Zimbabwe</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Our technology is specifically designed to work within Zimbabwe's unique infrastructure constraints, 
            ensuring reliable service even in challenging connectivity environments.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Mobile-First Design</h3>
                <p className="text-muted-foreground">
                  Works seamlessly on both smartphones and feature phones, ensuring accessibility for all users
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Offline Capability</h3>
                <p className="text-muted-foreground">
                  Limited offline functionality ensures transactions can continue even with poor connectivity
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">Local Integration</h3>
                <p className="text-muted-foreground">
                  Seamless integration with existing mobile money platforms and local banking systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="shadow-elegant max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready to Go Digital?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the digital payment revolution and transform your business operations with PayWega's 
                secure, efficient QR-based payment system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero">Get Started Today</Button>
                <Button variant="outline-glow">Schedule Demo</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayWega;