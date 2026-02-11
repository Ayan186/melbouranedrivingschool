import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Booking request sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Book Your Driving Lesson</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Fill out the form below or call us directly. We'll match you with the perfect instructor.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl border p-6 md:p-8">
                <h2 className="font-heading font-bold text-foreground text-2xl mb-6">Online Booking Form</h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We've received your booking request and will be in touch within 24 hours.</p>
                    <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <Input required placeholder="John Smith" maxLength={100} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                        <Input required type="tel" placeholder="0400 000 000" maxLength={20} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                      <Input required type="email" placeholder="john@example.com" maxLength={255} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Lesson Type</label>
                        <Select>
                          <SelectTrigger><SelectValue placeholder="Select lesson type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automatic">Automatic Lesson</SelectItem>
                            <SelectItem value="manual">Manual Lesson</SelectItem>
                            <SelectItem value="test-prep">VicRoads Test Prep</SelectItem>
                            <SelectItem value="nervous">Nervous Driver</SelectItem>
                            <SelectItem value="overseas">Overseas Licence</SelectItem>
                            <SelectItem value="refresher">Refresher Lesson</SelectItem>
                            <SelectItem value="intensive">Intensive Course</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Suburb / Pickup Location</label>
                        <Input placeholder="e.g. Brunswick" maxLength={100} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message (Optional)</label>
                      <Textarea placeholder="Any additional details or preferred times..." rows={4} maxLength={1000} />
                    </div>
                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Submit Booking Request
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-xl border p-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-4">Contact Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:0400000000" className="text-muted-foreground hover:text-primary">0400 000 000</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@melbournedrivingschool.com.au" className="text-muted-foreground hover:text-primary text-sm">info@melbournedrivingschool.com.au</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Service Area</p>
                      <p className="text-muted-foreground text-sm">All Melbourne suburbs, VIC</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground text-sm">7 days a week, 7am – 7pm</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="font-heading font-bold text-lg mb-2">Prefer to Call?</h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Speak directly with our team to book your lesson or ask any questions.
                </p>
                <Button asChild variant="hero" className="w-full">
                  <a href="tel:0400000000"><Phone className="w-4 h-4 mr-2" /> Call 0400 000 000</a>
                </Button>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border">
                <iframe
                  title="Melbourne Driving School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403171.65513245564!2d144.49266785!3d-37.8602828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
