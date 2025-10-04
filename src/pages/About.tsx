import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Users, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              About Globoze Farms and Veterinary Services
            </h1>
            <p className="text-xl text-white/90 animate-slide-up">
              Serving God Through Animal Care - Our Commitment to Excellence in Veterinary Medicine
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
            </div>
            
            <Card className="border-none shadow-lg mb-12">
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Globoze Farms and Veterinary Services is a trusted provider of high-quality veterinary care 
                  dedicated to enhancing animal health and well-being. Founded on the principle of serving God 
                  through animal care, we have built our reputation on compassion, expertise, and unwavering 
                  commitment to our patients.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With a team of passionate and experienced professionals, we offer a full range of veterinary 
                  services tailored to meet the diverse needs of pets, livestock, and exotic animals. Our 
                  state-of-the-art facility in Ipaja, Lagos, is equipped with modern diagnostic and treatment 
                  equipment to ensure the best possible care for your animals.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that every animal deserves compassionate, professional care, and we strive to 
                  provide that with every visit. Whether it's a routine checkup, emergency care, or specialized 
                  treatment, we're here to support you and your animals every step of the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional veterinary care that enhances animal health and well-being, 
                    while serving our community with integrity, compassion, and professional excellence. 
                    We are committed to treating every animal with the dignity and care they deserve.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading veterinary service provider in Lagos and beyond, recognized for 
                    our commitment to animal welfare, innovative care solutions, and unwavering dedication 
                    to our clients. We envision a future where every animal receives the quality care they need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Compassion</h3>
                <p className="text-muted-foreground">
                  We treat every animal with love, empathy, and the utmost respect
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in veterinary care and professional service
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty, transparency, and ethical practices in all we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our family of satisfied clients and give your animals the care they deserve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full"
            >
              <Link to="/contact">
                Book an Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full"
            >
              <Link to="/services">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
