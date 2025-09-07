
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { services, tools, blogPosts, testimonials } from "@/lib/data";
import { ArrowRight } from "lucide-react";

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HomePage = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer}>
      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white"
        variants={fadeIn}
      >
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553974024-3e745c47a48b?q=80&w=1920&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
            variants={fadeIn}
          >
            PREMIUM AUTO CARE IN AJMAN
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200"
            variants={fadeIn}
          >
            Your trusted partner for all automotive repairs and maintenance.
            Quality service, expert technicians, and unbeatable prices.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link href="/appointment">
              {/* FIX: Corrected Button component prop from 'size' to 'lg' which is a valid size variant. */}
              <Button size="lg" className="rounded-xl">
                Book an Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section id="services" className="py-20" variants={fadeIn}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we've got you covered.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.slice(0, 3).map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-left h-full">
                  <CardHeader>
                    <div className="text-primary mb-2">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <Link href="/services" className="mt-12 inline-block">
            {/* FIX: Corrected Button component prop 'variant' to a valid value 'outline'. */}
            <Button variant="outline" className="rounded-xl">
              View All Services
            </Button>
          </Link>
        </div>
      </motion.section>
      
      {/* Tools Preview */}
      <motion.section className="py-20 bg-secondary" variants={fadeIn}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Automotive Tools</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Empowering you with the right tools to make informed decisions.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {tools.slice(0, 3).map((tool, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-left h-full">
                  <CardHeader>
                    <div className="text-primary mb-2">{tool.icon}</div>
                    <CardTitle>{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <Link href="/tools" className="mt-12 inline-block">
            {/* FIX: Corrected Button component prop 'variant' to a valid value 'outline'. */}
            <Button variant="outline" className="rounded-xl">
              Explore All Tools
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section className="py-20" variants={fadeIn}>
         <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We are committed to providing an exceptional experience.
          </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-secondary border-none">
                  <CardContent className="pt-6">
                    <p className="italic">"{testimonial.quote}"</p>
                    <p className="font-bold mt-4 text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
         </div>
      </motion.section>

      {/* Blog Preview */}
      <motion.section className="py-20 bg-secondary" variants={fadeIn}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">From Our Blog</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Stay updated with the latest news and tips from our experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0,3).map((post) => (
              <Card key={post.slug} className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-4 inline-block">
                     {/* FIX: Corrected Button component prop 'variant' to a valid value 'link'. */}
                     <Button variant="link" className="p-0">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog">
              {/* FIX: Corrected Button component prop 'variant' to a valid value 'outline'. */}
              <Button variant="outline" className="rounded-xl">Read All Blogs</Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
