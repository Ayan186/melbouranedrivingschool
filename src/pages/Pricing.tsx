import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";

const packages = [
  {
    name: "Single Lesson",
    price: "$70",
    per: "per hour",
    popular: false,
    features: ["1-hour driving lesson", "Pick-up & drop-off included", "Automatic or manual", "Personalised instruction"],
  },
  {
    name: "5-Lesson Package",
    price: "$320",
    per: "save $30",
    popular: true,
    features: ["5 × 1-hour lessons", "Pick-up & drop-off included", "Flexible scheduling", "Progress tracking", "Automatic or manual"],
  },
  {
    name: "10-Lesson Package",
    price: "$600",
    per: "save $100",
    popular: false,
    features: ["10 × 1-hour lessons", "Pick-up & drop-off included", "Best value package", "Priority booking", "Automatic or manual", "Progress reports"],
  },
  {
    name: "Test Day Package",
    price: "$180",
    per: "one-time",
    popular: false,
    features: ["1-hour warm-up lesson", "Use of car for VicRoads test", "Pick-up from home", "Drop-off after test", "Calm pre-test coaching"],
  },
];

const Pricing = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Transparent Pricing & Packages</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Affordable driving lessons with no hidden fees. Save more with our lesson packages.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border p-6 flex flex-col relative ${
                pkg.popular ? "border-secondary shadow-lg ring-2 ring-secondary/20" : ""
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-heading font-extrabold text-foreground">{pkg.price}</span>
                <span className="text-sm text-muted-foreground ml-2">{pkg.per}</span>
              </div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={pkg.popular ? "cta" : "outline"} className="w-full">
                <Link to="/contact">Book Now <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          All prices include GST. Custom packages available — <Link to="/contact" className="text-primary font-semibold hover:underline">contact us</Link> for details.
        </p>
      </div>
    </section>
  </Layout>
);

export default Pricing;
