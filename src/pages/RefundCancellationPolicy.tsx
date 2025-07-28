import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  RotateCcw,
  Clock,
  AlertTriangle,
  DollarSign,
  Phone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundCancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Policy Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              This policy outlines our refund and cancellation procedures for
              flight bookings made through Fly Desk Usa. Please read this policy
              carefully before making a booking.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cancellation and refund policies vary by airline, ticket type, and
              fare class. We will clearly communicate the specific terms for
              your booking before confirmation.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Airline Policies */}
          <Card>
            <CardHeader>
              <CardTitle>1. Airline Cancellation Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ticket Types</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Refundable Tickets:</strong> Can be cancelled and
                      refunded, usually with a cancellation fee
                    </p>
                    <p>
                      <strong>Non-Refundable Tickets:</strong> Cannot be
                      refunded, but may be eligible for credit or rebooking
                    </p>
                    <p>
                      <strong>Basic Economy:</strong> Usually non-refundable
                      with strict change restrictions
                    </p>
                    <p>
                      <strong>Premium Economy/Business/First:</strong> Often
                      more flexible with better refund options
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Cancellation Windows</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Most airlines allow free cancellations within 24 hours of
                    booking (for flights departing at least 7 days later). After
                    this period, cancellation fees typically range from $50 to
                    $400 per ticket, depending on the airline and fare class.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Schedule Changes</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If an airline significantly changes your flight schedule
                    (usually 2+ hours), you may be entitled to a full refund or
                    free rebooking, regardless of ticket type.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Service Fees */}
          <Card>
            <CardHeader>
              <CardTitle>2. Fly Desk Usa Service Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 font-semibold mb-2">
                    Important Notice:
                  </p>
                  <p className="text-blue-700">
                    Our service fees are non-refundable unless the cancellation
                    is due to our error or a significant service failure on our
                    part.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Service Fee Structure</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Booking assistance fee: $25-50 per booking</li>
                    <li>
                      Change/cancellation processing fee: $15-30 per transaction
                    </li>
                    <li>Customer support fee: Included in booking fee</li>
                    <li>Documentation assistance: $10-25 per request</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">
                    When Service Fees Are Refundable
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Our system error prevents booking completion</li>
                    <li>
                      We provide incorrect information that leads to
                      cancellation
                    </li>
                    <li>Technical issues on our end cause booking problems</li>
                    <li>We fail to process a valid refund request</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Refund Process */}
          <Card>
            <CardHeader>
              <CardTitle>3. Refund Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Processing Timeline</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Airline Processing:</strong> 7-14 business days
                    </p>
                    <p>
                      <strong>Bank/Credit Card Processing:</strong> 3-10
                      business days
                    </p>
                    <p>
                      <strong>Total Timeline:</strong> 10-24 business days
                    </p>
                    <p>
                      <strong>International Refunds:</strong> May take longer
                      (up to 30 days)
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Refund Methods</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Refunds are processed to the original payment method
                    </li>
                    <li>
                      Credit card refunds appear as credits on your statement
                    </li>
                    <li>
                      Debit card refunds are deposited back to your account
                    </li>
                    <li>We cannot refund to a different payment method</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Refund Tracking</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We will provide you with a refund confirmation number and
                    estimated timeline. You can track your refund status by
                    contacting our customer support team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation Process */}
          <Card>
            <CardHeader>
              <CardTitle>4. How to Cancel or Request a Refund</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Contact Methods</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Phone:</strong> (877)-332-5780 (24/7 support)
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:support@flydeskusa.com"
                        className="text-blue-600 hover:underline"
                      >
                        support@flydeskusa.com
                      </a>
                    </p>
                    <p>
                      <strong>Response Time:</strong> Within 2-4 hours during
                      business hours
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Required Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Booking reference number</li>
                    <li>Passenger names</li>
                    <li>Flight details (date, route)</li>
                    <li>Reason for cancellation</li>
                    <li>Contact information</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Cancellation Timeline</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We process cancellation requests within 24 hours during
                    business days. Weekend and holiday requests are processed on
                    the next business day.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Circumstances */}
          <Card>
            <CardHeader>
              <CardTitle>5. Special Circumstances</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Medical Emergencies</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Airlines may offer more flexible cancellation options for
                    documented medical emergencies. Contact us immediately with
                    medical documentation for assistance.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Death in Family</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Most airlines provide compassionate fare policies for
                    bereavement travel. We can help you navigate these policies
                    with proper documentation.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">
                    Natural Disasters & Events
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Airlines often offer flexible change/refund policies during
                    major events, natural disasters, or government travel
                    advisories. We monitor these situations and will notify
                    affected customers.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">
                    COVID-19 & Health Emergencies
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Airlines have implemented special policies for
                    health-related cancellations. Contact us for current
                    policies and assistance with documentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Rights */}
          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights & Our Commitments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Transparency</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We will clearly communicate all cancellation fees, refund
                    policies, and processing timelines before you confirm any
                    booking.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Timely Communication</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We will provide regular updates on the status of your refund
                    or cancellation request, including any delays or issues that
                    arise.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Advocacy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We will advocate on your behalf with airlines to ensure you
                    receive the best possible outcome for your situation.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Documentation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We will provide written confirmation of all cancellation and
                    refund requests, including reference numbers and timelines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>7. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about this policy or to request a
                cancellation/refund:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>24/7 Support Line:</strong> (877)-332-5780
                </p>
                <p>
                  <strong>Email Support:</strong>{" "}
                  <a
                    href="mailto:support@flydeskusa.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@flydeskusa.com
                  </a>
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday-Friday 9 AM - 6 PM EST
                </p>
                <p>
                  <strong>Emergency Support:</strong> Available 24/7 for urgent
                  travel issues
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundCancellationPolicy;
