"use client"

import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import axios from 'axios';

const IconSchema = z.object({
    description: z.string(),
    colors: z.string(),
    style: z.string(),
})

const FormIcon = () => {

    const form = useForm<z.infer<typeof IconSchema>>({
        resolver: zodResolver(IconSchema),
        defaultValues: {
            description: "",
            colors: "",
            style: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof IconSchema>) => {

        try {

            console.log(values);
            const response = await axios.post("/api/generate-icons", values);
            console.log(response.data)

        } catch (error) {
            console.log("Something Went Wrong !!!")
        }
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Describe the Icon
                            </FormLabel>
                            <FormDescription>
                                Only input main keywords related to the object, be clear and concise, avoid using overly complicated language or vague terms.
                            </FormDescription>
                            <FormControl>
                                <Input placeholder="a rocket spewing spike" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='colors'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Choose Your Colour
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Choose what colors you want' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='style'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Choose Your Style
                            </FormLabel>
                            <FormControl>
                                <Input placeholder='Choose what style you want' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type='submit' >Generate Icon</Button>
            </form>
        </Form>
    )
}

export default FormIcon