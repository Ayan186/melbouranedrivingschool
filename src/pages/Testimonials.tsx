import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Audrey",
    age: 45,
    suburb: "Camberwell",
    category: "Licenced Driver on Refresher Program",
    text: "I have not driven in 6 years. Now that my circumstances have changed and I need to drive again, I was a little tentative getting back on the road. So I engaged Richard for some refresher lessons to brush up on my driving skills. I'm really glad I did it because I can't believe how many road traffic rules I have forgotten, plus my driving skills were really rusty. Richard has been wonderfully patient and friendly and we went over so many things until I felt comfortable and confident enough to drive on my own. I would highly recommend Richard to anyone thinking of taking driving lessons.",
    rating: 5,
  },
  {
    name: "Christine",
    age: 24,
    suburb: "Caulfield",
    category: "New Learner Driver",
    text: "I had never sat in a driver's seat before, let alone had any previous driving experience. I was anxious and nervous about the thought of driving, however I was at the same time very keen to get my licence as soon as possible so that I could drive to uni. From the very first lesson I was made to feel comfortable and relatively relaxed. I was most impressed by Richard's structured training sessions, which he tailored to suit my level of skills and experience. He facilitated the training at an appropriate pace, and I found the 1½ hour (double lessons) suited me best. I passed my drive test the first time, and I feel confident with being on the road, even driving through the busy city area. I've recommended Melbourne Driving Academy to two of my friends, and they too now have their licences, and are very competent drivers. I would recommend Melbourne Driving Academy to anyone.",
    rating: 5,
  },
  {
    name: "Thomas",
    age: 18,
    suburb: "Brighton",
    category: "Partially Experienced Learner",
    text: "I had clocked up over 100 hours driving with my parents, but only after taking professional lessons did I realise that I still have some improvements to make, specifically in my parking and lane changing. Although it was good experience with mum and dad, I had unfortunately picked up a few bad habits that I hadn't realised until it was pointed out to me. Fortunately, it only took a few professional lessons to rectify and improve, and within a very short time I passed my driving test easily with a near perfect score of 98%. I've been bragging to my friends ever since, however I must say a big thank you to Richard from the Melbourne Driving School.",
    rating: 5,
  },
];

const Testimonials = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Student Testimonials</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Hear from our students about their experience with Melbourne Driving School.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl border p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="inline-block bg-secondary/20 text-secondary text-xs font-semibold rounded-full px-3 py-1 mb-2">
                    {t.category}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-foreground leading-relaxed mb-4 italic">
                "{t.text}"
              </blockquote>
              <p className="text-sm font-semibold text-muted-foreground">
                — {t.name}, {t.age}, {t.suburb}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="bg-muted rounded-xl p-8 text-center mt-12">
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
          </div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Google 5-Star Reviews</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Melbourne Driving School is proud to maintain a 5-star rating on Google Reviews. Our students consistently rate us for our patience, professionalism, and high pass rate.
          </p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Book Your Lesson Today <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
