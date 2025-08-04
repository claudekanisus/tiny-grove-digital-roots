import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Palette, 
  ShoppingCart, 
  Monitor, 
  Zap, 
  DollarSign, 
  CheckCircle, 
  Settings,
  Mail
} from "lucide-react";
import heroCharacter from "@/assets/hero-character.png";
import collaboration from "@/assets/collaboration.jpg";
import happyCharacter from "@/assets/happy-character.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-hero pt-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full float"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full float-delayed"></div>
        </div>
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
              Ready to Get{" "}
              <span className="text-primary">Online?</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-lg">
              We help startups launch and grow their digital presence.
            </p>
            <Button className="hero-btn text-lg">
              Explore More
            </Button>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={heroCharacter} 
                alt="Happy entrepreneur with laptop" 
                className="w-96 h-96 object-contain float drop-shadow-2xl"
              />
              <div className="absolute -top-5 -right-5 glass-card p-4 float-delayed">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-5 -left-5 glass-card p-4 float">
                <Palette className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-glass"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-heading font-bold text-foreground">
                Building Your Brand's{" "}
                <span className="text-primary">Digital Roots</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Tiny Grove, we believe every great brand starts with strong digital roots. 
                We're passionate about helping startups and growing businesses establish their 
                online presence with creativity, strategy, and technical excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines cutting-edge design with user-focused development to create 
                digital experiences that not only look amazing but drive real business results.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative glass-card p-8 rounded-3xl">
                <img 
                  src={collaboration} 
                  alt="Team collaboration" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground p-3 rounded-full">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-foreground mb-6">
              Your Digital Presence,{" "}
              <span className="text-primary">Our Priority</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="service-card float group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Web Design
                </h3>
                <p className="text-muted-foreground">
                  Beautiful, responsive websites that capture your brand's essence and engage your audience.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card float-delayed group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  E-commerce Development
                </h3>
                <p className="text-muted-foreground">
                  Powerful online stores that drive sales and provide seamless shopping experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card float group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  Logo & Branding
                </h3>
                <p className="text-muted-foreground">
                  Distinctive brand identities that make your business memorable and trustworthy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-heading font-bold text-foreground">
                Your Vision,{" "}
                <span className="text-primary">Delivered with Care</span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Fast Turnaround
                    </h3>
                    <p className="text-muted-foreground">
                      We deliver quality work quickly, so you can launch your digital presence sooner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Affordable Pricing
                    </h3>
                    <p className="text-muted-foreground">
                      Premium quality without breaking the bank. We believe good design should be accessible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Easy Process
                    </h3>
                    <p className="text-muted-foreground">
                      Simple, transparent workflow that keeps you informed every step of the way.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      Custom Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      Tailored to your unique needs, not cookie-cutter templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={happyCharacter} 
                  alt="Happy character giving thumbs up" 
                  className="w-80 h-80 object-contain float-delayed"
                />
                <div className="absolute top-10 -right-10 glass-card p-4 float">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-background rounded-full float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-background rounded-full float-delayed"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Grow? Get in Touch
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Let's start building your digital presence today. We're excited to hear about your project!
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60 flex-1"
            />
            <Button className="bg-background text-primary hover:bg-background/90 px-8 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;