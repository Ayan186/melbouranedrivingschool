import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  { q: "How many lessons do I need to pass my driving test?", a: "It varies by individual, but most learners need 10–20 professional lessons alongside supervised practice. We'll assess your skills and recommend a plan tailored to you." },
  { q: "Do you offer both automatic and manual lessons?", a: "Yes! We offer lessons in both modern automatic and manual vehicles. You can choose based on the licence type you want to obtain." },
  { q: "Can overseas licence holders take lessons?", a: "Absolutely. We specialise in helping overseas licence holders transition to an Australian licence, including familiarisation with Victorian road rules and conditions." },
  { q: "Do you help with VicRoads driving tests?", a: "Yes, we offer comprehensive VicRoads test preparation including practice on actual test routes, mock tests, and a test-day package where you can use our car for the test." },
  { q: "Do you pick up from home, school, or work?", a: "Yes! We offer free pick-up and drop-off anywhere within our service areas across Melbourne — from your home, school, university, or workplace." },
  { q: "What areas do you cover?", a: "We cover 50+ suburbs across Melbourne including CBD, northern, eastern, western, and south-eastern suburbs. Check our Service Areas page for the full list." },
  { q: "How long is each driving lesson?", a: "Standard lessons are 1 hour. We also offer 1.5 and 2-hour sessions for intensive practice, especially useful closer to your test date." },
  { q: "What if I need to cancel or reschedule?", a: "We understand plans change. Please give us at least 24 hours notice to cancel or reschedule without a fee." },
  { q: "Are your instructors qualified?", a: "All our instructors are fully licensed, accredited, and experienced. They undergo regular training to ensure the highest standards of instruction." },
  { q: "Do you offer gift vouchers?", a: "Yes! Driving lessons make a great gift. Contact us to purchase a gift voucher for any lesson or package." },
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
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
