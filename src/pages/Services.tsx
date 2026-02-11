import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Car, Users, GraduationCap, ShieldCheck, Clock, Globe, RefreshCw, Gauge, Lock, Gift, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Automatic Driving Lessons",
    desc: "Learn to drive in a modern automatic vehicle. Perfect for beginners who want to focus on road skills without worrying about gear changes.",
    who: "Beginners, nervous drivers, anyone who prefers automatic",
    benefits: ["Easier to learn", "Focus on road awareness", "Modern dual-control vehicles", "Air-conditioned late model cars"],
  },
  {
    icon: Gauge,
    title: "Manual Driving Lessons",
    desc: "Master manual transmission driving with expert guidance. Build complete driving skills including clutch control and gear shifting.",
    who: "Learners who want a manual licence, driving enthusiasts",
    benefits: ["Full clutch & gear training", "Greater vehicle control", "More job opportunities", "Complete driving skill set"],
  },
  {
    icon: Users,
    title: "Learner Driver Lessons",
    desc: "Comprehensive lessons for new learner drivers. Our unique Competency Based Training checklist tracks your progress for faster learning.",
    who: "New learner permit holders, first-time drivers",
    benefits: ["Structured CBT program", "Log book compliance", "Road rule knowledge", "One-on-one instruction"],
  },
  {
    icon: ShieldCheck,
    title: "Nervous & Anxious Driver Training",
    desc: "Specialised calm, patient instruction for anxious drivers. We're experienced in dealing with nervous and anxious learners of all ages.",
    who: "Anxious learners, those with driving fears, adult aged learners",
    benefits: ["Extra patient instructors", "Gradual progression", "Confidence building", "No pressure environment"],
  },
  {
    icon: Globe,
    title: "Overseas Licence Conversion",
    desc: "Transition your overseas driving licence to an Australian one. International students and overseas clients welcome.",
    who: "International licence holders, new migrants, international students",
    benefits: ["Victorian road rules training", "Local traffic familiarisation", "VicRoads test preparation", "English translation guidance"],
  },
  {
    icon: RefreshCw,
    title: "Refresher Driving Lessons",
    desc: "Haven't driven in a while? Our refresher program helps experienced drivers brush up on skills and update their road rule knowledge.",
    who: "Experienced drivers returning after a break, older drivers",
    benefits: ["Skill assessment", "Targeted improvement", "Updated road rules", "Confidence restoration"],
  },
  {
    icon: Clock,
    title: "Intensive / Express Driving Courses",
    desc: "Fast-track your driving skills with concentrated intensive lessons. Ideal for express licence test preparation.",
    who: "Fast learners, time-limited students, test-ready drivers",
    benefits: ["Accelerated learning", "Extended 1.5 hour sessions", "Rapid skill development", "Package discounts"],
  },
  {
    icon: GraduationCap,
    title: "VicRoads Test Preparation",
    desc: "Comprehensive preparation for your VicRoads driving test including pre-drive test assessments. Our pass rate is 96-98%.",
    who: "Learners ready for their driving test",
    benefits: ["Practice on test routes", "Pre-drive test assessments", "Expert test tips", "96-98% pass rate"],
  },
  {
    icon: Lock,
    title: "Interlock Driving Lessons",
    desc: "Specialised driving lessons for drivers with interlock devices fitted to their vehicles.",
    who: "Drivers with interlock requirements",
    benefits: ["Experienced instructors", "Understanding approach", "Professional guidance", "Flexible scheduling"],
  },
  {
    icon: Gift,
    title: "Gift Vouchers",
    desc: "Driving lesson gift vouchers are an ideal present for birthdays, Christmas, graduation or any occasion. Available to any preferred amount.",
    who: "Friends and family of learner drivers",
    benefits: ["Any amount available", "Great birthday gift", "Christmas present idea", "Graduation gift"],
  },
];

const Services = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Our Driving Lessons &amp; Services</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Personalised driving programs tailored to your learning abilities, skills, needs and personal goals.
        </p>
      </div>
    </section>

    {/* Service Guarantee */}
    <section className="bg-secondary/10 border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-foreground">
          <span>✓ Patience &amp; Reliability</span>
          <span>✓ Safety &amp; Security</span>
          <span>✓ Punctuality</span>
          <span>✓ Clean, Modern Cars</span>
          <span>✓ Dual Pedals Fitted</span>
          <span>✓ Working with Children Certificate</span>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {services.map((s, i) => (
            <div key={i} className="bg-card rounded-xl border p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-sm"><span className="font-semibold text-foreground">Who it's for:</span> <span className="text-muted-foreground">{s.who}</span></p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Benefits</h4>
                  <ul className="space-y-1.5">
                    {s.benefits.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="cta" size="sm" className="mt-4 w-full">
                    <Link to="/contact">Book Now <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
