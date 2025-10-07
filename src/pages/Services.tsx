import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Syringe,
  Heart,
  Microscope,
  Ambulance,
  Scissors,
  PawPrint,
  ShieldCheck,
  AlertCircle,
  Phone,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Routine Checkups",
      description:
        "Comprehensive physical examinations to monitor your animal's health and catch potential issues early. We provide thorough assessments for pets, livestock, and exotic animals.",
      features: [
        "Complete physical examination",
        "Health status assessment",
        "Preventive care recommendations",
        "Nutritional guidance",
      ],
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description:
        "Essential immunizations to protect your animals from common and serious diseases. We follow recommended vaccination schedules tailored to each animal's needs.",
      features: [
        "Core vaccinations",
        "Disease-specific immunizations",
        "Vaccination schedules",
        "Vaccine records maintenance",
      ],
    },
    {
      icon: Microscope,
      title: "Diagnostic Services",
      description:
        "Advanced diagnostic capabilities including laboratory tests, imaging, and specialized examinations to accurately identify health issues.",
      features: [
        "Laboratory testing",
        "Blood work analysis",
        "Urinalysis",
        "Fecal examinations",
      ],
    },
    {
      icon: Heart,
      title: "Surgery",
      description:
        "Expert surgical care performed in our modern, well-equipped surgical suite. From routine procedures to complex operations, we ensure the best outcomes.",
      features: [
        "Soft tissue surgery",
        "Spay and neuter procedures",
        "Tumor removals",
        "Post-operative care",
      ],
    },
    {
      icon: Ambulance,
      title: "Emergency Care",
      description:
        "24/7 emergency veterinary services for urgent medical situations. We're here when your animal needs immediate attention.",
      features: [
        "Round-the-clock availability",
        "Critical care services",
        "Emergency surgery",
        "Trauma treatment",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Specialized Treatment",
      description:
        "Targeted treatments for specific conditions and chronic diseases. Our team has expertise in managing complex health issues.",
      features: [
        "Chronic disease management",
        "Specialized therapies",
        "Pain management",
        "Rehabilitation services",
      ],
    },
    {
      icon: PawPrint,
      title: "Pet Care",
      description:
        "Comprehensive care services specifically designed for household pets including dogs, cats, birds, and small mammals.",
      features: [
        "Wellness exams",
        "Dental care",
        "Grooming advice",
        "Behavioral consultation",
      ],
    },
    {
      icon: Scissors,
      title: "Livestock Services",
      description:
        "Professional veterinary care for farm animals including cattle, goats, sheep, pigs, and poultry. We support commercial and subsistence farmers.",
      features: [
        "Herd health management",
        "Breeding consultation",
        "Disease control",
        "Farm visits available",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Our Veterinary Services
            </h1>
            <p className="text-xl text-white/90 animate-slide-up">
              Comprehensive care solutions tailored to meet the diverse needs of
              your animals
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AlertCircle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Need Emergency Care?</h2>
            <p className="text-xl mb-6 text-destructive-foreground/90">
              We're available 24/7 for emergency veterinary services
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-destructive hover:bg-white/90 hover:text-black border-white text-lg px-4 py-3 rounded-full"
              asChild
            >
              <a href="tel:08142112701" className="text-sm">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line: 08142112701
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine expertise, compassion, and modern facilities to
                deliver exceptional care
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Experienced Team
                  </h3>
                  <p className="text-muted-foreground">
                    Our veterinarians and support staff are highly trained and
                    passionate about animal care
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Modern Facilities
                  </h3>
                  <p className="text-muted-foreground">
                    State-of-the-art equipment and clean, comfortable treatment
                    areas for your animals
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Ambulance className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Comprehensive Care
                  </h3>
                  <p className="text-muted-foreground">
                    From preventive care to emergency services, we offer
                    complete veterinary solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Schedule Your Animal's Care Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us to book an appointment or learn more about our services
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full"
          >
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
