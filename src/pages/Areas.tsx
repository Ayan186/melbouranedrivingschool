import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const regions = [
  {
    name: "Inner Melbourne",
    suburbs: ["Melbourne CBD", "Carlton", "Docklands", "Southbank", "South Melbourne", "Port Melbourne", "Richmond", "South Yarra", "Prahran", "Windsor", "Toorak"],
  },
  {
    name: "Inner South / Bayside",
    suburbs: ["St Kilda", "Elwood", "Brighton", "Brighton East", "Middle Park", "Albert Park", "Beacon Cove", "Ripponlea", "Elsternwick", "Balaclava"],
  },
  {
    name: "South-East (Caulfield / Glen Iris)",
    suburbs: ["Caulfield", "Carnegie", "Malvern", "Malvern East", "Glen Iris", "Camberwell", "Armadale", "Hawksburn", "Gardenvale", "Murrumbeena", "Ormond", "McKinnon", "Glenhuntly"],
  },
  {
    name: "Bayside / Kingston",
    suburbs: ["Bentleigh", "Bentleigh East", "Hampton", "Sandringham", "Black Rock", "Beaumaris", "Highett", "Moorabbin", "Cheltenham", "Mentone", "Parkdale", "Mordialloc"],
  },
  {
    name: "South-East (Monash / Greater Dandenong)",
    suburbs: ["Oakleigh", "Oakleigh South", "Chadstone", "Clayton", "Huntingdale", "Mulgrave", "Ashwood", "Burwood", "Clarinda", "Springvale", "Dandenong", "Noble Park", "Keysborough"],
  },
  {
    name: "Northern Suburbs",
    suburbs: ["Broadmeadows", "Bundoora"],
  },
  {
    name: "Western Suburbs",
    suburbs: ["Sunshine", "Werribee", "Hoppers Crossing"],
  },
  {
    name: "Outer South-East",
    suburbs: ["Frankston", "Heatherton", "Mooroolbark"],
  },
];

const vicRoadsCentres = [
  "Broadmeadows", "Bundoora", "Burwood East", "Carlton", "Dandenong",
  "Hoppers Crossing (Werribee)", "Frankston", "Mooroolbark", "Heatherton",
];

const Areas = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Driving Lessons Across All Melbourne Suburbs</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Melbourne Driving School covers all Melbourne suburbs. We come to you 7 days a week.
        </p>
      </div>
    </section>

    {/* VicRoads Test Centres */}
    <section className="bg-secondary/10 border-b">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-center font-heading font-bold text-foreground mb-3">VicRoads Driving Test Centres We Cover</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {vicRoadsCentres.map((c) => (
            <span key={c} className="bg-card border rounded-full px-4 py-2 text-sm font-medium text-foreground">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-primary" />{c}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <div key={i} className="bg-card rounded-xl border p-6">
              <h2 className="font-heading font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {region.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {region.suburbs.map((suburb) => (
                  <span key={suburb} className="bg-muted rounded-full px-3 py-1 text-sm text-muted-foreground">
                    {suburb}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-xl p-8 md:p-12 text-primary-foreground text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Don't See Your Suburb?</h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            We cover all Melbourne suburbs. Call 0414 771 101 to check availability.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Areas;
