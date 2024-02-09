"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';

const IdeaSchema = z.object({
    idea: z.string(),
})

const FormIdea = () => {

    const form = useForm<z.infer<typeof IdeaSchema>>({
        resolver: zodResolver(IdeaSchema),
        defaultValues: {
            idea: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof IdeaSchema>) => {

        console.log(values);

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>

                <FormField
                    control={form.control}
                    name='idea'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Need Ideas for your app ??
                            </FormLabel>

                            <FormDescription>
                                Enter a few keywords about your product and let our ChatGPT assistant come up with ideas for you.
                            </FormDescription>
                            <FormControl>
                                <Input placeholder='Web scarper API' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type='submit'>
                    Suggest
                </Button>
            </form>
        </Form>
    )
}

export default FormIdea