import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Destinations from "@/components/Destinations";
import TravelTips from "@/components/TravelTips";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollTo === "destinations") {
      const section = document.getElementById("destinations");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      // Remove scrollTo state so it doesn't scroll again on future renders
      navigate("/", { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <Destinations />
        <TravelTips />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
