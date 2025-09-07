
"use client";
import React from 'react';
import { useParams, notFound, useRouter } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';

const SingleBlogPage = () => {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* FIX: Corrected Button component prop 'variant' to a valid value 'ghost'. */}
                <Button variant="ghost" onClick={() => router.back()} className="mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Button>

                <article>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{post.title}</h1>
                    <div className="flex items-center space-x-4 text-muted-foreground mb-8">
                        <span>By {post.author}</span>
                        <span>&bull;</span>
                        <span>{post.date}</span>
                    </div>

                    <img src={post.image} alt={post.title} className="w-full max-h-[500px] object-cover rounded-xl mb-8" />
                    
                    <div className="prose dark:prose-invert max-w-none lg:prose-lg"
                         dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Related Posts */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {relatedPosts.map(relatedPost => (
                             <Card key={relatedPost.slug} className="overflow-hidden">
                                <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-48 object-cover" />
                                <CardHeader>
                                <CardTitle>{relatedPost.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                <p className="text-muted-foreground line-clamp-3">{relatedPost.excerpt}</p>
                                <Link href={`/blog/${relatedPost.slug}`} className="mt-4 inline-block">
                                    {/* FIX: Corrected Button component prop 'variant' to a valid value 'link'. */}
                                    <Button variant="link" className="p-0">Read More</Button>
                                </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SingleBlogPage;
