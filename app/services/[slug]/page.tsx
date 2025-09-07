
"use client";
import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceDetailPage = () => {
    const params = useParams();
    const slug = params.slug;
    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="container mx-auto px-6 py-20">
             <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
             >
                <Link href="/services" className="inline-flex items-center text-primary hover:underline mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Back to All Services
                </Link>

                <div className="flex items-center space-x-4 mb-6">
                    <div className="text-primary">{React.cloneElement(service.icon, { className: "h-12 w-12" })}</div>
                    <h1 className="text-4xl font-extrabold tracking-tight">{service.title}</h1>
                </div>

                <div className="prose dark:prose-invert max-w-none lg:prose-lg">
                    <p className="lead text-xl text-muted-foreground">{service.description}</p>
                    <p>
                        At Awlad Meshreky Garage, our {service.title.toLowerCase()} is performed by certified technicians using state-of-the-art equipment. We ensure every job is done to the highest standard, using only quality parts to guarantee the longevity and performance of your vehicle.
                    </p>
                    <p>
                        Whether you need a routine check-up or a major repair, our team is dedicated to providing transparent, honest, and reliable service. We'll provide a detailed quote before any work begins, so you know exactly what to expect.
                    </p>
                    
                    <h3 className="mt-8 font-bold text-2xl">Why Choose Us for {service.title}?</h3>
                    <ul>
                        <li><strong>Expert Technicians:</strong> Our team is highly trained and experienced in all aspects of {service.title.toLowerCase()}.</li>
                        <li><strong>Quality Parts:</strong> We use only OEM or equivalent parts to ensure durability and performance.</li>
                        <li><strong>Transparent Pricing:</strong> Receive a detailed, upfront quote with no hidden fees.</li>
                        <li><strong>Customer Satisfaction:</strong> We are committed to ensuring you're fully satisfied with our work.</li>
                    </ul>
                </div>

                <div className="mt-12">
                     <Link href="/appointment">
                        {/* FIX: Corrected Button component prop from 'size' to 'lg' which is a valid size variant. */}
                        <Button size="lg" className="rounded-xl">
                            Book This Service
                        </Button>
                    </Link>
                </div>
             </motion.div>
        </div>
    );
};

export default ServiceDetailPage;
