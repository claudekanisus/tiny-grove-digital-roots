import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Linkedin,
  Github
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border/20 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Tiny Grove
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Building digital roots for growing businesses. We help startups establish their online presence with creativity and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  E-commerce Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Logo & Branding
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">hello@tinygrove.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Digital Street<br />
                  Creative City, CC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Tiny Grove. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;