import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How many lessons will I need to pass my driving test?",
    a: "Because the training is competency based, the number of lessons depends on you. Some clients are able to sit for their driving test after a few lessons, while others may require extended training. It all depends on your level of driving skill, competency and confidence. Rest assured, we will give you an honest assessment of your competency level and whether you are ready for your test. VicRoads and TAC recommend that you get a minimum of 120 hours of supervised driving practice before attempting your driving test.",
  },
  {
    q: "Is it necessary for me to practice driving with my parents or friends?",
    a: "Generally speaking, we would advise you to take professional lessons to gain sound fundamental skills. Once you have a sound understanding of the road rules and acquired a reasonable skill level, we encourage you to continue with professional driving lessons in addition to driving with an experienced supervisor driver, if you have the opportunity.",
  },
  {
    q: "I've just got my Learner's Permit. When can I sit for my driving test?",
    a: "To sit for the driving test, you must be at least 18 years of age. If you are under 21, the graduated licensing system requires you must hold your Learner's Permit for at least 12 months. If you're over 25, you must hold a Learner's Permit for 3 months. Overseas Licence holders are exempt from the waiting period.",
  },
  {
    q: "Where will we meet to conduct our driving lesson?",
    a: "Our aim is to be flexible within the geographical area and we can arrange to pick you up from home, work, school, uni or even at VicRoads. We come to you 7 days a week across all Melbourne suburbs.",
  },
  {
    q: "Are the examiners strict on driving tests?",
    a: "Examiners adhere strictly according to assessment criteria prescribed by VicRoads. However, new drivers are not expected to be perfect and a small percentage of minor mistakes are allowed. If you have learned driving with a family member or friend, it is wise to have additional lessons with a professional driving instructor who will be able to assess and rectify any flaws in your driving. It is not wise to book a driving exam without first having undertaken some professional driving lessons.",
  },
  {
    q: "Do you offer both automatic and manual lessons?",
    a: "Yes! We offer lessons in both modern automatic and manual vehicles. Both are late model cars with air conditioning, power steering, and dual pedals fitted for safety.",
  },
  {
    q: "Can overseas licence holders take lessons?",
    a: "Absolutely. We specialise in helping overseas licence holders and international students transition to an Australian licence, including familiarisation with Victorian road rules and local driving conditions.",
  },
  {
    q: "Are your instructors qualified?",
    a: "All our instructors are highly qualified, government accredited and strictly character reference checked. Our lead instructor Richard holds certificates in Motor Vehicle instruction and assessment as well as formal tertiary qualifications in Education and Training (RMIT). He is a respected member of the Professional Driver Trainers Association.",
  },
  {
    q: "Do you offer gift vouchers?",
    a: "Yes! Driving lesson gift vouchers are an ideal present for birthdays, Christmas, graduation or any other occasion. Vouchers may be purchased for any preferred amount. Contact us for more information.",
  },
  {
    q: "Do you have female driving instructors?",
    a: "Yes, Melbourne Driving School has both male and female driving instructors available. Please let us know your preference when booking.",
  },
];

const FAQ = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Frequently Asked Questions</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our driving lessons and services.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl px-6">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions? Call us on <strong>0414 771 101</strong></p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
