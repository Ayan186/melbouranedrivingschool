import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const regions = [
  {
    name: "Inner Melbourne",
    suburbs: ["CBD", "Carlton", "Fitzroy", "Collingwood", "South Yarra", "Richmond", "Docklands", "Southbank"],
  },
  {
    name: "Northern Suburbs",
    suburbs: ["Brunswick", "Coburg", "Preston", "Reservoir", "Northcote", "Thornbury", "Bundoora", "Mill Park"],
  },
  {
    name: "Eastern Suburbs",
    suburbs: ["Hawthorn", "Box Hill", "Doncaster", "Glen Waverley", "Camberwell", "Ringwood", "Balwyn", "Kew"],
  },
  {
    name: "Southern Suburbs",
    suburbs: ["St Kilda", "Brighton", "Moorabbin", "Bentleigh", "Clayton", "Caulfield", "Oakleigh", "Carnegie"],
  },
  {
    name: "Western Suburbs",
    suburbs: ["Footscray", "Werribee", "Sunshine", "Altona", "Williamstown", "St Albans", "Hoppers Crossing", "Point Cook"],
  },
  {
    name: "South-Eastern Suburbs",
    suburbs: ["Dandenong", "Cranbourne", "Narre Warren", "Berwick", "Springvale", "Noble Park", "Keysborough", "Hallam"],
  },
];

const Areas = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Driving Lessons Across Melbourne</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          We provide professional driving lessons in 50+ suburbs across Melbourne. Find your area below.
        </p>
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
            We cover many more areas across Melbourne. Contact us to check availability in your suburb.
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
