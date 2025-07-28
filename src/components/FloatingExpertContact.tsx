import { useState } from "react";
import { Phone, X } from "lucide-react";

const FloatingExpertContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold">Call Experts Get 20% Off</p>
            <p className="text-xs opacity-90">Limited time offer</p>
          </div>
          <a
            href="tel:+18773325780"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div className="hidden md:flex fixed z-50 bottom-6 right-6 flex-col items-end gap-2">
        {open && (
          <div className="mb-2 animate-fade-in-up">
            <a
              href="tel:+18773325780"
              className="group bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-semibold inline-flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call (877)-332-5780
            </a>
          </div>
        )}
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl p-4 flex items-center justify-center hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close contact options" : "Open contact options"}
        >
          {open ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
};

export default FloatingExpertContact;
