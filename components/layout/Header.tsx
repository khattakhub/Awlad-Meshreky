
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <h1
            className={`font-extrabold text-2xl transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            AWLAD MESHREKY
          </h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`font-semibold transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          {/* FIX: Corrected Button component prop 'variant' to a valid value 'ghost'. */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className={`${isScrolled ? "" : "text-white hover:bg-white/10"}`}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Link href="/appointment">
            <Button className="rounded-xl">Book Appointment</Button>
          </Link>
        </div>
        <div className="md:hidden">
          {/* FIX: Corrected Button component prop 'variant' to a valid value 'ghost'. */}
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            className={`${isScrolled ? "" : "text-white hover:bg-white/10"}`}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 pb-4"
        >
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span onClick={toggleMenu} className="font-semibold text-foreground hover:text-primary">
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/appointment">
              <Button onClick={toggleMenu} className="w-full rounded-xl">Book Appointment</Button>
            </Link>
            {/* FIX: Corrected Button component prop 'variant' to a valid value 'outline'. */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
