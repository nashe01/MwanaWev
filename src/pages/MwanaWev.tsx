import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/mwanawev-hero.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const MwanaWev = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Pushing boundaries to create groundbreaking solutions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Building partnerships that drive mutual success"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "Delivering superior quality in everything we do"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth",
      description: "Fostering sustainable development and expansion"
    }
  ];

  const segments = [
    {
      name: "PayWega",
      industry: "FinTech",
      description: "QR-based payment solutions for Zimbabwe's informal economy"
    },
    {
      name: "Sky Giants",
      industry: "Entertainment",
      description: "Customizable drone light shows across Africa"
    },
    {
      name: "SaaS for MSME",
      industry: "Technology",
      description: "AI-driven business management for small enterprises"
    }
  ];

  return (
    <div className="theme-mwanawev min-h-screen">
      <Header title="MwanaWev" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="MwanaWev Innovation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-secondary/70 to-accent/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent font-medium border border-accent/30">
              Innovation Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-white drop-shadow-lg">Innovate</span> & <span className="text-accent drop-shadow-lg">Simplify</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Transforming industries through innovative solutions that simplify complex challenges across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Our Companies
            </Button>
            <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Who We Are</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              MwanaWev is a dynamic holding company that serves as an innovation hub, creating and nurturing businesses 
              that address real-world challenges through technology and creative solutions. We operate across multiple 
              industries, from financial technology to drone entertainment, always with the goal of simplifying complex 
              processes and making life better for our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-secondary/40">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Our Story</h2>
              <p className="text-lg text-secondary-foreground/80 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between innovation and practical application, MwanaWev began 
                as a response to the unique challenges facing African markets. We recognized that traditional solutions 
                often failed to address the specific needs of our communities.
              </p>
              <p className="text-lg text-secondary-foreground/80 leading-relaxed">
                Today, we stand as a testament to the power of local innovation, having developed solutions that not 
                only work within our context but have the potential to transform entire industries across the continent.
              </p>
              <Button variant="secondary" className="mt-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                Learn More About Our Journey
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <p className="text-muted-foreground">Active Companies</p>
                </CardContent>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$97M+</div>
                  <p className="text-muted-foreground">Market Impact</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-primary group-hover:text-accent transition-colors">Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be Africa's leading innovation hub, creating sustainable solutions that drive economic growth 
                  and improve quality of life across the continent. We envision a future where technology serves 
                  as a bridge to opportunity for every community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-primary group-hover:text-accent transition-colors">Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To identify, develop, and scale innovative solutions that address real-world challenges, 
                  particularly within emerging markets. We are committed to fostering entrepreneurship, 
                  promoting financial inclusion, and leveraging technology for social good.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Core Values</h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              The principles that guide every decision and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group border-l-4 border-l-secondary">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 text-secondary group-hover:text-primary transition-colors flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Business Segments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse portfolio of companies addressing critical market needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">
                      {segment.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                    {segment.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{segment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-secondary/40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Team</h2>
            <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              MwanaWev is powered by a diverse team of innovators, entrepreneurs, and industry experts who share
              a common passion for creating meaningful change. Our leadership brings together decades of experience 
              across technology, finance, and business development, while our growing team represents the best 
              of African talent and global expertise.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src={teamPhoto} 
                alt="MwanaWev Leadership Team" 
                className="w-full h-80 object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-bold text-primary">Leading Innovation in Africa</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our leadership team combines expertise across fintech, technology, and business development 
                to create solutions that address real challenges facing African businesses and communities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From digital payment systems to sustainable entertainment solutions, our diverse expertise 
                enables us to build comprehensive platforms that drive meaningful impact across multiple sectors.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Card className="shadow-elegant max-w-2xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground italic">
                  "Our strength lies not just in our individual expertise, but in our collective commitment 
                  to building solutions that truly serve our communities."
                </p>
                <div className="mt-6 text-primary font-semibold">- MwanaWev Leadership Team</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Growth & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Future Growth & Vision</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As we look to the future, MwanaWev is positioned to expand our impact across Africa and beyond. 
                Our roadmap includes launching new ventures in emerging sectors, scaling our existing businesses 
                to reach more markets, and continuing to pioneer solutions that address the continent's most 
                pressing challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We remain committed to our core mission of innovation and simplification, always asking how 
                we can make complex systems more accessible and effective for the people who need them most.
              </p>
            </div>
            
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-primary">2025 Goals</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Expand to 5 new markets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Launch 2 new ventures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Reach 1M+ users across platforms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer title="MwanaWev" />
    </div>
  );
};

export default MwanaWev;