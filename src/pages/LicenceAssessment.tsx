import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, FileText, ClipboardCheck } from "lucide-react";

const LicenceAssessment = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">VicRoads Licence Assessment</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Everything you need to know to pass your VicRoads driving test.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 max-w-4xl space-y-10">

        {/* Tests Required */}
        <div className="bg-card rounded-xl border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold text-foreground">What Tests Must I Pass?</h2>
          </div>
          <ul className="space-y-3">
            {[
              "A computerised hazard perception test where you identify road hazards on videos of simulated driving conditions",
              "An eyesight check",
              "A practical driving test which is 30 to 50 minutes in duration, including a 'pre-drive' check",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to Bring */}
        <div className="bg-card rounded-xl border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold text-foreground">What Will I Need to Bring?</h2>
          </div>
          <ul className="space-y-3">
            {[
              "Proof of your identity and proof of your current address",
              "Appointment number and/or appointment receipt (your instructor will provide this)",
              "A currently registered, roadworthy vehicle fitted with 'L' plates (all our vehicles comply)",
              "Payment for your licence",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-muted rounded-lg p-4 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Overseas applicants:</strong> You must also provide proof of your overseas licence with an English translation (e.g., International Driver Permit or qualified translator).
            </p>
          </div>
        </div>

        {/* Assessment Criteria */}
        <div className="bg-card rounded-xl border p-6 md:p-8">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">What Will You Be Assessed On?</h2>
          <p className="text-muted-foreground mb-4">
            Your driving skills will be assessed against a performance checklist. You must get a YES for at least 80% to pass the test.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Pre-Drive Check", desc: "Knowledge of controls: indicators, wipers, horn, headlights, hazard lights, seatbelt, demister, handbrake" },
              { title: "Mirrors", desc: "Check mirror immediately before signalling and before braking" },
              { title: "Signals", desc: "Signal long enough for warning; at least 5 seconds for merging/lane changes" },
              { title: "Lane Changes", desc: "Head check through side window to check blind spots before merging" },
              { title: "Approach & Stopping", desc: "Brake smoothly; stop within 2m of stop lines" },
              { title: "Judgement & Turns", desc: "Correct reactions at intersections; drive in correct lane" },
              { title: "Progress & Position", desc: "Suitable speed for conditions; stay within lane markings" },
              { title: "Car Control", desc: "Correct use of steering, gears, brakes, accelerator and handbrake" },
            ].map((item, i) => (
              <div key={i} className="bg-muted rounded-lg p-4">
                <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Low Speed Manoeuvres */}
        <div className="bg-card rounded-xl border p-6 md:p-8">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Low Speed Manoeuvres</h2>
          <p className="text-muted-foreground mb-4">You will be asked to perform one of these during your test:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-heading font-bold text-foreground mb-2">Reverse Parallel Parking</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Position car parallel to kerb within 300mm</li>
                <li>• Be 1–2 metres from car in front</li>
                <li>• Use 2–4 movements to enter the space</li>
                <li>• Look in direction of travel before and during reversing</li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-heading font-bold text-foreground mb-2">Three Point Turn</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Position within 300mm of kerb before starting</li>
                <li>• Signal before leaving kerb</li>
                <li>• Look both directions before each movement</li>
                <li>• Complete in no more than 5 movements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Immediate Failures */}
        <div className="bg-card rounded-xl border p-6 md:p-8 border-destructive/30">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h2 className="text-2xl font-heading font-bold text-foreground">Immediate Failures</h2>
          </div>
          <p className="text-muted-foreground mb-4">You will fail immediately if you do anything illegal or unsafe:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Not stopping at a red light",
              "Not stopping at a stop sign/stop line",
              "Colliding with another vehicle, pedestrian, or object",
              "Requiring emergency braking by another driver",
              "Driving any wheel over the kerb or onto footpath",
              "Driving over the speed limit for more than 5 seconds",
              "Driving too slowly (10+ km/h under the limit without reason)",
              "Any action causing immediate danger to persons or property",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-xl p-8 md:p-12 text-primary-foreground text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Get Expert Test Preparation</h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            Our 96-98% pass rate speaks for itself. Let us prepare you for your VicRoads driving test with professional instruction.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Book Test Preparation <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default LicenceAssessment;
