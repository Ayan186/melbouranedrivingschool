import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-heading font-bold text-lg">M</span>
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-base">Melbourne</span>
              <span className="block text-xs text-primary-foreground/70 -mt-0.5">Driving School</span>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-2">
            Patience &amp; Professionalism
          </p>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Melbourne's leading driving school with government accredited instructors. 96-98% pass rate.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Licence Assessment", to: "/licence-assessment" },
              { label: "Pricing", to: "/pricing" },
              { label: "Service Areas", to: "/areas" },
              { label: "Testimonials", to: "/testimonials" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Automatic Lessons</li>
            <li>Manual Lessons</li>
            <li>Nervous Driver Training</li>
            <li>VicRoads Test Prep</li>
            <li>Overseas Licence Conversion</li>
            <li>Refresher Lessons</li>
            <li>Intensive Courses</li>
            <li>Interlock Driving Lessons</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              <a href="tel:0414771101" className="hover:text-primary-foreground">0414 771 101</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              <a href="mailto:richard@melbournedrivingschool.com.au" className="hover:text-primary-foreground text-xs">richard@melbournedrivingschool.com.au</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-secondary mt-0.5" />
              <span>All Melbourne Suburbs, VIC</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Melbourne Driving School. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
