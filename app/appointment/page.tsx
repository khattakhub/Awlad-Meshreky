
"use client";
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { motion } from 'framer-motion';

// Declare emailjs for TypeScript
declare const emailjs: any;

const appointmentSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^(?:\+971|0)?5[0-9]{8}$/, { message: 'Please enter a valid UAE phone number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }).optional().or(z.literal('')),
  service: z.string().min(1, { message: 'Please select a service.' }),
  appointmentDate: z.string().min(1, { message: 'Please select a date.' }),
  appointmentTime: z.string().min(1, { message: 'Please select a time.' }),
  message: z.string().optional(),
});

const AppointmentPage = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formStatus, setFormStatus] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof appointmentSchema>>({
        resolver: zodResolver(appointmentSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            service: '',
            appointmentDate: '',
            appointmentTime: '',
            message: '',
        },
    });

    const onSubmit = (values: z.infer<typeof appointmentSchema>) => {
        if (!formRef.current) return;
        setIsSubmitting(true);
        setFormStatus({ message: '', type: '' });

        const SERVICE_ID = 'service_g6ff6ym';
        const TEMPLATE_ID = 'template_lrsgxr3';
        const PUBLIC_KEY = 'TBN1I_h2KqZ-xrzE7';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
          .then(
            () => {
              setFormStatus({ message: 'Appointment request sent! We will contact you shortly.', type: 'success' });
              form.reset();
            },
            (error: any) => {
              console.log('FAILED...', error.text);
              setFormStatus({ message: 'Failed to send request. Please try again.', type: 'error' });
            }
          )
          .finally(() => {
            setIsSubmitting(false);
          });
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="max-w-3xl mx-auto">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold">Book an Appointment</CardTitle>
                        <CardDescription>Fill out the form below to schedule your visit.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl><Input placeholder="0501234567" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address (Optional)</FormLabel>
                                            <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="service"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Service</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="diagnostics">Engine Diagnostics</SelectItem>
                                                    <SelectItem value="oil_change">Oil Change</SelectItem>
                                                    <SelectItem value="brakes">Brake Services</SelectItem>
                                                    <SelectItem value="ac_repair">A/C Repair</SelectItem>
                                                    <SelectItem value="tires">Tire Services</SelectItem>
                                                    <SelectItem value="detailing">Detailing</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="appointmentDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Preferred Date</FormLabel>
                                                <FormControl><Input type="date" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="appointmentTime"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Preferred Time</FormLabel>
                                                <FormControl><Input type="time" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Additional Message (Optional)</FormLabel>
                                            <FormControl><Textarea placeholder="Tell us about your car or the issue..." {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full rounded-xl" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending Request...' : 'Send Request'}
                                </Button>
                                {formStatus.message && (
                                    <p className={`mt-4 text-center font-semibold ${formStatus.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                                        {formStatus.message}
                                    </p>
                                )}
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default AppointmentPage;
