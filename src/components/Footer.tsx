import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Plane,
  Shield,
  Award,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden"
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg">Secure Booking</h3>
            </div>
            <p className="text-gray-300 text-sm">
              256-bit SSL encryption ensures your data is always protected
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg">Best Prices</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Price match guarantee - we'll beat any competitor's price
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg">24/7 Support</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Round-the-clock expert support for all your travel needs
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div
              className="flex items-center justify-center mb-6"
              style={{ width: "200px" }}
            >
              <img
                src={logo}
                alt="Brand Logo"
                className="w-full h-auto max-h-32 object-contain rounded-xl"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner for over 15 years. We make flying
              simple, affordable, and stress-free with cutting-edge technology
              and personalized service.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Flight Search
                </Link>
              </li>
              <li>
                <Link
                  to="/insurance"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/documents"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Travel Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Customer Service
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a
                  href="tel:+18773325780"
                  className="group-hover:text-white transition-colors"
                >
                  (877)-332-5780
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a
                  href="mailto:support@flydeskusa.com"
                  className="group-hover:text-white transition-colors hover:underline"
                >
                  support@flydeskusa.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors">
                  2484 Field Spring Dr, Lithonia, GA, 30058, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Fly Desk Usa. Operated by ZIMATIC SP Ltd.
              <br /> All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105"
              >
                Terms
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-xs leading-relaxed">
            <strong>Disclaimer: </strong>We are a third-party flight booking
            support service. We are not affiliated with American Airlines,
            United Airlines, JetBlue, or any other airline. All trademarks are
            the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
