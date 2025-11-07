import { Plane, Sparkles, Sprout, Globe, Zap, Star } from "lucide-react";
import { FadeIn, ParallaxSection } from "@/components/Animation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import skyGiantsVideo from "@/assets/sky-giants.mp4";
import droneAgriculture from "@/assets/drone-agriculture.jpg";

const SkyGiants = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Drone Light Shows",
      description: "Breathtaking, customizable aerial displays for concerts, festivals, and national events",
      category: "Entertainment",
    },
    {
      icon: Sprout,
      title: "Precision Spraying",
      description: "Efficient crop treatment with minimal waste and environmental impact",
      category: "Agriculture",
    },
    {
      icon: Globe,
      title: "Crop Mapping",
      description: "Detailed aerial analytics for informed farming decisions",
      category: "Agriculture",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header title="Sky Giants" />
      
      {/* Hero Section - Night Sky Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-24 text-white">
        <ParallaxSection offset={40}>
          <div className="container relative z-10">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <Plane className="h-8 w-8" />
                </div>
                <h1 className="font-arlo text-5xl font-bold md:text-7xl">Sky Giants</h1>
              </div>
              <p className="mb-4 max-w-3xl text-2xl md:text-3xl">
                Lighting the Sky, Empowering the Land
              </p>
              <p className="mb-8 max-w-2xl text-lg opacity-80">
                Africa's first integrated drone services company
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-white/90">
                  Entertainment Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Agriculture Solutions
                </Button>
              </div>
            </FadeIn>
          </div>
        </ParallaxSection>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent" />
          <div className="absolute inset-0 animate-pulse opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-24">
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 font-arlo text-4xl font-bold md:text-5xl">
                Pioneering Innovation in Entertainment & Agriculture
              </h2>
              <p className="text-xl text-muted-foreground">
                Sky Giants is Africa's first integrated drone services company, pioneering innovation in both 
                entertainment and agriculture through cutting-edge aerial technology.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Entertainment Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                  <Sparkles className="h-4 w-4" />
                  Entertainment
                </div>
                <h2 className="mb-6 font-arlo text-4xl font-bold md:text-5xl">
                  Spectacular Drone Light Shows
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  We deliver breathtaking, customisable drone light shows — a sustainable, visually captivating 
                  alternative to fireworks for concerts, festivals, and national events.
                </p>
                <ul className="space-y-3">
                  {[
                    "Eco-friendly alternative to fireworks",
                    "Fully customizable formations and colors",
                    "Synchronized to music and events",
                    "Safe for all weather conditions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Star className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <video
                  src={skyGiantsVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Agriculture Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn delay={0.2}>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={droneAgriculture} 
                  alt="Agricultural drone performing precision spraying over crops" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  <Sprout className="h-4 w-4" />
                  Agriculture
                </div>
                <h2 className="mb-6 font-arlo text-4xl font-bold md:text-5xl">
                  Precision Agriculture Solutions
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  We use drones for precision spraying, crop mapping, and aerial analytics — empowering farmers 
                  to increase productivity and sustainability.
                </p>
                <ul className="space-y-3">
                  {[
                    "Efficient precision spraying with minimal waste",
                    "Detailed crop health monitoring",
                    "Real-time aerial analytics",
                    "Increased yield and sustainability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-24">
        <div className="container">
          <FadeIn>
            <h2 className="mb-12 text-center font-arlo text-4xl font-bold md:text-5xl">Our Services</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <Card className="h-full transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                      {service.category}
                    </div>
                    <service.icon className="mb-4 h-12 w-12 text-indigo-600" />
                    <h3 className="mb-2 font-arlo text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 py-24 text-white">
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <Globe className="mx-auto mb-6 h-16 w-16" />
              <h2 className="mb-6 font-arlo text-4xl font-bold md:text-5xl">
                Driving Africa's Technological Evolution
              </h2>
              <p className="text-xl opacity-90">
                Our dual mission is to light up the skies while empowering the ground, driving Africa's 
                technological evolution through drone-based innovation. We're not just providing services — 
                we're shaping the future of entertainment and agriculture.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer title="Sky Giants" />
    </div>
  );
};

export default SkyGiants;