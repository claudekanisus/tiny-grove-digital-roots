import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GetStarted = () => {
  useEffect(() => {
    // Load the Bigin form script
    const script = document.createElement('script');
    script.id = 'formScript869352000000523014';
    script.src = "https://eu.bigin.online/org20107288497/forms/get-a-quote-for-your-project?script=$sYG";
    script.async = true;
    
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('formScript869352000000523014');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Get Started with{" "}
              <span className="text-primary">Tiny Grove</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Ready to transform your digital presence? Fill out the form below and let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 lg:p-12 rounded-3xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Get a Quote for Your Project
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your vision and we'll help bring it to life
                </p>
              </div>
              
              {/* Bigin Form Container */}
              <div id="bigin-form-container" className="min-h-[400px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                  Loading form...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;