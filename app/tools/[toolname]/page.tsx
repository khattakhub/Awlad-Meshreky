
"use client";
import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { tools } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamically import tool components
const LoanCalculator = React.lazy(() => import('@/components/tools/LoanCalculator'));
const FuelCostEstimator = React.lazy(() => import('@/components/tools/FuelCostEstimator'));

const toolComponents: { [key: string]: React.LazyExoticComponent<React.FC<{}>> } = {
    'loan-calculator': LoanCalculator,
    'fuel-cost-estimator': FuelCostEstimator,
};

const ToolDetailPage = () => {
    const params = useParams();
    const toolname = params.toolname as string;
    const tool = tools.find(t => t.slug === toolname);

    if (!tool) {
        notFound();
    }

    const ToolComponent = toolComponents[tool.slug];

    return (
        <div className="container mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/tools" className="inline-flex items-center text-primary hover:underline mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Tools
                </Link>
                <div className="text-center mb-12">
                    <div className="text-primary inline-block mb-4">{React.cloneElement(tool.icon, { className: "h-16 w-16" })}</div>
                    <h1 className="text-4xl font-extrabold tracking-tight">{tool.title}</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{tool.description}</p>
                </div>
                
                <div className="max-w-2xl mx-auto">
                    <React.Suspense fallback={<div>Loading Tool...</div>}>
                        {ToolComponent ? <ToolComponent /> : <p>This tool is currently under development.</p>}
                    </React.Suspense>
                </div>
            </motion.div>
        </div>
    );
};

export default ToolDetailPage;
