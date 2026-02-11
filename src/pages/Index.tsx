import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-driving.jpg";
import {
  Car, ShieldCheck, GraduationCap, Clock, Star, MapPin, Phone, CheckCircle2, Users, Award, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Car, title: "Automatic Lessons", desc: "Learn in modern automatic vehicles with patient instructors." },
  { icon: Car, title: "Manual Lessons", desc: "Master manual transmission with expert guidance." },
  { icon: Users, title: "Nervous Drivers", desc: "Calm, supportive training for anxious learners." },
  { icon: GraduationCap, title: "VicRoads Test Prep", desc: "Comprehensive preparation to pass your driving test." },
  { icon: Clock, title: "Intensive Courses", desc: "Fast-track your learning with focused lesson packages." },
  { icon: ShieldCheck, title: "Overseas Licence", desc: "Transition your overseas licence to an Australian one." },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Students Passed" },
  { value: "96-98%", label: "Pass Rate" },
  { value: "All Suburbs", label: "Melbourne Wide" },
];

const testimonials = [
  { name: "Audrey, 45, Camberwell", text: "Richard has been wonderfully patient and friendly. I would highly recommend Richard to anyone thinking of taking driving lessons.", rating: 5 },
  { name: "Christine, 24, Caulfield", text: "I passed my drive test the first time, and I feel confident with being on the road, even driving through the busy city area.", rating: 5 },
  { name: "Thomas, 18, Brighton", text: "Within a very short time I passed my driving test easily with a near perfect score of 98%. A big thank you to Richard from Melbourne Driving School.", rating: 5 },
];

const suburbs = [
  "CBD", "South Yarra", "Carlton", "Caulfield", "Brighton",
  "St Kilda", "Richmond", "Camberwell", "Clayton", "Oakleigh",
  "Dandenong", "Werribee", "Bundoora", "Broadmeadows", "Frankston",
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional driving lesson in Melbourne" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      <div className="relative container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-block bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-1 text-sm font-semibold mb-6 animate-fade-in">
            ⭐ Patience &amp; Professionalism
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Professional Driving Lessons in Melbourne
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Melbourne's leading driving school with a 96-98% pass rate. Government accredited instructors. Automatic &amp; manual lessons across all Melbourne suburbs. Call <strong>0414 771 101</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild variant="hero" size="lg" className="text-base px-8 py-6">
              <Link to="/contact">Book a Lesson <ArrowRight className="w-5 h-5 ml-1" /></Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg" className="text-base px-8 py-6">
              <a href="tel:0414771101"><Phone className="w-5 h-5 mr-1" /> Call 0414 771 101</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 text-primary-foreground/70 text-sm animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-secondary" /> Free Pick-up &amp; Drop-off</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-secondary" /> Male &amp; Female Instructors</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-secondary" /> Government Accredited</span>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card border-b">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="animate-count-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Driving Lessons &amp; Services</h2>
          <p className="text-muted-foreground text-lg">Whether you're a complete beginner or need a refresher, we have the right lesson for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              to="/services"
              key={i}
              className="group bg-card rounded-xl p-6 border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">Getting started is easy — just four simple steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Book Your Lesson", desc: "Choose your preferred time and lesson type online or call 0414 771 101." },
            { step: "2", title: "We Pick You Up", desc: "Your instructor comes to your home, school, uni, or work — anywhere in Melbourne." },
            { step: "3", title: "Learn & Practice", desc: "Build your skills with professional, patient one-on-one instruction using our Competency Based Training system." },
            { step: "4", title: "Pass Your Test", desc: "Feel confident and prepared to ace your VicRoads driving test with our 96-98% pass rate." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-heading font-extrabold text-xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Choose Melbourne Driving School?
            </h2>
            <div className="space-y-5">
              {[
                { icon: Award, title: "Government Accredited Instructors", desc: "Highly qualified, government accredited and strictly character reference checked." },
                { icon: ShieldCheck, title: "96-98% First-Time Pass Rate", desc: "Compared to the state-wide average of only 45-55%. Our proven methods work." },
                { icon: Users, title: "Patient, Professional Instructors", desc: "Male and female instructors available. Calm, supportive teaching for all learners." },
                { icon: MapPin, title: "Free Pick-up & Drop-off", desc: "We come to you — home, school, uni, or work across all Melbourne suburbs." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild variant="cta" size="lg" className="mt-8">
              <Link to="/contact">Get Started Today <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <Star className="w-8 h-8 text-secondary mb-3" />
              <div className="text-2xl font-heading font-bold">5 Stars</div>
              <div className="text-sm text-primary-foreground/70">Google Reviews</div>
            </div>
            <div className="bg-muted rounded-xl p-6">
              <GraduationCap className="w-8 h-8 text-primary mb-3" />
              <div className="text-2xl font-heading font-bold text-foreground">96-98%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
            <div className="bg-muted rounded-xl p-6">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <div className="text-2xl font-heading font-bold text-foreground">Flexible</div>
              <div className="text-sm text-muted-foreground">7 Days a Week</div>
            </div>
            <div className="bg-secondary rounded-xl p-6 text-secondary-foreground">
              <Car className="w-8 h-8 mb-3" />
              <div className="text-2xl font-heading font-bold">Auto & Manual</div>
              <div className="text-sm text-secondary-foreground/80">Dual Pedal Cars</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground text-lg">Real testimonials from our Melbourne students.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm font-semibold text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/testimonials">Read All Testimonials <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Service Areas */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Service Areas Across Melbourne</h2>
          <p className="text-muted-foreground text-lg">We cover all Melbourne suburbs including VicRoads test centres.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {suburbs.map((s) => (
            <span key={s} className="bg-card border rounded-full px-4 py-2 text-sm font-medium text-foreground hover:border-primary/30 transition-colors">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-primary" />{s}
            </span>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/areas">View All Service Areas <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Start Driving?</h2>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
          Call Melbourne Driving School now on 0414 771 101 and save money on our package deals!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="lg" className="text-base px-8 py-6">
            <Link to="/contact">Book a Lesson <ArrowRight className="w-5 h-5 ml-1" /></Link>
          </Button>
          <Button asChild variant="hero-outline" size="lg" className="text-base px-8 py-6">
            <a href="tel:0414771101"><Phone className="w-5 h-5 mr-1" /> 0414 771 101</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
