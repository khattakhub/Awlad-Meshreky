
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { services, pricingPlans } from "@/lib/data";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

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

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight">
          Our Automotive Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We provide a full range of services to keep your vehicle in peak condition, delivered by certified expert technicians.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeIn} className="h-full">
            <Card className="text-left h-full hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-primary mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
                 <Link href={`/services/${service.slug}`}>
                    {/* FIX: Corrected Button component prop 'variant' to a valid value 'link'. */}
                    <Button variant="link" className="p-0 mt-4">Learn More</Button>
                 </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Pricing Table */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">Maintenance Plans</h2>
        <p className="mt-2 text-muted-foreground">Choose a plan that works for you.</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {pricingPlans.map((plan, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className={`flex flex-col h-full ${plan.recommended ? 'border-primary border-2' : ''}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-4xl font-bold">${plan.price}<span className="text-lg font-normal text-muted-foreground">/year</span></p>
                <p className="text-muted-foreground h-10">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href="/appointment">
                    {/* FIX: Corrected Button component prop 'variant' to a valid value 'default' or 'outline'. */}
                    <Button className="w-full rounded-xl" variant={plan.recommended ? 'default' : 'outline'}>
                        Get Started
                    </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesPage;
