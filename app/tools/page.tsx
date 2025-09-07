
"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { tools } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ToolsPage = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-extrabold tracking-tight">Automotive Tools & Calculators</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Empowering you with helpful tools to make informed decisions about your vehicle.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {tools.map((tool, index) => (
                    <motion.div key={index} variants={fadeIn} className="h-full">
                        <Card className="flex flex-col h-full hover:border-primary transition-colors">
                            <CardHeader>
                                <div className="text-primary mb-2">{tool.icon}</div>
                                <CardTitle>{tool.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{tool.description}</p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Link href={`/tools/${tool.slug}`}>
                                    <Button className="w-full rounded-xl">
                                        Open Tool <ArrowRight className="ml-2 h-4 w-4" />
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

export default ToolsPage;
