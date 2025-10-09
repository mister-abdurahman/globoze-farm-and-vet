import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  Shield,
  Heart,
  Stethoscope,
  Syringe,
  Ambulance,
  Star,
  Phone,
  ArrowRight,
  UserRoundPen,
} from "lucide-react";
import Gallery from "@/components/Gallery";
import animalCare from "../assets/animal-care.jpg";
import vetTeam from "../assets/vet team.jpg";
import animalEmergency from "../assets/animal-emergency.webp";

const Home = () => {
  const services = [
    {
      icon: UserRoundPen,
      title: "Consultation",
      description:
        "Personalized veterinary consultations to assess health and plan care",
    },
    {
      icon: Stethoscope,
      title: "Routine Checkups",
      description: "Comprehensive health examinations for your animals",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Essential immunizations to keep your pets protected",
    },
    {
      icon: Heart,
      title: "Surgery",
      description: "Expert surgical care with modern facilities",
    },
    // {
    //   icon: Ambulance,
    //   title: "Emergency Care",
    //   description: "24/7 emergency services when you need them most",
    // },
  ];

  const testimonials = [
    {
      name: "Mrs. Adebayo",
      rating: 5,
      text: "The team at Globoze treated my dog with such care and professionalism. They truly love what they do!",
    },
    {
      name: "Mr. Okonkwo",
      rating: 5,
      text: "Best veterinary service in Lagos! They saved my cat's life during an emergency. Forever grateful!",
    },
    {
      name: "Dr. Chioma",
      rating: 5,
      text: "I bring all my livestock here. Professional, affordable, and genuinely caring. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/vet-hero-bg.jpg')]  bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-red-700/80 to-red-700/70" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Expert Animal Care You Can Trust
            </h1>

            <p
              className="text-xl sm:text-2xl mb-4 text-white/95 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Serving God Through Animal Care
            </p>

            <p
              className="text-lg mb-10 text-white/90 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              High-quality veterinary services for pets, livestock, and exotic
              animals. From routine checkups to emergency care, we're here for
              your animals.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6 rounded-full"
              >
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full"
                asChild
              >
                <a href="tel:08142112701">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 08142112701
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Services Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-900">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive veterinary care tailored to your animal's needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-900">
                Why Choose Globoze?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate professionals dedicated to animal health and
                well-being
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={vetTeam}
                  alt="Experienced Team"
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Experienced Team
                  </h3>
                  <p className="text-muted-foreground">
                    Skilled veterinary professionals with years of experience in
                    animal care
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={animalCare}
                  alt="Compassionate Care"
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Compassionate Care
                  </h3>
                  <p className="text-muted-foreground">
                    We treat every animal with love, respect, and the care they
                    deserve
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={animalEmergency}
                  alt="Emergency Ready"
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Emergency Ready
                  </h3>
                  <p className="text-muted-foreground">
                    24/7 emergency services available for urgent animal care
                    needs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-900">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied pet owners and farmers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg bg-card">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Your Pet's Health Is Our Priority
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to schedule an appointment or learn more about our
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full"
            >
              <a href="tel:08142112701">
                <Phone className="mr-2 h-5 w-5" />
                08142112701
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
