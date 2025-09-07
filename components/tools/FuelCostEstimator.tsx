
"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';

// FIX: Replaced .positive() with .gt(0) to fix type inference issues with zodResolver.
const fuelCostSchema = z.object({
  distance: z.coerce.number().gt(0, { message: 'Distance must be a positive number.' }),
  efficiency: z.coerce.number().gt(0, { message: 'Efficiency must be a positive number.' }),
  price: z.coerce.number().gt(0, { message: 'Price must be a positive number.' }),
});

type FuelCostValues = z.infer<typeof fuelCostSchema>;

const FuelCostEstimator = () => {
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const form = useForm<FuelCostValues>({
    resolver: zodResolver(fuelCostSchema),
    defaultValues: {
      distance: 100,
      efficiency: 12, // km per liter
      price: 3.02, // AED per liter
    },
  });

  const onSubmit = (values: FuelCostValues) => {
    const litersNeeded = values.distance / values.efficiency;
    const cost = litersNeeded * values.price;
    setTotalCost(cost);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estimate Your Trip's Fuel Cost</CardTitle>
        <CardDescription>Enter your trip details to calculate the estimated fuel expense.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField name="distance" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Trip Distance (km)</FormLabel>
                <FormControl><Input type="number" placeholder="e.g., 100" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="efficiency" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Car's Fuel Efficiency (km/L)</FormLabel>
                <FormControl><Input type="number" placeholder="e.g., 12" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="price" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Price (AED/L)</FormLabel>
                <FormControl><Input type="number" step="0.01" placeholder="e.g., 3.02" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" className="w-full rounded-xl">Calculate Cost</Button>
          </form>
        </Form>
        {totalCost !== null && (
          <div className="mt-8 text-center bg-secondary p-6 rounded-lg">
            <p className="text-lg text-muted-foreground">Estimated Fuel Cost</p>
            <p className="text-4xl font-bold text-primary">AED {totalCost.toFixed(2)}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FuelCostEstimator;
