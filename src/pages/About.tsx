import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Award, ShieldCheck, Heart, Target, Users, Car, CheckCircle2, ArrowRight } from "lucide-react";

const values = [
  "Provide our customers with unsurpassed customer service and professionalism",
  "Groom our customers to be models of excellence in driving behaviour",
  "Convey only authoritative information according to guidelines provided by VicRoads and TAC",
  "Adhere to the highest ethical standards, embracing values set by the Australian Driver Trainers Association of Victoria",
  "Impartially instruct our customers without regard to race, creed, religion, or influence",
  "Conduct all instruction in driver education in a manner reflecting its importance to society",
];

const About = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">About Melbourne Driving School</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Patience &amp; Professionalism — Melbourne's leading driving school since 2009.
        </p>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Melbourne Driving School is a friendly team of highly experienced and government accredited driving instructors who will provide clients with a set of tools and skills to obtain their Victorian Driving Licence and to drive competently on the road. Our team of professional and patient instructors will conduct driving lessons in a friendly, relaxed and courteous manner, allowing clients to progress at their own pace.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            Our driving lessons are specifically tailored to your learning abilities, confidence, skills, needs and personal goals. Your progress is assessed according to a structured Competency Based Training checklist (exclusive to Melbourne Driving School), which we have developed to track your weekly development for faster progression and learning.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            We provide "one on one" driving lessons at very competitive prices. Gift vouchers are also available.
          </p>
          <p className="text-foreground font-heading font-bold text-xl mt-6">
            Our motto is safety, patience and professionalism at all times.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Commitment */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl border p-6 md:p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To deliver the highest standard of driving skills, and knowledge in a professional and friendly manner for the purpose of producing safe and responsible drivers on the road.
            </p>
          </div>
          <div className="bg-card rounded-xl border p-6 md:p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide the highest quality of learner driver training and are committed to giving each student the individual attention they require to successfully equip themselves with sufficient skills to obtain their Victorian driver's licence and drive safely on the road.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Our Values</h2>
        <div className="space-y-3">
          {values.map((v, i) => (
            <div key={i} className="flex items-start gap-3 bg-card rounded-lg border p-4">
              <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <p className="text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Competitive Advantage */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">Our Competitive Advantage</h2>
        <div className="bg-card rounded-xl border p-6 md:p-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Melbourne Driving School prides itself on safety, patience, professionalism and quality customer service. We tailor each driving program according to your learning abilities, skills, needs and personal goals.
          </p>
          <div className="bg-primary rounded-lg p-6 text-primary-foreground my-6">
            <p className="text-lg font-heading font-bold mb-2">Outstanding Pass Rate: 96% – 98%</p>
            <p className="text-primary-foreground/80 text-sm">
              VicRoads statistics show that state-wide between 45% to 55% of learner drivers are successful on their driving licence test. At Melbourne Driving School, our pass rate is currently between 96% to 98%! An outstanding result which emphasises that our unique training methodology and competency based training system is successful.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            This will save you money, time and stress compared to any other driving school in Melbourne.
          </p>
        </div>
      </div>
    </section>

    {/* Accreditation */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">Accreditation &amp; Assurance</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl border p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-3">Our Instructor — Richard</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Melbourne Driving School is government accredited and registered. The owner, Richard, is an Accredited Assessor and Instructor, and is a respected member of the Professional Driver Trainers Association. He brings many years of experience, holding certificates in Motor Vehicle instruction and assessment as well as formal tertiary qualifications in Education and Training (RMIT). He is arguably the most highly qualified driving instructor in the industry.
            </p>
          </div>
          <div className="bg-card rounded-xl border p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-3">Our Cars</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our training vehicles are all late model cars with the ultimate in safety features including airbags, ABS brakes, air conditioning and power steering. All vehicles are fitted with dual pedals for the safety and comfort of both the driving instructor and clients. Automatic and Manual vehicles are available. We are comprehensively insured for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
          Call us on 0414 771 101 or book online. Save money on our package deals!
        </p>
        <Button asChild variant="hero" size="lg" className="text-base px-8 py-6">
          <Link to="/contact">Book a Lesson <ArrowRight className="w-5 h-5 ml-1" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default About;
