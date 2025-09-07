
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-extrabold">AWLAD MESHREKY</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Professional Automotive Services in Ajman. Your trusted partner for quality and reliability.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/tools" className="hover:text-primary transition-colors">Tools</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/appointment" className="hover:text-primary transition-colors">Appointment</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Subscribe to our newsletter for the latest deals and tips.
            </p>
            <form className="mt-4 flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none rounded-xl">Subscribe</Button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-center text-sm text-muted-foreground">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} AWLAD MESHREKY GARAGE. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-primary" /></Link>
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
