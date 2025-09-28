import { Zap, Star, Globe, Sparkles, Play, Calendar, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/skygiants-hero.jpg";
import droneShowImage from "@/assets/drone-show.jpg";

const SkyGiants = () => {
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();
  const { ref: sustainabilityRef, isVisible: sustainabilityVisible } = useScrollAnimation();
  const { ref: pioneerRef, isVisible: pioneerVisible } = useScrollAnimation();
  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Customizable Shows",
      description: "Tailored drone performances for any event or celebration"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Eco-Friendly",
      description: "Sustainable alternative to traditional fireworks with zero emissions"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Spectacular Displays",
      description: "Breathtaking aerial choreography that captivates audiences"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "African Pioneer",
      description: "First drone entertainment company of its kind in Africa"
    }
  ];

  const services = [
    {
      title: "Corporate Events",
      description: "Product launches, brand activations, and corporate celebrations",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Weddings & Celebrations",
      description: "Romantic and memorable moments for special occasions",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Public Festivals",
      description: "Large-scale entertainment for cultural and music festivals",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Tourism Attractions",
      description: "Regular shows for hotels, resorts, and tourist destinations",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const advantages = [
    "No fire hazards or safety concerns",
    "Weather-independent performances",
    "Programmable and repeatable shows",
    "Music synchronization capabilities",
    "Minimal environmental impact",
    "Suitable for noise-sensitive areas"
  ];

  return (
    <div className="theme-skygiants min-h-screen">
      <Header title="Sky Giants" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sky Giants Drone Show" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Sky Giants
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Africa's Premier Drone Entertainment Experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button variant="outline-glow" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
              Book Your Show
            </Button>
          </div>
        </div>
      </section>

      {/* Innovation Story */}
      <section 
        ref={featuresRef as any}
        className={`py-20 px-4 transition-all duration-800 ${
          featuresVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-600 ${
            featuresVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Pioneering Entertainment</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Sky Giants specializes in customizable drone light shows, offering an innovative and sustainable 
              alternative to traditional fireworks. As the <strong className="text-primary">first company of its kind in Africa</strong>, 
              we're focused on delivering unique aerial spectacles that combine cutting-edge technology with 
              breathtaking artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`shadow-card hover:shadow-elegant transition-all duration-600 group ${
                  featuresVisible ? `animate-fade-up animation-delay-${300 + (index * 100)}` : 'opacity-0 transform translate-y-[30px]'
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

      {/* Services */}
      <section 
        ref={servicesRef as any}
        className={`py-20 px-4 bg-secondary/20 transition-all duration-800 ${
          servicesVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-600 ${
            servicesVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming events across Africa with spectacular drone light performances
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`shadow-elegant hover:shadow-glow transition-all duration-600 group ${
                  servicesVisible ? `animate-fade-up animation-delay-${400 + (index * 200)}` : 'opacity-0 transform translate-y-[40px]'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section 
        ref={techRef as any}
        className={`py-20 px-4 transition-all duration-800 ${
          techVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-600 ${
              techVisible ? 'animate-fade-right animation-delay-200' : 'opacity-0 transform translate-x-[-50px]'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Technology & Innovation</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our drone fleet utilizes state-of-the-art LED technology and precision flight control systems 
                to create stunning visual displays. Each drone is equipped with customizable lighting that can 
                produce millions of colors and patterns, synchronized to music and choreographed for maximum impact.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Advanced GPS positioning, real-time communication systems, and automated safety protocols ensure 
                every show is both spectacular and secure, meeting international aviation standards while 
                delivering unforgettable experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">Drones in Fleet</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <p className="text-muted-foreground">Shows Delivered</p>
                </div>
              </div>
            </div>
            
            <div className={`space-y-8 transition-all duration-600 ${
              techVisible ? 'animate-fade-left animation-delay-400' : 'opacity-0 transform translate-x-[50px]'
            }`}>
              <img 
                src={droneShowImage} 
                alt="Drone Light Show" 
                className="w-full h-64 object-cover rounded-lg shadow-elegant"
              />
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Why Choose Drones?</h3>
                  <div className="space-y-4">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section 
        ref={sustainabilityRef as any}
        className={`py-20 px-4 bg-muted/30 transition-all duration-800 ${
          sustainabilityVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-600 ${
            sustainabilityVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Sustainable Entertainment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In an era of environmental consciousness, Sky Giants offers a revolutionary approach to celebration 
              and entertainment that doesn't compromise our planet's future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Zero Emissions",
                description: "No smoke, chemicals, or pollutants released into the atmosphere"
              },
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "Reusable Technology",
                description: "Our drones can be used thousands of times, minimizing waste"
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Wildlife Friendly",
                description: "Silent operation that doesn't disturb local wildlife"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className={`shadow-card hover:shadow-elegant transition-all duration-600 text-center ${
                  sustainabilityVisible ? `animate-fade-up animation-delay-${400 + (index * 200)}` : 'opacity-0 transform translate-y-[40px]'
                }`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* African Leadership */}
      <section 
        ref={pioneerRef as any}
        className={`py-20 px-4 transition-all duration-800 ${
          pioneerVisible ? 'animate-fade-up' : 'opacity-0 transform translate-y-[50px]'
        }`}
      >
        <div className="container mx-auto text-center">
          <Card className={`shadow-elegant max-w-4xl mx-auto transition-all duration-600 ${
            pioneerVisible ? 'animate-scale-in animation-delay-400' : 'opacity-0 transform scale-90'
          }`}>
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Leading Africa's Entertainment Future</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                As Africa's first drone entertainment company, Sky Giants is proudly setting new standards for 
                celebration and spectacle across the continent. We're not just adapting global trends – we're 
                creating uniquely African experiences that celebrate our culture, stories, and aspirations 
                through the language of light and motion.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto italic">
                "Every show we create tells a story, and every story we tell helps shape the future of 
                entertainment in Africa."
              </p>
              
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer title="Sky Giants" />
    </div>
  );
};

export default SkyGiants;