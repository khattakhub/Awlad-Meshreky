
"use client";
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

declare const emailjs: any;

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formStatus, setFormStatus] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: '', email: '', message: '' },
    });

    const onSubmit = (values: z.infer<typeof contactSchema>) => {
        if (!formRef.current) return;
        setIsSubmitting(true);
        setFormStatus({ message: '', type: '' });

        // Note: Using different template for contact form
        const SERVICE_ID = 'service_g6ff6ym';
        const TEMPLATE_ID = 'template_contact_form'; // A new template for general contact
        const PUBLIC_KEY = 'TBN1I_h2KqZ-xrzE7';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
          .then(
            () => {
              setFormStatus({ message: 'Message sent successfully! We will get back to you soon.', type: 'success' });
              form.reset();
            },
            (error: any) => {
              console.log('FAILED...', error.text);
              setFormStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
            }
          )
          .finally(() => {
            setIsSubmitting(false);
          });
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We're here to help. Reach out to us with any questions or to schedule a visit.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Form {...form}>
                        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField name="name" control={form.control} render={({ field }) => (
                                <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField name="email" control={form.control} render={({ field }) => (
                                <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField name="message" control={form.control} render={({ field }) => (
                                <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="How can we help you today?" rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <Button type="submit" className="w-full rounded-xl" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                            {formStatus.message && (
                                <p className={`mt-4 text-center font-semibold ${formStatus.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>{formStatus.message}</p>
                            )}
                        </form>
                    </Form>
                </motion.div>

                {/* Company Info */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="space-y-4">
                        <InfoItem icon={<MapPin/>} label="Address" value="456 Industrial Zone, Jurf, Ajman, UAE"/>
                        <InfoItem icon={<Phone/>} label="Phone" value="+971 6 765 4321"/>
                        <InfoItem icon={<Mail/>} label="Email" value="contact@awladmeshreky.com"/>
                        <InfoItem icon={<Clock/>} label="Hours" value="Sat - Thu, 8:00 AM - 7:00 PM"/>
                    </div>
                    <div className="flex space-x-4">
                        <SocialLink href="#" icon={<Facebook />} label="Facebook" />
                        <SocialLink href="#" icon={<Instagram />} label="Instagram" />
                        <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
                    </div>
                     <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.773825828551!2d55.4800!3d25.3784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIyJzQyLjIiTiA1NcKwMjgnNDguMCJF!5e0!3m2!1sen!2sae!4v1628086800000!5m2!1sen!2sae" 
                            width="100%" 
                            height="300" 
                            style={{ border: 0 }} 
                            allowFullScreen={true}
                            loading="lazy"
                            title="Garage Location"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-start">
        <div className="text-primary mt-1 mr-4">{icon}</div>
        <div>
            <h4 className="font-semibold">{label}</h4>
            <p className="text-muted-foreground">{value}</p>
        </div>
    </div>
);

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
    <Link href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
        {/* FIX: Corrected Button component prop 'variant' to a valid value 'outline'. */}
        <Button variant="outline" size="icon" className="rounded-full">
            {icon}
        </Button>
    </Link>
);


export default ContactPage;
