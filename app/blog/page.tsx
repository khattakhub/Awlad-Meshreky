
"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { blogPosts } from '@/lib/data';
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

const BlogPage = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-extrabold tracking-tight">Our Blog</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Your source for automotive news, tips, and expert advice.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {blogPosts.map((post) => (
                    <motion.div key={post.slug} variants={fadeIn}>
                        <Card className="overflow-hidden h-full flex flex-col">
                            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground line-clamp-4">{post.excerpt}</p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Link href={`/blog/${post.slug}`}>
                                    {/* FIX: Corrected Button component prop 'variant' to a valid value 'outline'. */}
                                    <Button variant="outline" className="w-full rounded-xl">
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
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

export default BlogPage;
