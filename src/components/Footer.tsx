import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import logo from "@/assets/gvs_logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="GVS Logo"
              className="h-16 w-16 mb-4 bg-white rounded-lg p-2"
            />
            <h3 className="font-bold text-lg mb-2">
              Globoze Farms & Veterinary Services
            </h3>
            <p className="text-sm text-primary-foreground/90 italic mb-3">
              Serving God Through Animal Care
            </p>
            <p className="text-sm text-primary-foreground/80">
              Trusted provider of high-quality veterinary care for pets,
              livestock, and exotic animals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="tel:08142112701"
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                >
                  08142112701
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  C1 Suite 9&10, Adebisi Adebajo Lane, Rauf Aregbesola Mall,
                  Pako Bus Stop, Ipaja, Lagos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  info@globozevets.com
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/90">
                    Monday - Saturday
                  </p>
                  <p className="text-primary-foreground/80">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/90">Sunday</p>
                  <p className="text-primary-foreground/80">Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Globoze Farms and Veterinary Services.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
