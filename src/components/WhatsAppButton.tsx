import React from "react";
import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "2347060435173"; // international format without + (Nigeria example)
const DEFAULT_MESSAGE = "Hello! I need help with my pet.";

const WhatsAppButton: React.FC = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Globoze on WhatsApp"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white shadow-lg hover:scale-105 transform transition-transform duration-200"
      >
        {/* pulsating ring */}
        <span className="absolute inline-flex w-16 h-16 rounded-full bg-green-600 opacity-70 animate-ping" />

        {/* subtle second ring for depth */}
        <span className="absolute inline-flex w-10 h-10 rounded-full bg-green-600 opacity-60" />

        {/* icon */}
        <Phone className="relative h-7 w-7 text-white" />

        {/* accessible label for screen readers */}
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
