
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-primary shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/273e3b35-6f11-4d79-852b-e810cfda16b5.png"
                alt="Rave Bae Eats Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground">Rave Bae Eats</h3>
              <p className="text-sm text-muted-foreground">Delicious & Nutritious</p>
            </div>
          </div>

          {/* Contact & Booking Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-primary mb-2">Contact & Booking</h4>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <a href="tel:754-274-2704" className="text-lg font-medium hover:underline">
                754-274-2704
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Follow Us</p>
              <a
                href="https://www.instagram.com/ravebaeeats/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Rave Bae Eats. All rights reserved. • Serving Delicious & Nutritious meals with love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
