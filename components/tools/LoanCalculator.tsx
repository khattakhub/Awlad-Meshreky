
"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Slider } from '@/components/ui/Slider';

const loanSchema = z.object({
  amount: z.number().min(1000, 'Must be at least 1,000').max(200000, 'Must be 200,000 or less'),
  interest: z.number().min(0.1, 'Must be at least 0.1').max(25, 'Must be 25 or less'),
  term: z.number().min(1, 'Must be at least 1').max(7, 'Must be 7 or less'),
});

const LoanCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const form = useForm<z.infer<typeof loanSchema>>({
    resolver: zodResolver(loanSchema),
    defaultValues: {
      amount: 50000,
      interest: 5,
      term: 5,
    },
  });
  
  const { watch } = form;
  const watchAmount = watch('amount');
  const watchInterest = watch('interest');
  const watchTerm = watch('term');

  const onSubmit = (values: z.infer<typeof loanSchema>) => {
    const principal = values.amount;
    const monthlyInterestRate = values.interest / 100 / 12;
    const numberOfPayments = values.term * 12;

    if (monthlyInterestRate === 0) {
        setMonthlyPayment(principal / numberOfPayments);
        return;
    }

    const payment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    setMonthlyPayment(payment);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estimate Your Monthly Payment</CardTitle>
        <CardDescription>Adjust the sliders or enter values to see your estimated car loan payment.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField name="amount" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Loan Amount: AED {field.value.toLocaleString()}</FormLabel>
                <FormControl>
                  <Slider defaultValue={[field.value]} min={1000} max={200000} step={1000} onValueChange={(vals) => field.onChange(vals[0])}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField name="interest" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Interest Rate: {field.value}%</FormLabel>
                <FormControl>
                  <Slider defaultValue={[field.value]} min={0.1} max={25} step={0.1} onValueChange={(vals) => field.onChange(vals[0])}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField name="term" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Loan Term: {field.value} Years</FormLabel>
                <FormControl>
                  <Slider defaultValue={[field.value]} min={1} max={7} step={1} onValueChange={(vals) => field.onChange(vals[0])}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            
            <Button type="submit" className="w-full rounded-xl">Calculate</Button>
          </form>
        </Form>
        {monthlyPayment !== null && (
          <div className="mt-8 text-center bg-secondary p-6 rounded-lg">
            <p className="text-lg text-muted-foreground">Estimated Monthly Payment</p>
            <p className="text-4xl font-bold text-primary">AED {monthlyPayment.toFixed(2)}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;
