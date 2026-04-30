"use client";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/5 py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white/50">
                <img
                  src="/logo.png"
                  alt="Ahavor Foods Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="text-2xl font-bold text-secondary tracking-tighter"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                AHAVOR FOODS
              </div>
            </div>
            <div className="text-sm text-muted-foreground space-y-3">
              <p className="font-semibold text-secondary mb-3">Contact Us</p>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <p>KNUST, Kumasi – Ghana</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p>0504984721</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p>ahavorfoods@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-secondary">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors"
                >
                  Tombrown
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors"
                >
                  Oat
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors"
                >
                  Benefits
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-secondary">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#story"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-primary transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-secondary">Connect</h4>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/company/ahavor-foods/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ahavor_foods/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Ahavor Foods. All rights reserved. Nourishing
            Lives. Empowering Futures.
          </p>
        </div>
      </div>
    </footer>
  );
}
