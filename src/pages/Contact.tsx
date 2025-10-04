import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 animate-slide-up">
              We're here to help. Reach out to us for appointments, inquiries,
              or emergencies
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Get In Touch
                </h2>

                <div className="space-y-6 mb-8">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-foreground">
                            Phone
                          </h3>
                          <a
                            href="tel:07060435173"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            07060435173
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Available for calls and WhatsApp
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-foreground">
                            Address
                          </h3>
                          <p className="text-muted-foreground">
                            C1 Suite 9&10, Adebisi Adebajo Lane
                            <br />
                            Rauf Aregbesola Mall, Pako Bus Stop
                            <br />
                            Ipaja, Lagos, Nigeria
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-foreground">
                            Email
                          </h3>
                          <p className="text-muted-foreground">
                            info@globozevets.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-foreground">
                            Opening Hours
                          </h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                            <p>Sunday: Emergency Only</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Emergency Notice */}
                <Card className="border-none shadow-lg bg-destructive text-destructive-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Emergency?</h3>
                    <p className="mb-4">
                      If your animal needs immediate care, call us right away.
                      We're available 24/7 for emergencies.
                    </p>
                    <Button
                      variant="outline"
                      className="bg-white text-destructive hover:bg-white/90 border-white"
                      asChild
                    >
                      <a href="tel:07060435173">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Emergency Line
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-none shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="animalType">Type of Animal</Label>
                        <Input
                          id="animalType"
                          type="text"
                          placeholder="e.g., Dog, Cat, Cow, Goat"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your animal's needs or your inquiry"
                          rows={5}
                          required
                          className="mt-2"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary-dark"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  We typically respond within 24 hours during business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Visit Our Clinic
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in Ipaja, Lagos - Easy to find and accessible
              </p>
            </div>
            <div className="w-full rounded overflow-hidden shadow-lg">
              <iframe
                title="Globoze Clinic Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0000000000005!2d3.321111!3d6.567777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNkMgxJrDvyBMb2NhdGlvbiwgTG9nYW9z!5e0!3m2!1sen!2sng!4v1696425600000"
                className="w-full h-96 border-0"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
