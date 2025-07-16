import { Phone, MessageCircle } from "lucide-react";

const ExpertContactButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="tel:18773325780"
      className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 font-semibold inline-flex items-center gap-2"
    >
      <Phone className="w-5 h-5" />
      Call 1877-332-5780
    </a>
    <a href="tel:18773325780">
    <button
      className="group bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold inline-flex items-center gap-2 shadow-lg"
    >
      <MessageCircle className="w-5 h-5" />
      Chat with Expert
    </button>
    </a>
  </div>
);

export default ExpertContactButtons; 