import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import Header from "@/components/Header";
import FlightCard from "@/components/FlightCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Plane,
  Clock,
  DollarSign,
  Zap,
  Phone,
  Users,
  Calendar,
  Search,
  Filter,
  Star,
  TrendingUp,
  Zap as Lightning,
  Loader2,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import SearchableAirportSelect from "@/components/SearchableAirportSelect";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const FlightResults = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);
  const [searchParams] = useSearchParams();
  const [from, setFrom] = useState(searchParams.get("from") || "");
  const [to, setTo] = useState(searchParams.get("to") || "");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    searchParams.get("departure")
      ? new Date(searchParams.get("departure")!)
      : undefined
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    searchParams.get("return")
      ? new Date(searchParams.get("return")!)
      : undefined
  );
  const [passengers, setPassengers] = useState(
    searchParams.get("passengers") || "1"
  );
  const [activeTab, setActiveTab] = useState("recommended");

  // Mock flights data - in real app this would come from API
  const flights = [
    {
      id: 1,
      airline: "SkyWings",
      logo: "✈️",
      departure: "08:30",
      arrival: "11:45",
      duration: "5h 15m",
      stops: "Non-stop",
      price: 289,
      type: "Economy",
      badge: "Best Choice",
      departureTime: "08:30",
      arrivalTime: "11:45",
    },
    {
      id: 2,
      airline: "AeroLink",
      logo: "🛫",
      departure: "14:20",
      arrival: "17:50",
      duration: "5h 30m",
      stops: "Non-stop",
      price: 245,
      type: "Economy",
      badge: "Cheapest",
      departureTime: "14:20",
      arrivalTime: "17:50",
    },
    {
      id: 3,
      airline: "FastJet",
      logo: "✈️",
      departure: "06:15",
      arrival: "09:25",
      duration: "5h 10m",
      stops: "Non-stop",
      price: 312,
      type: "Economy",
      badge: "Shortest",
      departureTime: "06:15",
      arrivalTime: "09:25",
    },
  ];

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [departureTimeRange, setDepartureTimeRange] = useState<string[]>([]);
  const [arrivalTimeRange, setArrivalTimeRange] = useState<string[]>([]);

  const handleSearch = () => {
    // Handle search logic here
  };

  const NoFlightsMessage = () => (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Plane className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Live prices unavailable.
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          Call now to book manually & save up to 30%!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="tel:+18773325780">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (877)-332-5780
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-2 border-gray-300 hover:border-blue-500 font-semibold py-3 rounded-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Modify Search
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        {/* <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 rounded-2xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Button>
          </Link>
        </div> */}

        {/* Selected Route Display */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/20 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">
                  {from || "Departure"}
                </span>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-blue-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white rotate-45" />
                </div>
                <span className="font-semibold text-gray-900">
                  {to || "Destination"}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {departureDate
                    ? format(departureDate, "MMM dd")
                    : "Select date"}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>
                  {passengers} passenger{passengers !== "1" ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Results */}
        <div className="space-y-6 mb-8">
          {isLoading ? (
            <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-50 flex items-center justify-center">
              {/* World Map Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="map-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#a21caf" />
                    </linearGradient>
                  </defs>
                  {/* Simplified world map paths */}
                  <path
                    d="M150,200 Q200,180 250,200 T350,200 Q400,220 450,200 T550,200 Q600,180 650,200 T750,200"
                    fill="none"
                    stroke="url(#map-gradient)"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <path
                    d="M200,150 Q250,130 300,150 T400,150 Q450,170 500,150 T600,150 Q650,130 700,150 T800,150"
                    fill="none"
                    stroke="url(#map-gradient)"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <path
                    d="M100,250 Q150,230 200,250 T300,250 Q350,270 400,250 T500,250 Q550,230 600,250 T700,250"
                    fill="none"
                    stroke="url(#map-gradient)"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <path
                    d="M50,300 Q100,280 150,300 T250,300 Q300,320 350,300 T450,300 Q500,280 550,300 T650,300"
                    fill="none"
                    stroke="url(#map-gradient)"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Multiple Traveling Planes */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    animation: `plane-travel-${i} 4s linear infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  <Plane
                    className="w-6 h-6 text-blue-500 drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4))",
                    }}
                  />
                </div>
              ))}

              {/* Big Final Plane */}
              <div
                className="absolute"
                style={{
                  animation: "big-plane-finale 6s ease-in-out forwards",
                  animationDelay: "3s",
                }}
              >
                <Plane
                  className="w-16 h-16 text-blue-600 drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 4px 16px rgba(59, 130, 246, 0.6))",
                  }}
                />
              </div>

              {/* Loading Text */}
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight animate-pulse">
                  Searching flights...
                </h3>
                <p
                  className="text-gray-600 text-lg animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  Exploring routes around the world
                </p>
              </div>

              <style>{`
                  @keyframes plane-travel-0 {
                    0% { left: 10%; top: 30%; transform: rotate(15deg) scale(0.8); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 90%; top: 25%; transform: rotate(-10deg) scale(0.8); opacity: 0; }
                  }
                  
                  @keyframes plane-travel-1 {
                    0% { left: 15%; top: 45%; transform: rotate(25deg) scale(0.7); opacity: 0; }
                    15% { opacity: 1; }
                    85% { opacity: 1; }
                    100% { left: 85%; top: 40%; transform: rotate(-15deg) scale(0.7); opacity: 0; }
                  }
                  
                  @keyframes plane-travel-2 {
                    0% { left: 20%; top: 60%; transform: rotate(-20deg) scale(0.9); opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { left: 80%; top: 55%; transform: rotate(20deg) scale(0.9); opacity: 0; }
                  }
                  
                  @keyframes plane-travel-3 {
                    0% { left: 25%; top: 35%; transform: rotate(10deg) scale(0.6); opacity: 0; }
                    25% { opacity: 1; }
                    75% { opacity: 1; }
                    100% { left: 75%; top: 30%; transform: rotate(-25deg) scale(0.6); opacity: 0; }
                  }
                  
                  @keyframes plane-travel-4 {
                    0% { left: 30%; top: 50%; transform: rotate(-30deg) scale(0.8); opacity: 0; }
                    30% { opacity: 1; }
                    70% { opacity: 1; }
                    100% { left: 70%; top: 45%; transform: rotate(30deg) scale(0.8); opacity: 0; }
                  }
                  
                  @keyframes plane-travel-5 {
                    0% { left: 35%; top: 25%; transform: rotate(5deg) scale(0.7); opacity: 0; }
                    35% { opacity: 1; }
                    65% { opacity: 1; }
                    100% { left: 65%; top: 20%; transform: rotate(-5deg) scale(0.7); opacity: 0; }
                  }
                  
                  @keyframes big-plane-finale {
                    0% { 
                      left: -20%; 
                      top: 50%; 
                      transform: rotate(45deg) scale(0.5); 
                      opacity: 0; 
                    }
                    20% { 
                      left: 10%; 
                      top: 45%; 
                      transform: rotate(30deg) scale(0.8); 
                      opacity: 1; 
                    }
                    40% { 
                      left: 30%; 
                      top: 40%; 
                      transform: rotate(15deg) scale(1.2); 
                      opacity: 1; 
                    }
                    60% { 
                      left: 50%; 
                      top: 35%; 
                      transform: rotate(0deg) scale(1.5); 
                      opacity: 1; 
                    }
                    80% { 
                      left: 70%; 
                      top: 30%; 
                      transform: rotate(-15deg) scale(1.8); 
                      opacity: 1; 
                    }
                    100% { 
                      left: 120%; 
                      top: 25%; 
                      transform: rotate(-30deg) scale(2.2); 
                      opacity: 0; 
                    }
                  }
                `}</style>
            </div>
          ) : (
            <NoFlightsMessage />
          )}
        </div>

        {/* Filters and Results */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Filters</h3>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Price Range
                </h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Departure Time */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Departure Time
                </h4>
                <div className="space-y-2">
                  {[
                    "Early (6AM-12PM)",
                    "Afternoon (12PM-6PM)",
                    "Evening (6PM-12AM)",
                  ].map((time) => (
                    <label
                      key={time}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={departureTimeRange.includes(time)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDepartureTimeRange([
                              ...departureTimeRange,
                              time,
                            ]);
                          } else {
                            setDepartureTimeRange(
                              departureTimeRange.filter((t) => t !== time)
                            );
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Arrival Time */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Arrival Time
                </h4>
                <div className="space-y-2">
                  {[
                    "Early (6AM-12PM)",
                    "Afternoon (12PM-6PM)",
                    "Evening (6PM-12AM)",
                  ].map((time) => (
                    <label
                      key={time}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={arrivalTimeRange.includes(time)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setArrivalTimeRange([...arrivalTimeRange, time]);
                          } else {
                            setArrivalTimeRange(
                              arrivalTimeRange.filter((t) => t !== time)
                            );
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Stops */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Stops</h4>
                <div className="space-y-2">
                  {["Non-stop", "1 stop", "2+ stops"].map((stop) => (
                    <label
                      key={stop}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedStops.includes(stop)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedStops([...selectedStops, stop]);
                          } else {
                            setSelectedStops(
                              selectedStops.filter((s) => s !== stop)
                            );
                          }
                        }}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{stop}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Tabs */}
            {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/20 shadow-xl">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-2xl">
                  <TabsTrigger
                    value="recommended"
                    className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
                  >
                    <Star className="w-4 h-4" />
                    Recommended
                  </TabsTrigger>
                  <TabsTrigger
                    value="cheapest"
                    className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
                  >
                    <DollarSign className="w-4 h-4" />
                    Cheapest
                  </TabsTrigger>
                  <TabsTrigger
                    value="fastest"
                    className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
                  >
                    <Lightning className="w-4 h-4" />
                    Fastest
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div> */}

            {/* Search Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Flight Search
                </h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <div className="lg:col-span-1">
                  <SearchableAirportSelect
                    value={from}
                    onValueChange={setFrom}
                    placeholder="Departure city"
                    label="From"
                  />
                </div>

                <div className="lg:col-span-1">
                  <SearchableAirportSelect
                    value={to}
                    onValueChange={setTo}
                    placeholder="Destination city"
                    label="To"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Departure
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-auto min-h-[40px] py-2 bg-white/50 border-gray-300 hover:bg-white/70",
                          !departureDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {departureDate
                          ? format(departureDate, "MMM dd")
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white border border-gray-200 shadow-lg">
                      <CalendarComponent
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Return
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-auto min-h-[40px] py-2 bg-white/50 border-gray-300 hover:bg-white/70",
                          !returnDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {returnDate
                          ? format(returnDate, "MMM dd")
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white border border-gray-200 shadow-lg">
                      <CalendarComponent
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        disabled={(date) =>
                          date < (departureDate || new Date())
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Passengers
                  </label>
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger className="h-auto min-h-[40px] py-2 bg-white/50 border-gray-300 hover:bg-white/70">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Adult</SelectItem>
                      <SelectItem value="2">2 Adults</SelectItem>
                      <SelectItem value="3">3 Adults</SelectItem>
                      <SelectItem value="4">4 Adults</SelectItem>
                      <SelectItem value="5">5+ Adults</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Flights
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FlightResults;
