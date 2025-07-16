import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Shield, Info, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Disclaimer
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Important Legal Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              This disclaimer contains important information about our services, limitations, 
              and your rights. Please read it carefully before using our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using Fly Desk Usa's services, you acknowledge that you have read, understood, 
              and agree to the terms outlined in this disclaimer.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Airline Affiliation Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle>1. Airline Affiliation Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
                <p className="text-red-800 font-semibold mb-2">Important Notice:</p>
                <p className="text-red-700">
                  Fly Desk Usa is a third-party travel booking support service. We are NOT 
                  affiliated with, endorsed by, or officially connected to any airline, 
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside text-red-700 mt-2 space-y-1">
                  <li>American Airlines</li>
                  <li>United Airlines</li>
                  <li>Delta Air Lines</li>
                  <li>Southwest Airlines</li>
                  <li>JetBlue Airways</li>
                  <li>Spirit Airlines</li>
                  <li>Frontier Airlines</li>
                  <li>Alaska Airlines</li>
                  <li>Hawaiian Airlines</li>
                  <li>Any other airline or travel service provider</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All airline names, logos, and trademarks are the property of their respective 
                owners. We act as an independent intermediary to help you find and book flights 
                through official airline channels and authorized booking systems.
              </p>
            </CardContent>
          </Card>

          {/* Service Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle>2. Service Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Our Role</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fly Desk Usa provides flight search, booking assistance, and customer support 
                    services. We do not operate flights, own aircraft, or control airline operations. 
                    We facilitate bookings through official airline systems and authorized channels.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Information Accuracy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    While we strive to provide accurate and up-to-date information, flight schedules, 
                    prices, and availability are subject to change without notice. We rely on 
                    information provided by airlines and booking systems, and we cannot guarantee 
                    the accuracy of all information displayed.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Third-Party Services</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our website may contain links to third-party websites and services. We are 
                    not responsible for the content, privacy policies, or practices of these 
                    external sites. Use of third-party services is at your own risk.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing and Availability */}
          <Card>
            <CardHeader>
              <CardTitle>3. Pricing and Availability Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Price Changes</h4>
                  <p className="text-gray-700 leading-relaxed">
                    All prices are subject to change until payment is completed and confirmed. 
                    Airlines may modify fares, taxes, and fees at any time. We are not responsible 
                    for price changes that occur after initial display.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Availability</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Flight availability is subject to change and is not guaranteed until booking 
                    confirmation is received. We cannot guarantee that any specific flight or 
                    fare will remain available during the booking process.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Service Fees</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our service fees are clearly displayed during the booking process. These fees 
                    are separate from airline fares and taxes, and are charged for our booking 
                    assistance and customer support services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Travel and Documentation */}
          <Card>
            <CardHeader>
              <CardTitle>4. Travel Documentation and Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide general information about travel requirements, but we are not responsible 
                for ensuring you have proper documentation for your trip.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>• Passport validity and renewal requirements</p>
                <p>• Visa applications and processing</p>
                <p>• Entry and exit requirements</p>
                <p>• Health and vaccination requirements</p>
                <p>• Customs and immigration regulations</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                It is your responsibility to verify all travel requirements with the relevant 
                embassy, consulate, or government authority before your trip.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle>5. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fly Desk Usa's liability is limited to the following:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Our liability is limited to the amount of our service fees</li>
                <li>We are not liable for airline delays, cancellations, or schedule changes</li>
                <li>We are not responsible for lost or damaged baggage</li>
                <li>We are not liable for weather-related disruptions or force majeure events</li>
                <li>We are not responsible for airline service quality or customer service issues</li>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you agree to these limitations and acknowledge that 
                airlines and other service providers are responsible for their own operations.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>6. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this disclaimer or our services, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> 1877-332-5780</p>
                <p><strong>Email:</strong> <a href="mailto:support@flydeskusa.com" className="text-blue-600 hover:underline">support@flydeskusa.com</a></p>
                <p><strong>Address:</strong> 2484 Field Spring Dr, Lithonia, GA, 30058, USA</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Disclaimer; 